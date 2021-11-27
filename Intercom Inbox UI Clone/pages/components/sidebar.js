import { FaIntercom, FaPaperPlane, FaUserFriends, FaBox } from 'react-icons/fa'
import { CgInbox } from 'react-icons/cg'
import { BsBookFill } from 'react-icons/bs'
import { GoGraph, GoBell } from 'react-icons/go'
import { SiChatbot } from 'react-icons/si'
import { RiLayoutGridFill } from 'react-icons/ri'

export default function Sidebar() {
    return(
        <div className = "flex flex-col justify-between items-center bg-gray-300 w-16 p-4">
            <ul className = "flex flex-col text-2xl space-y-6 list-none">
                <li className = "mb-4"><FaIntercom /></li>
                <li className = "text-blue-600 relative">
                    <CgInbox className = "text-3xl" />
                    <div className = "h-4 w-4 bg-red-500 text-xs rounded-full absolute top-0 right-0 text-center text-white">5</div>
                </li>
                <li><FaPaperPlane /></li>
                <li><FaUserFriends /></li>
                <li><BsBookFill /></li>
                <li><FaBox /></li>
                <li><GoGraph /></li>
            </ul>
            <ul className = "flex flex-col text-2xl space-y-6 list-none">
                <li><SiChatbot /></li>
                <li><RiLayoutGridFill /></li>
                <li><GoBell /></li>
                <li>
                    <img src = "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" alt = "user-avatar" className = "h-8 w-8 rounded-full" />
                </li>
            </ul>
        </div>
    )
}