import { AiFillStar, AiFillClockCircle, AiFillPicture } from 'react-icons/ai'
import { BsFillBookmarkCheckFill, BsThreeDotsVertical, BsEmojiSmileFill } from 'react-icons/bs'
import { RiFileGifFill, RiAttachmentFill, RiMessage3Fill, RiCheckboxBlankFill } from 'react-icons/ri'

export default function Inbox() {
    return(
        <div className = "flex flex-col w-2/5 border-l border-r border-gray-400 bg-white">
            <div className = "flex flex-row items-center justify-between p-4 border-b border-gray-400">
                <div className = "flex flex-col">
                    <span className = "font-bold">Paola Wozniachi</span>
                    <span className = "font-light">Add conversation title</span>
                </div>
                <div className = "flex flex-row items-center justify-evenly text-lg w-1/6">
                    <AiFillStar />
                    <AiFillClockCircle />
                    <BsFillBookmarkCheckFill />
                    <BsThreeDotsVertical />
                </div>
            </div>
            <div className = "flex flex-col flex-grow overflow-y-auto space-y-6 p-4 chat-background no-scrollbar">
                <div className = "font-light self-center text-blue-600">Conversation request approved by you!</div>
                <div className = "flex flex-row">
                    <div className = "flex-flex-col">
                        <div className = "bg-gray-200 font-light rounded-md p-4">Having problems in booking my ticket!</div>
                        <div className = "font-light mt-2">6d</div>
                    </div>
                </div>                
                <div className = "flex flex-row-reverse">
                    <div className = "flex-flex-col">
                        <div className = "bg-gray-200 font-light rounded-md p-4">Ping up their booking support hotline!</div>
                        <div className = "font-light mt-2">6d</div>
                    </div>
                </div>                
                <div className = "flex flex-row">
                    <div className = "flex-flex-col">
                        <div className = "bg-gray-200 font-light rounded-md p-4">No response from there, our office tour is delayed!</div>
                        <div className = "font-light mt-2">6d</div>
                    </div>
                </div>                
                <div className = "flex flex-row-reverse">
                    <div className = "flex-flex-col">
                        <div className = "bg-gray-200 font-light rounded-md p-4">Then avail by road as distance is not that much!</div>
                        <div className = "font-light mt-2">6d</div>
                    </div>
                </div>                
                <div className = "flex flex-row">
                    <div className = "flex-flex-col">
                        <div className = "bg-gray-200 font-light rounded-md p-4">No need, they managed it, done with the ticket!</div>
                        <div className = "font-light mt-2">5d</div>
                    </div>
                </div>                
                <div className = "flex flex-row-reverse">
                    <div className = "flex-flex-col">
                        <div className = "bg-gray-200 font-light rounded-md p-4">Had the factory tour?</div>
                        <div className = "font-light mt-2">5d</div>
                    </div>
                </div>                
            </div>
            <div className = "flex flex-col shadow-xl border border-gray-400 rounded-md m-4 p-4">
                <div className = "flex flex-row items-center">
                    <span className = "text-blue-600 border-b border-blue-600 pb-1 mr-4">Reply</span>
                    <span className = "font-light">Note</span>
                </div>
                <input type = "text" placeholder = "Type # to add a saved reply or try sending an article" className = "outline-none mt-4 mb-8" />
                <div className = "flex flex-row items-center justify-between">
                    <div className = "flex flex-row items-center justify-evenly text-blue-600 text-xl w-2/6">
                        <BsEmojiSmileFill />
                        <RiFileGifFill />
                        <AiFillPicture />
                        <RiAttachmentFill />
                        <RiMessage3Fill />
                        <RiCheckboxBlankFill />
                    </div>
                    <button className = "text-white bg-blue-600 font-light rounded-lg px-4 py-1">Send</button>
                </div>
            </div>
        </div>
    )
}