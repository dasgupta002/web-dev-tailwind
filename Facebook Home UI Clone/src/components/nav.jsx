export const Navbar = () => {
    return(
        <nav className = "w-full shadow-md bg-white sticky top-0 z-50 flex flex-row justify-between items-center">
            <div className = "flex flex-row items-center pl-2">
                <img src = "assets/logo.png" width = "40" height = "40" alt  = "web_logo" />
                <div className = "flex flex-row items-center ml-4 bg-gray-200 rounded-full">
                    <img src = "assets/search.svg" className = "px-4 py-2" alt = "web_search" />
                    <input type = "text" className = "bg-transparent text-gray-600 placeholder:text-gray-600 text-sm outline-none py-2" placeholder = "Search facebook!" />
                </div>
            </div>
            <div className = "flex flex-row items-center gap-6">
                <div className = "border-b-2 border-blue-400 px-6 py-3">
                    <img src = "assets/home.svg" width = "25" height = "25" alt = "web_home" />
                </div>
                <div className = "px-6 py-3 rounded-md hover:bg-gray-200">
                    <img src = "assets/people.svg" width = "25" height = "25" alt = "web_people" />
                </div>
                <div className = "px-6 py-3 rounded-md hover:bg-gray-200">
                    <img src = "assets/group.svg" width = "25" height = "25" alt = "web_group" />
                </div>
            </div>
            <div className = "flex flex-row items-center gap-4 pr-2">
                <span className = "text-sm font-semibold p-2 rounded-full bg-gray-300">Find Friends</span>
                <div className = "p-2 bg-gray-300 rounded-full">
                    <img src = "assets/add.svg" width = "25" height = "25" alt = "add_notification" />
                </div>
                <div className = "p-2 bg-gray-300 rounded-full">
                    <img src = "assets/notification.svg" width = "25" height = "25" alt = "web_notification" />
                </div>
                <div className = "p-2 bg-gray-300 rounded-full">
                    <img src = "assets/messenger.svg" width = "25" height = "25" alt = "web_messenger" />
                </div>
                <img src = "assets/avatar.png" width = "44" height = "44" className = "rounded-full" alt = "web_account" />
            </div>
        </nav>
    )
} 