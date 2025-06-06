import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux"
import { getConversations } from "../features/chatSlice";

const Conversations = () => {
    const dispatch = useDispatch();
    
    const getConversationsData = async ()=>{
        try{  
            const res = await dispatch(getConversations());
            console.log(res)
        }catch(error){
            toast.error(error?.message)
        }
    }

    useEffect(()=>{
        getConversationsData();
    },[])
  return (
    <div>Conversations</div>
  )
}

export default Conversations