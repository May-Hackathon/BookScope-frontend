import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useRouter} from "next/router";
import HomeHeader from "@/components/header/homeheader";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname === "/" || !!router.pathname.match(/^\/(login|signup)$/)){
    return <Component {...pageProps} />
  }
  return <>
    <HomeHeader/>
    <div style={{maxWidth: "1200px",margin:"0 auto"}}>
      <Component {...pageProps} />
    </div>
  </>
}
