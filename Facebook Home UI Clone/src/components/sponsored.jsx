export const Sponsored = () => {
    return(
        <aside className = "flex flex-col gap-2 w-3/12 mr-6">
            <div className = "flex flex-col gap-4 mt-8">
                <h2 className = "text-gray-500 text-lg font-bold p-2">Sponsored</h2>
                <div className = "flex flex-row items-center gap-4 p-2 rounded-md hover:bg-gray-300">
                    <img src = "assets/coke.jpg" className = "h-36 w-36 rounded-md" alt = "web_coke" />
                    <div>
                        <span className = "text-sm font-bold">Get your's now!</span>
                        <p className  = "text-gray-500 text-xs font-bold">cocacola.org</p>
                    </div>
                </div>
                <div className = "flex flex-row items-center gap-4 p-2 rounded-md hover:bg-gray-300">
                    <img src = "assets/macdonald.jpeg" className = "h-36 w-36 rounded-md" alt = "web_macdonald" />
                    <div>
                        <span className = "text-sm font-bold">Order your's now!</span>
                        <p className  = "text-gray-500 text-xs font-bold">macdonalds.com</p>
                    </div>
                </div>
            </div>
            <hr style = {{ height: '2px', background: 'grey', margin: '0.5rem' }} />
            <div className = "flex flex-col gap-4 p-2">
                <h2 className = "text-gray-500 text-lg font-bold">Group Conversation</h2>
                <div className = "flex flex-row items-center gap-4">
                    <div className = "bg-gray-300 rounded-full p-2">
                        <img src = "assets/add.svg" alt = "web_add" />
                    </div>
                    <span>Create New Group</span>
                </div>
            </div>
        </aside>
    )
}