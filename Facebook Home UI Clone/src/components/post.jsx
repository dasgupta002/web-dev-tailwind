export const Post = () => {
    return(
        <section className = "flex flex-col bg-white shadow-md rounded-md p-4 w-3/5">
            <div className = "flex flex-row gap-4 mb-4">
                <img src = "assets/avatar.png" width = "45" height = "45" className = "rounded-full" alt = "user_avatar" />
                <input type = "text" placeholder = "What's on your mind, Jay?" className = "bg-gray-200 text-sm px-4 text-gray-600 placeholder:text-gray-600 rounded-full outline-none w-full" />
            </div>
            <hr />
            <div className = "flex flex-row justify-around mt-2">
                <div className = "flex flex-row items-center text-sm text-gray-500 font-semibold rounded-md px-2 py-1 hover:bg-gray-100">
                    <img src = "assets/live.svg" width = "25" height = "25" alt = "web_live" />
                    <span className = "text-sm ml-2">Live video</span>
                </div>
                <div className = "flex flex-row items-center text-sm text-gray-500 font-semibold rounded-md px-2 py-1 hover:bg-gray-100">
                    <img src = "assets/photo.svg" width = "25" height = "25" alt = "web_media" />
                    <span className = "text-sm ml-2">Photo/video</span>
                </div>
                <div className = "flex flex-row items-center text-sm text-gray-500 font-semibold rounded-md px-2 py-1 hover:bg-gray-100">
                    <img src = "assets/emoji.svg" width = "25" height = "25" alt = "web_emoji" />
                    <span className = "text-sm ml-2">Feeling/Activity</span>
                </div>
            </div>
        </section>
    )
}