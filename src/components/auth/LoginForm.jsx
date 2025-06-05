import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { loginValidation } from "../../utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginUser } from "../../features/userSlice";
import toast from "react-hot-toast";
import axios from "axios";
import AuthInput from "./AuthInput";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });
  const loginSubmit = async (values) => {
    try {
      const res = await dispatch(loginUser({ ...values }));
      if (res?.payload?.data?.user) {
        toast.success("Login successfully");
        navigate("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error?.response) {
        toast.error(error?.response?.data?.message);
      }
      toast.error("Registeration failed");
      console.error("Registration error:", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(loginSubmit)} className="mt-6 space-y-6">
        <AuthInput
          type={"email"}
          name="email"
          placeholder={"Email"}
          register={register}
          error={errors?.email?.message}
        />
        <AuthInput
          type={"password"}
          name="password"
          placeholder={"Password"}
          register={register}
          error={errors?.password?.message}
        />
        {error && <div className="text-red-500">{error}</div>}
        <button
          className="w-full flex items-center justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline:none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300"
          disabled={isSubmitting || status === "pending"}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        <p className="flex items-center justify-center gap-2 mt-10 text-center text-md dark:text-dark_text_1">
          <span>Do not have an account? </span>{" "}
          <Link to="/register" className=" hover:underline">
            Register
          </Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
