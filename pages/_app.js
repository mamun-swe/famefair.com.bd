import '../styles/app.scss'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import NextNprogress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <NextNprogress
        color="#e84545"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
