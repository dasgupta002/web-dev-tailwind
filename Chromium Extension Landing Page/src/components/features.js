export default function Features() {
    return(
        <section className = "bg-bookmark-white py-20 mt-20 lg:mt-60">
            <div className = "sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 className = "text-3xl text-center text-bookmark-blue">Features</h1>
                <p className = "text-center text-bookmark-grey mt-4">
                    Loads of features to help you get the most out of your bookmarks.
                    Unmatched speed, ease of use, and a variety of bookmarking options.
                    Join with us today, for a better productive yourself!
                </p>
            </div>
            <div className = "relative mt-20 lg:mt-24">
                <div className = "container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    <div className = "flex flex-1 justify-center mb-10 z-10 lg:mb-0">
                        <img src = "assets/one-click.png" alt = "feature-one" className = "w-3/4 h-3/4 md:w-full md:h-full" />
                    </div>
                    <div className = "flex flex-1 flex-col items-center lg:items-start">
                        <h1 className = "text-3xl text-bookmark-blue">Bookmark in one click</h1>
                        <p className = "text-bookmark-grey my-4 text-justify sm:w-3/4 lg:w-full">
                            Organize your bookmarks in one go. Simple drag and drop with full
                            customization. You can also add a description and a category. UI
                            is neat and easy to use.
                        </p>
                        <button type = "button" className = "btn btn-purple hover:bg-pink-500 hover:text-black">Take a tour</button>
                    </div>
                </div>
                <div className = "hidden lg:block bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 lg:w-2/5 lg:-bottom-24"></div>
            </div>
            <div className = "relative mt-20 lg:mt-52">
                <div className = "container flex flex-col-reverse lg:flex-row items-center justify-center gap-x-24">
                    <div className = "flex flex-1 flex-col items-center lg:items-start">
                        <h1 className = "text-3xl text-bookmark-blue">Intelligent search to find right bookmarks</h1>
                        <p className = "text-bookmark-grey my-4 text-justify sm:w-3/4 lg:w-full">
                            Find the bookmarks you need at the hour with our powerful AI based search tool.
                            You can filter by title, description, category, and even tags. You can also star
                            the bookmarks you need, to make it easier to find when time is less.
                        </p>
                        <button type = "button" className = "btn btn-purple hover:bg-pink-500 hover:text-black">Try now</button>
                    </div>
                    <div className = "flex flex-1 justify-center mb-10 z-10 lg:mb-0">
                        <img src = "assets/search.png" alt = "feature-one" className = "w-3/4 h-3/4 md:w-full md:h-full" />
                    </div>
                </div>
                <div className = "hidden lg:block bg-bookmark-purple rounded-l-full absolute h-80 right-0 w-2/4 lg:w-2/5 lg:-bottom-24"></div>
            </div>
            <div className = "relative mt-20 lg:mt-52">
                <div className = "container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    <div className = "flex flex-1 justify-center mb-10 z-10 lg:mb-0">
                        <img src = "assets/share.png" alt = "feature-one" className = "w-3/4 h-3/4 md:w-full md:h-full" />
                    </div>
                    <div className = "flex flex-1 flex-col items-center lg:items-start">
                        <h1 className = "text-3xl text-bookmark-blue">Share bookmarks with ones you love</h1>
                        <p className = "text-bookmark-grey my-4 text-justify sm:w-3/4 lg:w-full">
                            Share your bookmarks with your friends and family. You can share your bookmarks
                            on Facebook, Twitter, What'sApp and even on your own blogs. Enjoy what you love
                            with your loved ones. 
                        </p>
                        <button type = "button" className = "btn btn-purple hover:bg-pink-500 hover:text-black">Read our docs</button>
                    </div>
                </div>
                <div className = "hidden lg:block bg-bookmark-purple rounded-r-full absolute h-80 w-2/4 lg:w-2/5 lg:-bottom-24"></div>
            </div>
        </section>        
    )
}