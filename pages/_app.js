import "../styles/globals.css";
import Head from "next/head";
import Nav from "../components/navbar/navbar";
import Foot from "../components/footer/footer";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

// own css files here
//import "../css/customcss.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Foot />
    </>
  );
}

export default MyApp;
