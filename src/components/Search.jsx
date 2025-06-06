import { useState } from "react"
import ReturnIcon from "../svg/Return";
import SearchIcon from "../svg/Search";
import FilterIcon from "../svg/FilterIcon";

const Search = ({searchResultLength}) => {
    const [show,setShow] = useState(false);
    const [search,setSearch] = useState()
  return (
    <div className="py-1.5">
        <div className="px-[10px]">
            <div className="flex items-center gap-x-2">
                <div className="w-full dark:bg-dark_bg_2 flex rounded-lg pl-2">
                    {show || searchResultLength > 0 ? (
                        <span className="w-8 flex items-center justify-center rotateAnimation">
                            <ReturnIcon className={"fill-green_1 w-5"}/>
                        </span>
                    ):(
                         <span className="w-8 flex items-center justify-center ">
                            <SearchIcon className={"dark:fill-dark_svg_1 w-5"}/>
                        </span>
                    )}
                    <input type="text" placeholder="Search or start a new chat" value={search} className="input" onChange={(e)=> setSearch(e.target.value)} onFocus={()=> setShow(true)} onBlur={()=> {
                        if(searchResultLength === 0){
                            setShow(false)
                        }
                    }} onKeyDown={(e)=> setSearch(e.target.value)} />
                </div>
                <button className="btn p-1">
                    <FilterIcon className={"dark:fill-dark_svg_2"}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Search