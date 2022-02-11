export const Story = () => {
    return(
        <section className = "flex flex-row items-center bg-white rounded-md shadow-md w-3/5 p-4 gap-6 mt-8">
            <div className = "bg-blue-100 rounded-full p-2">
                <img src = "assets/add_blue.svg" width = "25" height = "25" alt = "web_add" />
            </div>
            <span>
                <h2 className = "font-bold">Create a story!</h2>
                <p className = "text-xs">Share a photo or write something.</p>
            </span>
        </section>
    )
}