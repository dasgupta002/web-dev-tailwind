import { FiSettings } from 'react-icons/fi'
import { IoIosAddCircle } from 'react-icons/io'
import { BsThreeDotsVertical, BsFillCheckCircleFill, BsCircleFill } from 'react-icons/bs'
import { FaUserAlt, FaUserCircle, FaPhoneAlt, FaArrowsAltH } from 'react-icons/fa'
import { GrLocationPin } from 'react-icons/gr'
import { MdAlternateEmail } from 'react-icons/md'
import { HiOutlineCalendar } from 'react-icons/hi'

export default function Tags() {
    return(
        <div className = "flex flex-col w-1/5 overflow-y-auto bg-gray-200 no-scrollbar">
            <div className = "flex flex-row items-center justify-between pt-4 px-4">
                <span className = "font-bold">Conversation details</span>
                <FiSettings />
            </div>
            <div className = "flex flex-row items-center mt-4 font-light px-4">
                <span className = "mr-4">Bug area</span>
                <IoIosAddCircle className = "text-xl" />
            </div>
            <div className = "flex flex-row items-center mt-2 font-light px-4">
                <span className = "mr-4">Category</span>
                <IoIosAddCircle className = "text-xl" />
            </div>
            <div className = "flex flex-row items-center mt-2 font-light px-4">
                <span className = "mr-4">Customer</span>
                <IoIosAddCircle className = "text-xl" />
            </div>
            <div className = "flex flex-row items-center mt-2 font-light px-4">
                <span className = "mr-4">Gravity Score</span>
                <IoIosAddCircle className = "text-xl" />
            </div>
            <div className = "flex flex-row items-center mt-2 font-light px-4">
                <span className = "mr-4">Number attribute</span>
                <IoIosAddCircle className = "text-xl" />
            </div>
            <div className = "flex flex-row items-center mt-2 font-light px-4">
                <span className = "mr-4">Product</span>
                <IoIosAddCircle className = "text-xl" />
            </div>
            <div className = "flex flex-row items-center mt-2 font-light px-4">
                <span className = "mr-4">Rating</span>
                <IoIosAddCircle className = "text-xl" />
            </div>
            <div className = "flex flex-row items-center mt-2 font-light px-4">
                <span className = "mr-4">Test type</span>
                <IoIosAddCircle className = "text-xl" />
            </div>
            <div className = "flex flex-row items-center mt-2 font-light px-4">
                <span className = "mr-4">Topic</span>
                <IoIosAddCircle className = "text-xl" />
            </div>
            <div className = "flex flex-row items-center mt-2 font-light px-4">
                <span className = "mr-4">Urgency</span>
                <IoIosAddCircle className = "text-xl" />
            </div>
            <div className = "flex flex-row items-center mt-2 font-light px-4">
                <span className = "mr-4">Brand</span>
                S&T
            </div>
            <div className = "flex flex-row items-center mt-2 mb-4 font-light px-4">
                <span className = "mr-4">ID</span>
                36000324247
            </div>
            <div className = "flex flex-row items-center justify-between border-t border-gray-400 pt-4 px-4">
                <span className = "font-bold">Related</span>
                <span className = "font-light">Customize</span>
            </div>
            <div className = "flex flex-col p-2 mx-4 bg-white mt-4 rounded-lg">
                <div className = "flex flex-row items-center justify-between">
                    <div className = "flex flex-row items-center">
                        <img src = "https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE" alt = "active-chat-avatar" className = "h-8 w-8 rounded-full" />
                        <span className = "ml-2 font-bold">Paola Wozniachi</span>
                    </div>
                    <BsThreeDotsVertical />
                </div>
                <div className = "flex flex-row items-center mt-4 ml-2 font-light">
                    <FaUserAlt />
                    <span className = "ml-2">User</span>
                </div>
                <div className = "flex flex-row items-center mt-2 ml-2 font-light">
                    <GrLocationPin />
                    <span className = "ml-2">4:46PM at San Jose, CA</span>
                </div>
                <div className = "flex flex-row items-center justify-between mt-2 ml-2 font-light">
                    <div className = "flex flex-row items-center">
                        <FaUserCircle />
                        <span className = "ml-2">Owner</span>
                    </div>
                    No owner
                </div>
                <div className = "flex flex-row items-center justify-between mt-2 ml-2 font-light">
                    <div className = "flex flex-row items-center">
                        <MdAlternateEmail />
                        <span className = "ml-2">Email</span>
                    </div>
                    paola@intercom.com
                </div>
                <div className = "flex flex-row items-center justify-between mt-2 ml-2 font-light">
                    <div className = "flex flex-row items-center">
                        <FaPhoneAlt />
                        <span className = "ml-2">Phone</span>
                    </div>
                    2476 4764
                </div>
                <div className = "flex flex-row items-center justify-between mt-2 ml-2 font-light">
                    <div className = "flex flex-row items-center">
                        <FaArrowsAltH />
                        <span className = "ml-2">User ID</span>
                    </div>
                    3600096546
                </div>
                <div className = "flex flex-row items-center justify-between mt-2 ml-2 font-light">
                    <div className = "flex flex-row items-center">
                        <HiOutlineCalendar />
                        <span className = "ml-2">Last seen</span>
                    </div>
                    2mth ago
                </div>
                <div className = "flex flex-row items-center justify-between mt-2 ml-2 font-light">
                    <div className = "flex flex-row items-center">
                        <HiOutlineCalendar />
                        <span className = "ml-2">Signed up</span>
                    </div>
                    6y ago
                </div>
            </div>
            <div className = "flex flex-col p-2 mx-4 bg-white mt-4 rounded-lg">
                <span className = "font-bold ml-2">Qualification</span>
                <div className = "flex flex-row items-center justify-between mt-2 ml-2 font-light">
                    <div className = "flex flex-row items-center">
                        <BsFillCheckCircleFill className = "text-green-600" />
                        <span className = "ml-2">Email</span>
                    </div>
                    paola@intercom.com
                </div>
                <div className = "flex flex-row items-center justify-between mt-2 ml-2 font-light">
                    <div className = "flex flex-row items-center">
                        <BsCircleFill className = "text-gray-300" />
                        <span className = "ml-2">Company name</span>
                    </div>
                    Add
                </div>
                <div className = "flex flex-row items-center justify-between mt-2 ml-2 font-light">
                    <div className = "flex flex-row items-center">
                        <BsCircleFill className = "text-gray-300" />
                        <span className = "ml-2">Company website</span>
                    </div>
                    Add
                </div>
                <div className = "flex flex-row items-center justify-between mt-2 ml-2 font-light">
                    <div className = "flex flex-row items-center">
                        <BsCircleFill className = "text-gray-300" />
                        <span className = "ml-2">Designation</span>
                    </div>
                    Add
                </div>
                <div className = "flex flex-row items-center justify-between mt-2 ml-2 font-light">
                    <div className = "flex flex-row items-center">
                        <BsFillCheckCircleFill className = "text-green-600" />
                        <span className = "ml-2">Active Plan</span>
                    </div>
                    Monthly Plan
                </div>
                <div className = "flex flex-row items-center justify-between mt-2 ml-2 font-light">
                    <div className = "flex flex-row items-center">
                        <BsCircleFill className = "text-gray-300" />
                        <span className = "ml-2">About</span>
                    </div>
                    Add
                </div>
            </div>   
            <div className = "flex flex-row items-center justify-between p-2 mx-4 bg-white mt-4 rounded-lg">
                <span className = "font-bold">Add Notes</span>
                <IoIosAddCircle className = "text-xl" />
            </div>
            <div className = "flex flex-col p-2 mx-4 mb-4 bg-white mt-4 rounded-lg">
                <div className = "flex flex-row items-center justify-between">
                    <span className = "font-bold">Add Tags</span>
                    <IoIosAddCircle className = "text-xl" />
                </div>
                <div className = "flex flex-row flex-wrap items-center mt-4">
                    <span className = "bg-yellow-200 font-light px-2 py-1 m-1 rounded-md">coffee</span>
                    <span className = "bg-yellow-200 font-light px-2 py-1 m-1 rounded-md">daily memo</span>
                    <span className = "bg-yellow-200 font-light px-2 py-1 m-1 rounded-md">management</span>
                    <span className = "bg-yellow-200 font-light px-2 py-1 m-1 rounded-md">free fridays</span>
                </div>
            </div>
        </div>
    )
}