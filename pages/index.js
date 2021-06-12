import Head from 'next/head'

import NavbarTop from '../components/navbarTop/index'
import NavbarBottom from '../components/navbarBottom/index'
import Footer from '../components/footer/index'
import BannerCarousel from '../components/carousel/index'
import Features from '../components/feature/index'
import Categories from '../components/categories/index'
import GotoTop from '../components/goTop/index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Famefair</title>
        <meta name="description" content="Famefair.com.bd biggest online market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarTop />
      <NavbarBottom />

      <main>
        <BannerCarousel />
        <Features />
        <Categories />
        <Footer />
        <GotoTop />
      </main>
    </div>
  )
}
