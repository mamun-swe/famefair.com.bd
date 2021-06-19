import Head from 'next/head'
import Link from 'next/link'
import { useWindowSize } from '../components/window/windowSize'

export default function Custom404() {
    const window = useWindowSize()

    return (
        <div className="container py-5">
            <Head>
                <title>404 || Page not found</title>
                <meta name="description" content="Famefair.com.bd biggest online market" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="row">
                <div className="col-12 col-lg-8 col-xl-6 m-auto text-center">
                    <div className="card rounded border-0 shadow-sm" style={{ overflow: 'hidden' }}>
                        <div className="card-body flex-center flex-column text-center py-5">
                            <img
                                className="img-fluid"
                                src="/assets/404.png"
                                style={{ height: window.width > 576 ? 300 : 220 }}
                            />
                            <p className="font-weight-bold text-muted my-4" style={{ fontSize: 14 }}>What are you looking for ? Page not found !!!</p>
                            <Link href="/">
                                <button type="button" className="btn shadow-none text-white" style={btn}>Back to Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const btn = {
    background: '#e84545',
    padding: '10px 25px',
    fontSize: 14,
    fontWeight: 600
}