import { useSelector } from "react-redux"
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const {user} = useSelector(state=> state?.user);
  return (
    <div className="min-h-screen dark:bg-dark_bg1 flex  justify-center py-[19px] overflow-hidden dark:bg-dark_bg_1">
      <div className="container h-full flex">
        <Sidebar/>
      </div>
    </div>
  )
}

export default HomePage