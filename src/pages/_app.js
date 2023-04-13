import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import LocalFont from 'next/font/local';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

const myFont = LocalFont({
  src:"../../public/Montserrat-VariableFont_wght.ttf",
  subsets: ["latin"],
  variable: "--font-mont",
})

export default function App({ Component, pageProps }) {
  const router =useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${myFont.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <Navbar />
        <AnimatePresence mode="wait" initial={false} >
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
