import React from "react";
import {Navigate, Route,Routes} from "react-router"
import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import {PageLoader} from "./component/PageLoader.jsx"
import Layout from "./component/Layout.jsx";

import {Toaster} from "react-hot-toast"

import useAuthUser from "./hooks/useAuthUser.js";
import{ useThemeStore} from "./store/useThemeStore.js"

const App = () => {
  //tanstack Query
const {isLoading,authUser}=useAuthUser();
const {theme}= useThemeStore();
const isAuthenticated= Boolean(authUser)
const isOnboarded=authUser?.isOnboarded
 if(isLoading) return <PageLoader/>
  
  return ( 
    <div className="h-screen  " data-theme={theme}>
     
      
      <Routes>
        <Route path="/" element={isAuthenticated && isOnboarded?(
          <Layout showSidebar={true}>
            <HomePage/></Layout> ):(
          <Navigate to = { isAuthenticated?"/onboarding":"/login"}/>
        )} />
        <Route path="/signup" element={!isAuthenticated?<SignupPage />:<Navigate to ={isOnboarded?"/":"/onboarding"}/>} />
        <Route path="/login" element={!isAuthenticated?<LoginPage />:<Navigate to ={isOnboarded?"/":"/onboarding"}/>} />


        <Route path="/onboarding" element={
          isAuthenticated?(
           !isOnboarded?(
           <OnboardingPage />
           ):(< Navigate to ="/"/>)):(<Navigate to="/login"/>)} />


        <Route path="/notifications"  element={isAuthenticated && isOnboarded?(
          <Layout showSidebar={true}>
            <NotificationsPage/></Layout> ):(
          <Navigate to = { isAuthenticated?"/onboarding":"/login"}/>
        )} />


        <Route path="/call/:id"  element={isAuthenticated && isOnboarded?(
          <Layout showSidebar={false}>
            <CallPage/></Layout> ):(
          <Navigate to = { isAuthenticated?"/onboarding":"/login"}/>)}/>



        <Route path="/chat/:id"  element={isAuthenticated && isOnboarded?(
          <Layout showSidebar={false}>
            <ChatPage/></Layout> ):(
          <Navigate to = { isAuthenticated?"/onboarding":"/login"}/>
        )}/>
      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
