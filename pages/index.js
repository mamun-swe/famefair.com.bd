import Head from 'next/head'

import NavbarTop from '../components/navbarTop/index'
import NavbarBottom from '../components/navbarBottom/index'
import Footer from '../components/footer/index'
import BannerCarousel from '../components/carousel/index'
import Features from '../components/feature/index'
import Categories from '../components/categories/index'
import GotoTop from '../components/goTop/index'

import { Products } from './api/index'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState([])
  const [bannerLoading, setBannerLoading] = useState(true)
  const [loading, setLoading] = useState(true)

  // Fetch data
  const fetchData = useCallback(async () => {
    try {
      const response = await Products(0)
      if (response.status === 200) {
        setTimeout(() => {
          setData(response.data)
        }, 500)
      }
      setBannerLoading(false)
      setLoading(false)
    } catch (error) {
      if (error) {
        console.log(error)
      }
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

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
        <BannerCarousel loading={bannerLoading} />
        <Features />
        <Categories data={data} loading={loading} />
        <Footer />
        <GotoTop />
      </main>
    </div>
  )
}
