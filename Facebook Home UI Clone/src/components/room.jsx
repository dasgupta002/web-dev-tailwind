export const Room = () => {
    return(
        <section className = "flex flex-row items-center bg-white rounded-md shadow-md w-3/5 p-4">
            <div className = "flex flex-row items-center gap-2 px-2 py-1 border border-gray-300 rounded-full text-blue-700 text-sm font-bold">
                <img src = "assets/room.svg" width = "25" height = "25" alt = "web_room" />
                <h2>Create Room</h2>
            </div>
        </section>
    )
}