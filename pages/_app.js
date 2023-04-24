import '@/styles/globals.css'
import {
  Alata,
  Josefin_Sans
} from 'next/font/google'

const alata = Alata({ weight: "400", subsets: ["latin"] })
const josefinSans = Josefin_Sans({ weight: "300", subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
