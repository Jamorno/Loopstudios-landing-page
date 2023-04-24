import Image from "next/image"
import { useState } from "react";
import { Josefin_Sans } from "next/font/google"

const josefinSans = Josefin_Sans({ weight: "300", subsets: ['latin'] })

export default function Navbar() {

    const [navbar, setNavbar] = useState(false);

    return (
        <div className={josefinSans.className}>
            <nav>
                <div className={`flex items-center justify-between pt-10 px-6 md:hidden lg:hidden xl:hidden ${navbar ? "hidden" : "block"} xl:px-40`}>
                    <Image src="/logo.svg" width="150" height="60" alt="logo-image" />
                    <Image onClick={() => setNavbar(!navbar)} className="cursor-pointer xl:hidden" src="/icon-hamburger.svg" width="25" height="25" alt="hamburger-menu" />
                </div>

                <div className={`bg-black px-6 pt-10 pb-40 ${navbar ? "block" : "hidden"}`}>
                    <div className="flex justify-between">
                        <Image className="" src="/logo.svg" width="150" height="60" alt="logo-image" />
                        <Image onClick={() => setNavbar(!navbar)} className="cursor-pointer" src="/icon-close.svg" width="25" height="25" alt="close-menu" />
                    </div>

                    <div className="text-gray-400 text-2xl space-y-6 mt-44">
                        <p className="cursor-pointer hover:text-white">ABOUT</p>
                        <p className="cursor-pointer hover:text-white">CAREERS</p>
                        <p className="cursor-pointer hover:text-white">EVENTS</p>
                        <p className="cursor-pointer hover:text-white">PRODUCTS</p>
                        <p className="cursor-pointer hover:text-white">SUPPORT</p>
                    </div>
                </div>

                {/* desktop */}
                <div className="hidden xl:inline md:inline lg:inline">
                    <div className="flex justify-between items-center xl:pt-20 xl:px-32 md:px-10 md:pt-10 lg:px-20 lg:pt-14">

                        <Image src="/logo.svg" width="200" height="60" alt="logo-image" />

                        <div className="text-white xl:text-lg font-bold flex xl:space-x-8 md:space-x-5 md:text-md">
                            <p className="cursor-pointer hover:text-gray-300">About</p>
                            <p className="cursor-pointer hover:text-gray-300">Careers</p>
                            <p className="cursor-pointer hover:text-gray-300">Events</p>
                            <p className="cursor-pointer hover:text-gray-300">Products</p>
                            <p className="cursor-pointer hover:text-gray-300">Suport</p>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}
