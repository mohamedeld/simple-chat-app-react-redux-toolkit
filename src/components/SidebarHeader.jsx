import { useSelector } from "react-redux"
import CommunityIcon from "../svg/Community";
import StoryIcon from "../svg/Story";
import ChatIcon from "../svg/Chat";
import DotsIcon from "../svg/Dots";

const SidebarHeader = () => {
    const {user} = useSelector(state=> state.user);
  return (
    <div className="dark:bg-dark_bg_2 flex items-center p-4 ">
        <div className="container flex w-full items-center justify-between">
            <button className="">
                <img src={user?.picture} alt="user image" className="w-[40px] h-[40px] rounded-full object-cover"  />
            </button>
            <ul className="flex items-center gap-x-2.5">
                <li>
                    <button className="btn">
                        <CommunityIcon className="dark:fill-dark_svg_1"/>
                    </button>
                </li>
                <li>
                    <button className="btn">
                        <StoryIcon className="dark:fill-dark_svg_1"/>
                    </button>
                </li>
                <li>
                    <button className="btn">
                        <ChatIcon className="dark:fill-dark_svg_1"/>
                    </button>
                </li>
                <li>
                    <button className="btn">
                        <DotsIcon className="dark:fill-dark_svg_1"/>
                    </button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SidebarHeader