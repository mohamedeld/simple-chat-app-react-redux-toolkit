import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux"
import { getConversations } from "../features/chatSlice";

const Conversations = () => {
    const dispatch = useDispatch();
    const [conversations,setConversations] = useState([]);
    const {user} = useSelector(state=> state.user);

    const getConversationsData = async ()=>{
        try{  
            console.log(user?.token)
            const res = await dispatch(getConversations(user?.token));
            console.log("res ",res)
            if(res?.meta?.requestStatus === "fulfilled"){
                console.log(res?.payload)
                setConversations(res?.payload);
            }   
        }catch(error){
            toast.error(error?.message)
        }
    }
    console.log(conversations)
    useEffect(()=>{
        if(user?.token){
            
            getConversationsData();
        }
    },[user?.token])
  return (
    <div>Conversations</div>
  )
}

export default Conversations