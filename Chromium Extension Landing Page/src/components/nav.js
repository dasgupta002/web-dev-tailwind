import { GiAbstract050 } from "react-icons/gi";

export default function Navbar() {
    return(
        <header>
            <nav className = "container flex items-center py-4 mt-4">
                <div className = "py-1">
                    <img src = "assets/logo.svg" alt = "logo" />
                </div>
                <ul className = "hidden md:flex flex-1 justify-end items-center text-bookmark-blue text-xs uppercase gap-12">
                    <li className = "cursor-pointer">Features</li>
                    <li className = "cursor-pointer">Pricing</li>
                    <li className = "cursor-pointer">Contact</li>
                    <button type = "button" className = "cursor-pointer bg-bookmark-red text-white uppercase rounded-md px-7 py-3">Login</button>
                </ul>
                <div className = "flex flex-1 md:hidden justify-end items-center text-xl"><GiAbstract050 /></div>
            </nav>
        </header>
    )
}