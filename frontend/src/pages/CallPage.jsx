import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAuthUser from '../hooks/useAuthUser';
import { useQuery } from '@tanstack/react-query';
import { getStreamToken } from '../lib/api';
import {
  StreamVideo,
  StreamVideoClient,
  StreamCall,
  CallControls,
  SpeakerLayout,
  StreamTheme,
  CallingState,
  useCallStateHooks

}
from "@stream-io/video-react-sdk"
 import "@stream-io/video-react-sdk/dist/css/styles.css"
import { PageLoader } from '../component/PageLoader';
import {toast} from 'react-hot-toast';
 
 const STREAM_API_KEY=import.meta.env.VITE_STREAM_API_KEY;

const CallPage = () => {
  const {id:callId}=useParams()
  const [chatClient,setChatClient]= useState(null);
   const [call,setCall]= useState(null);
    const [isConnecting,setIsConnecting]= useState(true);

    const {authUser,isLoading}= useAuthUser();
    const {data:tokenData}= useQuery({
      queryKey:["streamToken"],
      queryFn: getStreamToken,
      enabled: !!authUser //this will run only when auth user is available
    })
useEffect(()=>{
const initCall=async ()=>{
if(!tokenData.token || !authUser || !callId)
  return;
console.log("authUser:", authUser);
console.log("authUser._id:", authUser?._id);

try {
  console.log("Initisalizing stream video client...")
  const user={
    id:authUser._id,
    name:authUser.fullName,
    image:authUser.profilePic,
  }
  const videoClient= new StreamVideoClient({
    apiKey:STREAM_API_KEY,
    user,
    token:tokenData.token
  })
  const callInstance= videoClient.call("default",callId)
  await callInstance.join({create:true})
  console.log("Joined call successfully")
  setChatClient(videoClient)
  setCall(callInstance)
} catch (error) {
  console.error("Error joining call:",error)
  toast.error("Could not join the call. Please try again!")
} finally{
  setIsConnecting(false)
}
};
initCall();
},[tokenData,authUser,callId])

if(isLoading||isConnecting)
  return <PageLoader/>;

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className='relative'>
        {chatClient && call?(
         <StreamVideo client={chatClient}>
          <StreamCall call={call}>
            <CallContent/>
          </StreamCall>

         </StreamVideo>
        ):(
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <p>"Could not initiate call. Please refresh or try again later."</p>
          </div>
        )}
      </div>
    
    </div>
  );
};

const CallContent= ()=>{
  const {useCallCallingState}= useCallStateHooks();
  const callingState=useCallCallingState()

  const navigate=useNavigate();
  if(callingState===CallingState.LEFT)
    return navigate("/")

  return (
    <StreamTheme>
      <SpeakerLayout/>
      <CallControls/>
    </StreamTheme>
  )
}

export default CallPage
