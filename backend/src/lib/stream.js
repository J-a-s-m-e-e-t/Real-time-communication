import {StreamChat} from "stream-chat";
import "dotenv/config";
const apiKey=process.env.stream_api_key;
const apiSecret=process.env.stream_api_secret;
if(!apiKey||!apiSecret)
console.log("Stream API key or secret is missing");

const streamClient=StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser= async (userData)=>{
    try {
        await streamClient.upsertUsers([userData])
        return userData;
    } catch (error) {
        console.error("Error upserting Stream User",error);
    }
};

export const generateStreamToken=(userId)=>{
    try {
        //ensure userId is a string
        const userIdStr=userId.toString();
        return streamClient.createToken(userIdStr)
        
    } catch (error) {
        console.log("Error generating Stream token",error)
    }
}