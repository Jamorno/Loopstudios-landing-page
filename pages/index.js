import Head from 'next/head'
import Heading from '@/components/Heading'
import Content from '@/components/Content'
import CreationsContent from '@/components/CreationsContent'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Loopstudios landing page</title>
      </Head>

      <div>
        {/* Heading */}
        <Heading />

        {/* Content */}
        <Content />

        {/* Creations Content */}
        <CreationsContent />

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
