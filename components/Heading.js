import Navbar from "./Navbar"
import { Josefin_Sans } from "next/font/google"

const josefinSans = Josefin_Sans({ weight: "300", subsets: ['latin'] })

export default function Heading() {
    return (
        <div className={josefinSans.className}>
            <div className="bg-cover bg-no-repeat bg-[url('/mobile/image-hero.jpg')] md:bg-[url('/desktop/image-hero.jpg')] lg:bg-[url('/desktop/image-hero.jpg')] xl:bg-[url('/desktop/image-hero.jpg')]">

                <Navbar />

                <header className="py-40 px-5 md:px-10 md:py-14 lg:px-20 lg:py-20 xl:px-32 xl:py-28">
                    <div className="border-2 border-white w-full p-5 tracking-widest md:w-6/12 lg:w-6/12 xl:w-7/12">
                        <h1 className="text-white text-4xl p-2.5 md:text-4xl lg:text-5xl xl:text-7xl xl:p-5">
                            IMMERSIVE EXPERIENCES THAT DELIVER
                        </h1>
                    </div>
                </header>

            </div>
        </div>
    )
}
