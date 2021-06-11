import '../styles/app.scss'
import NextNprogress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NextNprogress
        color="#e84545"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
