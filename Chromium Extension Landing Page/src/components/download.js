export default function Download() {
    return(
        <section className = "py-20 mt-20">
            <div className = "sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 className = "text-3xl text-center text-bookmark-blue">Download our extension</h1>
                <p className = "text-center text-bookmark-grey mt-4">
                    More browsers are available than ever before. Be on the lookout for 
                    the latest version. Keep bing to your favorite sites with us.
                </p>
            </div>
            <div className = "container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
                <div className = "flex flex-col bg-bookmark-white rounded-md shadow-xl lg:mb-16">
                    <div className = "flex flex-col items-center p-12">
                        <img src = "assets/brave.png" alt = "browser-one" className = "h-28" />
                        <h3 className = "mt-5 mb-2 text-bookmark-blue text-lg">Add to Brave</h3>
                        <p className = "mb-2 text-bookmark-grey font-light">Minimum version 44</p>
                    </div>
                    <div className = "flex p-6">
                        <button type = "button" className = "btn btn-purple flex-1 hover:bg-green-500 hover:text-black">Add now</button>
                    </div>
                </div>
                <div className = "flex flex-col bg-bookmark-white rounded-md shadow-xl lg:my-8">
                    <div className = "flex flex-col items-center p-12">
                        <img src = "assets/mozilla.png" alt = "browser-one" className = "h-28" />
                        <h3 className = "mt-5 mb-2 text-bookmark-blue text-lg">Add to Firefox</h3>
                        <p className = "mb-2 text-bookmark-grey font-light">Minimum version 37</p>
                    </div>
                    <div className = "flex p-6">
                        <button type = "button" className = "btn btn-purple flex-1 hover:bg-green-500 hover:text-black">Add now</button>
                    </div>
                </div>
                <div className = "flex flex-col bg-bookmark-white rounded-md shadow-xl lg:mt-16">
                    <div className = "flex flex-col items-center p-12">
                        <img src = "assets/safari.png" alt = "browser-one" className = "h-28" />
                        <h3 className = "mt-5 mb-2 text-bookmark-blue text-lg">Add to Safari</h3>
                        <p className = "mb-2 text-bookmark-grey font-light">Minimum version 22</p>
                    </div>
                    <div className = "flex p-6">
                        <button type = "button" className = "btn btn-purple flex-1 hover:bg-green-500 hover:text-black">Add now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}