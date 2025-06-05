import { useSelector } from "react-redux"

const HomePage = () => {
  const {user} = useSelector(state=> state?.user);
  console.log("user ",user)
  return (
    <div>HomePage</div>
  )
}

export default HomePage