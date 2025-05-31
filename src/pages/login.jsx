import LoginForm from "../components/auth/LoginForm"

const LoginPage = () => {
  return (
    <AuthLayout title={"login"}>
        <LoginForm/>
    </AuthLayout>
  )
}

export default LoginPage