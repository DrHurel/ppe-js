import '@/styles/globals.scss'
import Script from 'next/script'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + "px");
  }, [])



  return <>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js" strategy='beforeInteractive' />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js" strategy='beforeInteractive' />
    <Component {...pageProps} />
    <footer className='flex a-center column'>
      <p>© 2023 - Made with ❤️ by <a href="https://github.com/DrHurel" target="_blank">Jérémy Hurel</a> & Timotté Bonetti</p>
      <p>
        le projet est disponible sur <a href="https://github.com/DrHurel/ppe-js" target="_blank">Github</a>
      </p>
    </footer>
  </>
}
