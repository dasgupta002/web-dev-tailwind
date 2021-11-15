export default function Hero() {
    return(
        <section className = "relative">
            <div className = "container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <div className = "flex flex-1 flex-col items-center lg:items-start">
                    <h2 className = "text-bookmark-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
                        A Simple Lightweight Bookmark Manager
                    </h2>
                    <p className = "text-bookmark-grey text-lg text-justify mb-6">
                        Clean UI, fast and easy to use. Syncs across all your devices,
                        so you can edit your bookmarks on any device. Enjoy stuff you
                        love, with the help of us, anytime, anywhere. Compatible with
                        all major browsers, even blazing fast on android.
                    </p>
                    <div className = "flex flex-wrap justify-center gap-6">
                        <button type = "button" className = "btn btn-purple hover:bg-yellow-500 hover:text-black">Get it on Chrome</button>
                        <button type = "button" className = "btn btn-red hover:bg-yellow-500 hover:text-black">Get it on Firefox</button>
                    </div>
                </div>
                <div className = "flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                    <img src = "assets/hero.png" alt = "hero" className = "w-3/4 h-3/4 md:w-full md:h-full" />
                </div>
            </div>
            <div className = "hidden md:block bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 lg:w-2/5 top-32 right-0 lg:-bottom-28"></div>
        </section>
    )
}