import '@/styles/globals.scss'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return <>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js" strategy='beforeInteractive' />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js" strategy='beforeInteractive' />
    <Component {...pageProps} />
  </>
}
