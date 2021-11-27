import { BsSearch, BsChevronDown, BsChevronRight } from 'react-icons/bs'
import { GoMention, GoPencil } from 'react-icons/go'
import { MdInfo, MdMessage } from 'react-icons/md'
import { GrAdd } from 'react-icons/gr'

export default function Settings() {
    return(
        <div className = "flex flex-col bg-gray-200 w-72">
            <div className = "flex items-center h-16 mb-12 px-4 justify-between text-xl flex-row">
                <h1 className = "font-bold">Inbox</h1>
                <BsSearch />
            </div>
            <div className = "flex items-center justify-between h-6 px-4 mb-6 text-lg flex-row">
                <h1 className = "font-light">Conversations</h1>
                <BsChevronDown />
            </div>
            <div className = "flex items-center justify-between h-6 px-4 font-light text-md flex-row">
                <span className = "flex flex-row items-center">
                    <GoMention />
                    <h1 className = "ml-2">Mentions</h1>
                </span>
                5
            </div>
            <div className = "flex items-center justify-between h-6 px-4 font-light text-md flex-row">
                <span className = "flex flex-row items-center">
                    <MdInfo />
                    <h1 className = "ml-2">Unassigned</h1>
                </span>
                2,497
            </div>
            <div className = "flex items-center justify-between h-6 px-4 mb-12 font-light text-md flex-row">
                <span className = "flex flex-row items-center">
                    <MdMessage />
                    <h1 className = "ml-2">All</h1>
                </span>
                5,171
            </div>
            <div className = "flex items-center h-6 mb-4 px-4 text-lg flex-row">
                <GrAdd />
                <h1 className = "ml-2 font-light">Create view</h1>
            </div>
            <div className = "flex items-center justify-between h-6 mb-12 px-4 text-lg flex-row">
                <h1 className = "font-light">See 124 more</h1>
                <GoPencil />
            </div>
            <div className = "flex items-center justify-between h-6 px-4 mb-2 text-lg flex-row">
                <h1 className = "font-light">Automation</h1>
                <BsChevronRight />
            </div>
            <div className = "flex items-center justify-between h-6 px-4 text-lg flex-row">
                <h1 className = "font-light">Your Preferences</h1>
                <BsChevronRight />
            </div>
        </div>
    )
}