import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../utils/axiosInstance";

const initialState = {
    status:"",
    error:"",
    conversations:[],
    activeConversations:{},
    notifications:[]
}

export const getConversations = createAsyncThunk("chat/conversation",async (token,{rejectWithValue})=>{
    try{
        const res = await instance.get(`/conversation`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
    if(res?.status === 200){
        return res?.data
    }
    }catch(error){
        return rejectWithValue(error?.response?.data?.error?.message)
    }
})

export const chatSlice = createSlice({
    name:'chat',
    initialState,
    reducers:{
        setActiveConversation:(state,action)=>{
            state.activeConversations = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getConversations?.pending,(state)=>{
            state.status = "loading"
        }).addCase(getConversations.fulfilled,(state,action)=>{
            state.status = "success",
            state.conversations = action.payload
        }).addCase(getConversations.rejected,(state,action)=>{
            state.status = "rejected",
            state.error =  action?.payload || "Something went wrong"
        })
    }
});

export const {setActiveConversation} = chatSlice.actions;

export default chatSlice.reducer;