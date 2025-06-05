import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../utils/axiosInstance";

const initialState = {
    status:"",
    error:"",
    user:{
        id:"",
        name:"",
        email:"",
        picture:"",
        status:"",
        token:""
    }
}

export const registerUser = createAsyncThunk("auth/register",async(values,{rejectWithValue})=>{
    try{
        const res = await instance.post(`/auth/register`,values,{
            headers:{
                "Content-Type":"application/json"
            }
        });
        if(res?.status === 201){
            return res?.data
        }
    }catch(error){
        return rejectWithValue(error?.response?.data?.error?.message)
    }
})

export const loginUser = createAsyncThunk("auth/login",async(values,{rejectWithValue})=>{
    try{
        const res = await instance.post(`/auth/login`,values);
        if(res?.status === 200){
            return res?.data
        }
    }catch(error){
        rejectWithValue(error?.response?.data?.error?.message)
    }
})

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logout:(state)=>{
            state.status = "";
            state.error = "";
            state.user = {}
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(registerUser?.pending,(state)=>{
            state.status = "loading"
        }).addCase(registerUser?.fulfilled,(state,action)=>{
            state.status = "succeeded",
            state.user = action?.payload?.data?.user
        }).addCase(registerUser?.rejected,(state,action)=>{
            state.status = "failed",
            state.error = action?.payload || "Something went wrong"
        }),
        builder.addCase(loginUser?.pending,(state)=>{
            state.status = "loading"
        }).addCase(loginUser?.fulfilled,(state,action)=>{
            state.status = "success",
            state.user = action.payload?.data?.user
        }).addCase(loginUser?.rejected,(state,action)=>{
             state.status = "failed",
            state.error = action?.payload || "Something went wrong"
        })
    }
})

export const {logout} = userSlice.actions;

export default userSlice.reducer;