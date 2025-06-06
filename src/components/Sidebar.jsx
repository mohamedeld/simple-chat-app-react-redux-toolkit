import { useState } from "react"
import Notifications from "./Notifications"
import Search from "./Search"
import SidebarHeader from "./SidebarHeader"

const Sidebar = () => {
    const [searchResult,setSearchResult] = useState([]);
  return (
    <div className="w-[40%] h-full select-none">
        <SidebarHeader/>
        <Notifications/>
        <Search searchResultLength={searchResult?.length}/>
    </div>
  )
}

export default Sidebar