import RegisterForm from "../components/auth/RegisterForm"
import AuthLayout from "../components/AuthLayout"

const RegisterPage = () => {
  return (
    <AuthLayout title={"Sign up"}>
        <RegisterForm/>
    </AuthLayout>
  )
}

export default RegisterPage