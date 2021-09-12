import Head from 'next/head'

import NavbarTop from '../components/navbarTop/index'
import NavbarBottom from '../components/navbarBottom/index'
import Footer from '../components/footer/index'
import BannerCarousel from '../components/carousel/index'
import Features from '../components/feature/index'
import Categories from '../components/categories/index'
import GotoTop from '../components/goTop/index'

import { Banner, CategoryWithProducts } from './api/index'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [banner, setBanner] = useState({ data: [], loading: true })
  const [category, setCategory] = useState({ data: [], loading: true })

  // Fetch banner
  const fetchBanner = useCallback(async () => {
    try {
      const response = await Banner()
      if (response.status === 200) {
        setBanner({ data: response.data.banners, loading: false })
      }
    } catch (error) {
      if (error) console.log(error)
    }
  }, [])

  // Fetch category with products
  const fetchCategory = useCallback(async () => {
    try {
      const response = await CategoryWithProducts(1)
      if (response.status === 200) {
        setCategory({ data: response.data.data, loading: false })
      }
    } catch (error) {
      if (error) console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchBanner()
  }, [fetchBanner])

  useEffect(() => {
    fetchCategory()
  }, [fetchCategory])

  return (
    <div>
      <Head>
        <title>Famefair || Biggest online market in Bangladesh.</title>
        <meta name="description" content="Famefair.com.bd biggest online market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarTop />
      <NavbarBottom />

      <main>
        <BannerCarousel
          loading={banner.loading}
          data={banner.data}
        />

        <Features />
        <Categories
          data={category.data}
          loading={category.loading}
        />

        <Footer />
        <GotoTop />
      </main>
    </div>
  )
}
