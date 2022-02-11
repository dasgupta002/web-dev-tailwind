export const Friends = () => {
    return(
        <section className = "flex flex-col items-center gap-4 bg-white rounded-md shadow-md w-3/5 p-8 mb-8">
            <span className = "text-gray-600 text-center">
                <h1 className = "font-bold">No more posts!</h1>
                <p className = "text-sm">Add more friends to see more posts in your feed.</p>
            </span>            
            <button className = "bg-blue-600 text-white rounded-md px-4 py-2">Find Friends</button>
        </section>
    )
}