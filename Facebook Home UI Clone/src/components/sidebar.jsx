export const Sidebar = () => {
    return(
        <aside className = "flex flex-col w-2/12">
            <ul className = "flex flex-col gap-2 ml-4 mt-4 p-4">
                <li className = "flex flex-row items-center p-2 rounded-md hover:bg-gray-300">
                    <img src = "assets/avatar.png" width = "30" height = "30" className = "rounded-full" alt = "user_avatar" />
                    <span className = "text-sm ml-4">Jay Pathak</span>
                </li>
                <li className = "flex flex-row items-center p-2 rounded-md hover:bg-gray-300">
                    <img src = "assets/people_filled.svg" width = "28" height = "28" alt = "web_people" />
                    <span className = "text-sm ml-4">Find Friends</span>
                </li>
                <li className = "flex flex-row items-center p-2 rounded-md hover:bg-gray-300">
                    <img src = "assets/group_filled.svg" width = "28" height = "28" alt = "web_group" />
                    <span className = "text-sm ml-4">Groups</span>
                </li>
                <li className = "flex flex-row items-center p-2 rounded-md hover:bg-gray-300">
                    <img src = "assets/store.svg" width = "28" height = "28" alt = "web_store" />
                    <span className = "text-sm ml-4">Marketplace</span>
                </li>
                <li className = "flex flex-row items-center p-2 rounded-md hover:bg-gray-300">
                    <img src = "assets/video.svg" width = "28" height = "28" alt = "web_video" />
                    <span className = "text-sm ml-4">Videos</span>
                </li>
                <li className = "flex flex-row items-center p-2 rounded-md hover:bg-gray-300">
                    <img src = "assets/events.svg" width = "28" height = "28" alt = "web_event" />
                    <span className = "text-sm ml-4">Events</span>
                </li>
                <li className = "flex flex-row items-center p-2 rounded-md hover:bg-gray-300">
                    <img src = "assets/memories.svg" width = "28" height = "28" alt = "web_memories" />
                    <span className = "text-sm ml-4">Memories</span>
                </li>
                <li className = "flex flex-row items-center p-2 rounded-md hover:bg-gray-300">
                    <img src = "assets/saved.svg" width = "28" height = "28" alt = "web_saved" />
                    <span className = "text-sm ml-4">Saved</span>
                </li>
                <li className = "flex flex-row items-center p-2 rounded-md hover:bg-gray-300">
                    <img src = "assets/pages.svg" width = "28" height = "28" alt = "web_pages" />
                    <span className = "text-sm ml-4">Pages</span>
                </li>
                <li className = "flex flex-row items-center p-2 rounded-md hover:bg-gray-300">
                    <div className = "bg-gray-300 rounded-full">
                        <img src = "assets/more.svg" width = "28" height = "28" alt = "web_more" />
                    </div>
                    <span className = "text-sm ml-4">See More</span>
                </li>
            </ul>
        </aside>
    )
}