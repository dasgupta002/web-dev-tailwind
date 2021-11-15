import { FaAngleDown } from "react-icons/fa";

export default function Faq() {
    return(
        <section className = "bg-bookmark-white py-20">
            <div className = "container">
                <div className = "sm:w-3/4 lg:w-5/12 mx-auto px-2">
                    <h1 className = "text-3xl text-center text-bookmark-blue">Frequently Asked Questions</h1>
                    <p className = "text-center text-bookmark-grey mt-4">
                        For any doubts, please go through all the FAQ's. If you 
                        still have any questions, feel free to contact us. 
                    </p>
                </div>
                <div className = "flex flex-col w-3/4 lg:w-5/12 mt-12 mx-auto">
                    <div className = "flex items-center border-b-2 py-4">
                        <span className = "flex-1">What is a bookmark?</span>
                        <FaAngleDown className = "text-bookmark-purple" />
                    </div>
                    <div className = "flex items-center border-b-2 py-4">
                        <span className = "flex-1">How can I request a new browser?</span>
                        <FaAngleDown className = "text-bookmark-purple" />
                    </div>
                    <div className = "flex items-center border-b-2 py-4">
                        <span className = "flex-1">Is there an android app?</span>
                        <FaAngleDown className = "text-bookmark-purple" />
                    </div>
                    <div className = "flex items-center border-b-2 py-4">
                        <span className = "flex-1">Any chromium browser would work aside Brave?</span>
                        <FaAngleDown className = "text-bookmark-purple" />
                    </div>
                    <div className = "flex items-center border-b-2 py-4">
                        <span className = "flex-1">How to sync all bookmarks across my devices?</span>
                        <FaAngleDown className = "text-bookmark-purple" />
                    </div>
                    <div className = "flex items-center border-b-2 py-4">
                        <span className = "flex-1">Would this work fine on mac OS latest release?</span>
                        <FaAngleDown className = "text-bookmark-purple" />
                    </div>
                    <button type = "button" className = "btn btn-purple flex self-center mt-12">Learn more</button>
                </div>
            </div>
        </section>
    )
}