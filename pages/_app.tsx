import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
     <div data-Theme="night" className="site min-h-screen font-mono w-screen overflow-x-hidden">
       <Component {...pageProps} />
     </div>
  )
}

export default MyApp
