import { FaBars, FaInbox, FaCaretDown } from 'react-icons/fa'

export default function Chats() {
    return(
        <div className = "flex flex-col bg-white rounded-tl-xl border-l shadow-xl w-1/5">
            <div className = "flex flex-col p-6 h-24">
                <div className = "flex flex-row text-xl items-center">
                    <FaBars className = "mr-4" />
                    <span className = "font-bold">You</span>
                </div>
                <div className = "flex flex-row items-center mt-6 justify-between">
                    <div className = "flex flex-row items-center">
                        <FaInbox className = "mr-4" />
                        5
                        <FaCaretDown className = "ml-4" />
                    </div>
                    <div className = "flex flex-row items-center">
                        <span className = "font-bold">Newest</span>
                        <FaCaretDown className = "ml-4" />
                    </div>
                </div>
            </div>
            <div className = "flex flex-col mt-6 overflow-y-auto no-scrollbar">
                <div className = "flex flex-col p-4">
                    <div className = "flex flex-row items-center justify-between">
                        <div className = "flex flex-row items-center">
                            <img src = "https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU" alt = "chat-avatar" className = "h-8 w-8 rounded-full mr-4" />
                            <span className = "font-light">Nikola Barreta</span>
                        </div>
                        <span className = "font-light">5d</span>
                    </div>
                    <div className = "flex flex-row items-center mt-2 ml-12">
                        <img src = "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" alt = "user-avatar" className = "h-4 w-4 rounded-full mr-4" />
                        <span className = "font-light text-sm">Free tomorrow for a meeting?</span>
                    </div>
                </div>
                <hr />
                <div className = "flex flex-col p-4 bg-blue-100">
                    <div className = "flex flex-row items-center justify-between">
                        <div className = "flex flex-row items-center">
                            <img src = "https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE" alt = "chat-avatar" className = "h-8 w-8 rounded-full mr-4" />
                            <span className = "font-light">Paola Wozniachi</span>
                        </div>
                        <span className = "font-light">5d</span>
                    </div>
                    <div className = "flex flex-row items-center mt-2 ml-12">
                        <img src = "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" alt = "user-avatar" className = "h-4 w-4 rounded-full mr-4" />
                        <span className = "font-light text-sm">Had the factory tour?</span>
                    </div>
                </div>
                <hr />
                <div className = "flex flex-col p-4">
                    <div className = "flex flex-row items-center justify-between">
                        <div className = "flex flex-row items-center">
                            <img src = "https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY" alt = "chat-avatar" className = "h-8 w-8 rounded-full mr-4" />
                            <span className = "font-light">Stepanich Perosevich</span>
                        </div>
                        <span className = "font-light">5d</span>
                    </div>
                    <div className = "flex flex-row items-center mt-2 ml-12">
                        <img src = "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" alt = "user-avatar" className = "h-4 w-4 rounded-full mr-4" />
                        <span className = "font-light text-sm">Filed the law suit!</span>
                    </div>
                </div>
                <hr />
                <div className = "flex flex-col p-4">
                    <div className = "flex flex-row items-center justify-between">
                        <div className = "flex flex-row items-center">
                            <img src = "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY" alt = "chat-avatar" className = "h-8 w-8 rounded-full mr-4" />
                            <span className = "font-light">Igor Quantilo</span>
                        </div>
                        <span className = "font-light">4d</span>
                    </div>
                    <div className = "flex flex-row items-center mt-2 ml-12">
                        <img src = "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" alt = "user-avatar" className = "h-4 w-4 rounded-full mr-4" />
                        <span className = "font-light text-sm">Dusted with packing the up the old factory?</span>
                    </div>
                </div>
                <hr />
                <div className = "flex flex-col p-4">
                    <div className = "flex flex-row items-center justify-between">
                        <div className = "flex flex-row items-center">
                            <img src = "https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g" alt = "chat-avatar" className = "h-8 w-8 rounded-full mr-4" />
                            <span className = "font-light">Vladimir Gustavo</span>
                        </div>
                        <span className = "font-light">4d</span>
                    </div>
                    <div className = "flex flex-row items-center mt-2 ml-12">
                        <img src = "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" alt = "user-avatar" className = "h-4 w-4 rounded-full mr-4" />
                        <span className = "font-light text-sm">Pay a visit to outhouse after lunch!</span>
                    </div>
                </div>
                <hr />
                <div className = "flex flex-col p-4">
                    <div className = "flex flex-row items-center justify-between">
                        <div className = "flex flex-row items-center">
                            <img src = "https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc" alt = "chat-avatar" className = "h-8 w-8 rounded-full mr-4" />
                            <span className = "font-light">Jessy Miles</span>
                        </div>
                        <span className = "font-light">2d</span>
                    </div>
                    <div className = "flex flex-row items-center mt-2 ml-12">
                        <img src = "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" alt = "user-avatar" className = "h-4 w-4 rounded-full mr-4" />
                        <span className = "font-light text-sm">Get done with the wireframes!</span>
                    </div>
                </div>
                <hr />
                <div className = "flex flex-col p-4">
                    <div className = "flex flex-row items-center justify-between">
                        <div className = "flex flex-row items-center">
                            <img src = "https://i.picsum.photos/id/1014/6016/4000.jpg?hmac=yMXsznFliL_Y2E2M-qZEsOZE1micNu8TwgNlHj7kzs8" alt = "chat-avatar" className = "h-8 w-8 rounded-full mr-4" />
                            <span className = "font-light">Ilkhai Garrotti</span>
                        </div>
                        <span className = "font-light">2d</span>
                    </div>
                    <div className = "flex flex-row items-center mt-2 ml-12">
                        <img src = "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" alt = "user-avatar" className = "h-4 w-4 rounded-full mr-4" />
                        <span className = "font-light text-sm">Failed to acquire the chemicals.</span>
                    </div>
                </div>
                <hr />
                <div className = "flex flex-col p-4">
                    <div className = "flex flex-row items-center justify-between">
                        <div className = "flex flex-row items-center">
                            <img src = "https://i.picsum.photos/id/1009/5000/7502.jpg?hmac=Uj6crVILzsKbyZreBjHuMiaq_-n30qoHjqP0i7r30r8" alt = "chat-avatar" className = "h-8 w-8 rounded-full mr-4" />
                            <span className = "font-light">John Meta</span>
                        </div>
                        <span className = "font-light">1d</span>
                    </div>
                    <div className = "flex flex-row items-center mt-2 ml-12">
                        <img src = "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" alt = "user-avatar" className = "h-4 w-4 rounded-full mr-4" />
                        <span className = "font-light text-sm">Paid the dues.</span>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}