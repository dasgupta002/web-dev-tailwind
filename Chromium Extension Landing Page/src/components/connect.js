export default function Connect() {
    return(
        <section className = "bg-bookmark-purple text-white py-20">
            <div className = "container">
                <div className = "w-3/4 lg:w-2/4 mx-auto">
                    <p className = "font-light uppercase text-center mb-6">47,000+ already joined</p>
                    <h1 className = "text-3xl text-center">Stay updated with what we're doing!</h1>
                    <div className = "flex flex-col md:flex-row gap-6 mt-12">
                        <input type = "text" placeholder = "Enter your mailing address" className = "flex-1 px-2 py-3 rounded-md text-black focus:outline-none" />
                        <button type = "button" className = "cursor-pointer bg-bookmark-red text-white rounded-md px-4 py-3">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}