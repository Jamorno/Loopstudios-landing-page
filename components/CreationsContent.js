import Image from 'next/image'
import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({ weight: "300", subsets: ['latin'] })

export default function CreationsContent() {
    return (
        <main className={josefinSans.className}>

            {/* Mobile */}
            <div className="xl:hidden lg:hidden md:hidden">
                <div className="pt-20">
                    <h1 className="text-3xl text-center">OUR CREATIONS</h1>
                </div>

                <div className="px-6">
                    <div className="pt-10 relative cursor-pointer">
                        <div className="bg-gradient-to-r from-slate-700">
                            <Image className="mix-blend-overlay xl:hidden" src="/mobile/image-deep-earth.jpg" width="400" height="200" alt="image-deep-earth" />
                        </div>
                        <div>
                            <p className="absolute bottom-5 left-5 text-2xl text-gray-300 leading-6 w-5">DEEP EARTH</p>
                        </div>
                    </div>

                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-r from-slate-700">
                            <Image className="mix-blend-overlay" src="/mobile/image-night-arcade.jpg" width="400" height="200" alt="image-night-arcade" />
                        </div>
                        <div>
                            <p className="absolute bottom-5 left-5 text-2xl text-gray-300 leading-6 w-5">NIGHT ARCADE</p>
                        </div>
                    </div>

                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-r from-slate-700">
                            <Image className="mix-blend-overlay" src="/mobile/image-soccer-team.jpg" width="400" height="200" alt="image-soccer-team" />
                        </div>
                        <div>
                            <p className="absolute bottom-5 left-5 text-2xl text-gray-300 leading-6 w-28">SOCCER TERM VR</p>
                        </div>
                    </div>

                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-r from-slate-700"></div>
                        <Image className="mix-blend-overlay" src="/mobile/image-grid.jpg" width="400" height="200" alt="image-grid" />
                        <div>
                            <p className="absolute bottom-5 left-5 text-2xl text-gray-300 leading-6 w-5">THE GRID</p>
                        </div>
                    </div>

                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-r from-slate-700">
                            <Image className="mix-blend-overlay" src="/mobile/image-from-above.jpg" width="400" height="200" alt="image-from-above" />
                        </div>
                        <div>
                            <p className="absolute bottom-5 left-5 text-2xl text-gray-300 leading-6 w-32">FROM UP ABOVE VR</p>
                        </div>
                    </div>

                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-r from-slate-700">
                            <Image className="mix-blend-overlay" src="/mobile/image-pocket-borealis.jpg" width="400" height="200" alt="image-pocket-borealis" />
                        </div>
                        <div>
                            <p className="absolute bottom-5 left-5 text-2xl text-gray-300 leading-6 w-5">POCKET BOREALIS</p>
                        </div>
                    </div>

                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-r from-slate-700">
                            <Image className="mix-blend-overlay" src="/mobile/image-curiosity.jpg" width="400" height="200" alt="image-curiosity" />
                        </div>
                        <div>
                            <p className="absolute bottom-5 left-5 text-2xl text-gray-300 leading-6 w-5">THE CURIOSITY</p>
                        </div>
                    </div>

                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-r from-slate-700">
                            <Image className="mix-blend-overlay" src="/mobile/image-fisheye.jpg" width="400" height="200" alt="image-fisheye" />
                        </div>
                        <div>
                            <p className="absolute bottom-5 left-5 text-2xl text-gray-300 leading-6 w-28">MAKE IT FISHEYE</p>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8 cursor-pointer">
                    <button className="text-sm font-bold border border-black px-10 py-1.5 tracking-wider hover:bg-slate-300">SEE ALL</button>
                </div>
            </div>

            {/* desktop */}
            <div className="hidden md:inline-block md:px-10 lg:inline-block lg:px-20 xl:inline-block xl:px-32">

                <div className="flex justify-between items-center pt-20 xl:pb-20 lg:pb-10">
                    <h1 className="xl:text-5xl text-center md:text-3xl">OUR CREATIONS</h1>
                    <button className="text-sm font-bold border border-black px-8 py-1.5 tracking-wider cursor-pointer hover:bg-slate-300">SEE ALL</button>
                </div>

                <div className="flex space-x-5">
                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-t from-slate-700">
                            <Image className="mix-blend-overlay" src="/desktop/image-deep-earth.jpg" width="280" height="550" alt="image-deep-earth" />
                        </div>
                        <div>
                            <p className="absolute xl:bottom-7 xl:left-7 xl:text-4xl text-gray-300 leading-1 w-5 lg:text-3xl lg:bottom-6 lg:left-6 md:text-xl md:bottom-5 md:left-5">DEEP EARTH</p>
                        </div>
                    </div>

                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-t from-slate-700">
                            <Image className="mix-blend-overlay" src="/desktop/image-night-arcade.jpg" width="280" height="550" alt="image-night-arcade" />
                        </div>
                        <div>
                            <p className="absolute xl:bottom-7 xl:left-7 xl:text-4xl text-gray-300 leading-1 w-5 lg:text-3xl lg:bottom-6 lg:left-6 md:text-xl md:bottom-5 md:left-5">NIGHT ARCADE</p>
                        </div>
                    </div>

                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-t from-slate-700">
                            <Image className="mix-blend-overlay" src="/desktop/image-soccer-team.jpg" width="280" height="550" alt="image-soccer-team" />
                        </div>
                        <div>
                            <p className="absolute xl:bottom-7 xl:left-7 xl:text-4xl text-gray-300 leading-1 w-50 lg:text-3xl lg:bottom-6 lg:left-6 md:text-xl md:bottom-5 md:left-5">SOCCER TERM VR</p>
                        </div>
                    </div>

                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-t from-slate-700"></div>
                        <Image className="mix-blend-overlay" src="/desktop/image-grid.jpg" width="280" height="550" alt="image-grid" />
                        <div>
                            <p className="absolute xl:bottom-7 xl:left-7 xl:text-4xl text-gray-300 leading-1 w-5 lg:text-3xl lg:bottom-6 lg:left-6 md:text-xl md:bottom-5 md:left-5">THE GRID</p>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-5">
                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-t from-slate-700">
                            <Image className="mix-blend-overlay" src="/desktop/image-from-above.jpg" width="280" height="550" alt="image-from-above" />
                        </div>
                        <div>
                            <p className="absolute xl:bottom-7 xl:left-7 xl:text-4xl text-gray-300 leading-1 w-50 lg:text-3xl lg:bottom-6 lg:left-6 md:text-xl md:bottom-5 md:left-5">FROM UP ABOVE VR</p>
                        </div>
                    </div>

                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-t from-slate-700">
                            <Image className="mix-blend-overlay" src="/desktop/image-pocket-borealis.jpg" width="280" height="550" alt="image-pocket-borealis" />
                        </div>
                        <div>
                            <p className="absolute xl:bottom-7 xl:left-7 xl:text-4xl text-gray-300 leading-1 w-5 lg:text-3xl lg:bottom-6 lg:left-6 md:text-xl md:bottom-5 md:left-5">POCKET BOREALIS</p>
                        </div>
                    </div>

                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-t from-slate-700">
                            <Image className="mix-blend-overlay" src="/desktop/image-curiosity.jpg" width="280" height="550" alt="image-curiosity" />
                        </div>
                        <div>
                            <p className="absolute xl:bottom-7 xl:left-7 xl:text-4xl text-gray-300 leading-1 w-5 lg:text-3xl lg:bottom-6 lg:left-6 md:text-xl md:bottom-5 md:left-5">THE CURIOSITY</p>
                        </div>
                    </div>

                    <div className="pt-6 relative cursor-pointer">
                        <div className="bg-gradient-to-t from-slate-700">
                            <Image className="mix-blend-overlay" src="/desktop/image-fisheye.jpg" width="280" height="550" alt="image-fisheye" />
                        </div>
                        <div>
                            <p className="absolute xl:bottom-7 xl:left-7 xl:text-4xl text-gray-300 leading-1 w-50 lg:text-3xl lg:bottom-6 lg:left-6 md:text-xl md:bottom-5 md:left-5">MAKE IT FISHEYE</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}
