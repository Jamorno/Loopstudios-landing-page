import Image from "next/image"
import {
    AiFillFacebook,
    AiOutlineTwitter,
    AiOutlineInstagram
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { Alata } from 'next/font/google'

const alata = Alata({ weight: "400", subsets: ["latin"] })

export default function Footer() {
    return (
        <footer className={alata.className}>
            <div className="pt-20 xl:pt-40">
                <div className="bg-black text-white text-center pt-10 xl:hidden lg:hidden">
                    <Image className="mx-auto" src="/logo.svg" width="120" height="60" alt="logo-image" />

                    <div className="text-sm pt-8 space-y-5">
                        <p className="cursor-pointer hover:text-gray-500">About</p>
                        <p className="cursor-pointer hover:text-gray-500">Careers</p>
                        <p className="cursor-pointer hover:text-gray-500">Events</p>
                        <p className="cursor-pointer hover:text-gray-500">Products</p>
                        <p className="cursor-pointer hover:text-gray-500">Support</p>
                    </div>

                    <div className="flex items-center justify-center space-x-3 pt-10">
                        <AiFillFacebook className="cursor-pointer" size={"25"} />
                        <AiOutlineTwitter className="cursor-pointer" size={"25"} />
                        <BsPinterest className="cursor-pointer" size={"20"} />
                        <AiOutlineInstagram className="cursor-pointer" size={"25"} />
                    </div>

                    <div className="pt-3 pb-10">
                        <p className="text-gray-500 text-sm">© 2021 Loopstudios. All rights reserved.</p>
                    </div>
                </div>

                <div>
                    <div className="bg-black text-white text-start w-full xl:px-32 hidden xl:inline-block lg:inline-block lg:px-20">
                        <div className="flex items-center justify-between pt-14">
                            <Image className="" src="/logo.svg" width="180" height="60" alt="logo-image" />

                            <div className="flex items-center justify-center space-x-3">
                                <AiFillFacebook className="cursor-pointer" size={"35"} />
                                <AiOutlineTwitter className="cursor-pointer" size={"35"} />
                                <BsPinterest className="cursor-pointer" size={"30"} />
                                <AiOutlineInstagram className="cursor-pointer" size={"35"} />
                            </div>
                        </div>

                        <div className="flex items-center justify-between xl:text-md pt-5 pb-14 lg:text-sm">
                            <div className="flex xl:space-x-10 text-gray-300 lg:space-x-5">
                                <p className="cursor-pointer hover:text-gray-500">About</p>
                                <p className="cursor-pointer hover:text-gray-500">Careers</p>
                                <p className="cursor-pointer hover:text-gray-500">Events</p>
                                <p className="cursor-pointer hover:text-gray-500">Products</p>
                                <p className="cursor-pointer hover:text-gray-500">Support</p>
                            </div>

                            <div className="">
                                <p className="text-gray-500 text-md">© 2021 Loopstudios. All rights reserved.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    )
}
