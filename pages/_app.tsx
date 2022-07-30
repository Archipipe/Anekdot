import "../styles/global.css";
import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/icon.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
