import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
    return(
        <footer className = "bg-bookmark-blue py-6">
            <div className = "container flex flex-col md:flex-row items-center">
                <div className = "flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
                    <img src = "assets/logo-white.png" alt = "logo" />
                    <ul className = "flex text-white text-xs uppercase gap-12">
                        <li className = "cursor-pointer">Features</li>
                        <li className = "cursor-pointer">Pricing</li>
                        <li className = "cursor-pointer">Contact</li>
                    </ul>
                </div>
                <div className = "flex text-white text-xl mt-12 md:mt-0 gap-6">
                    <FaTwitterSquare />
                    <FaInstagramSquare />
                </div>
            </div>
        </footer>
    )
}