import LoginForm from "../components/auth/LoginForm"
import AuthLayout from "../components/AuthLayout"

const LoginPage = () => {
  return (
    <AuthLayout title={"login"}>
        <LoginForm/>
    </AuthLayout>
  )
}

export default LoginPage