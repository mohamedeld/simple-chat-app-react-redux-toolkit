import { useForm } from "react-hook-form"
import AuthInput from "./AuthInput"
import { yupResolver } from "@hookform/resolvers/yup"
import { signUpValidation } from "../../utils/validations"
import { Link } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../features/userSlice"


const RegisterForm = () => {
    const dispatch = useDispatch();
    const {status,error} = useSelector(state=> state?.user)
    const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm({
        resolver:yupResolver(signUpValidation)
    })
    const registerSubmit = async (values)=>{
            try{
                await dispatch(registerUser({...values,picture:""}))
            }catch(error){
                console.error("Registration error:", error);
            }
            }
  return (
    <form onSubmit={handleSubmit(registerSubmit)} className="mt-6 space-y-6">
                <AuthInput
                    type={"text"}
                    name="name"
                    placeholder={"Full Name"}
                    register={register}
                    error={errors?.name?.message}
                />
                <AuthInput
                    type={"email"}
                    name="email"
                    placeholder={"Email"}
                    register={register}
                    error={errors?.email?.message}
                />
                <AuthInput
                    type={"text"}
                    name="status"
                    placeholder={"Status"}
                    register={register}
                    error={errors?.status?.message}
                />
                <AuthInput
                    type={"password"}
                    name="password"
                    placeholder={"Password"}
                    register={register}
                    error={errors?.password?.message}
                />
                {error && <div className="text-red-500">
                    {error}</div>}
                <button className="w-full flex items-center justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline:none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300" disabled={isSubmitting || status === "pending"}>
                    {isSubmitting ? 'Submitting...':'Submit'}
                </button>
                <p className="flex items-center justify-center gap-2 mt-10 text-center text-md dark:text-dark_text_1">
                    <span>have an account? </span> <Link to="/login" className=" hover:underline">Sign in</Link>
                </p>
            </form> 
  )
}

export default RegisterForm