import Image from "next/image"
import {
    Alata,
    Josefin_Sans
} from 'next/font/google'

const alata = Alata({ weight: "400", subsets: ["latin"] })
const josefinSans = Josefin_Sans({ weight: "300", subsets: ['latin'] })

export default function Content() {
    return (

            <main className="px-6 pt-24 lg:relative lg:grid lg:pt-28 lg:px-20 xl:pt-36 xl:px-32 xl:relative xl:pb-28 xl:grid grid-cols-3">
                <Image className="md:mx-auto lg:hidden xl:hidden" src="/mobile/image-interactive.jpg" width="400" height="100" alt="interactive-mobile-image" />
                <Image className="hidden xl:hidden lg:inline-block lg:col-span-2" src="/desktop/image-interactive.jpg" width="500" height="400" alt="interactive-desktop-image" />
                <Image className="hidden xl:inline-block xl:col-span-2" src="/desktop/image-interactive.jpg" width="800" height="400" alt="interactive-desktop-image" />

                <div className="xl:bg-white xl:absolute xl:w-6/12 xl:py-16 xl:left-[45rem] xl:top-[22rem] lg:bg-white lg:absolute lg:w-6/12 lg:left-[30rem] lg:top-[14rem]">
                    <div className={josefinSans.className}>
                        <h2 className="text-3xl text-center pt-8 lg:text-4xl lg:text-start lg:px-20 xl:text-5xl xl:text-start xl:tracking-wider xl:px-24">THE LEADER IN INTERACTIVE VR</h2>
                    </div>

                    <div className={alata.className}>
                        <p className="text-gray-400 text-sm text-center pt-3 px-6 leading-relaxed md:px-20 lg:text-md lg:text-start lg:font-bold lg:px-20 lg:pt-5 xl:text-lg xl:text-start xl:font-semibold xl:px-24 xl:pt-8">
                            Founded in 2011, Loopstudios has been producing world-class virtual reality
                            projects for some of the best companies around the globe. Our award-winning
                            creations have transformed businesses through digital experiences that bind
                            to their brand.
                        </p>
                    </div>
                </div>
            </main>

    )
}
