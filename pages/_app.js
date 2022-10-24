import Head from "next/head";
import Script from "next/script";

import "../globals.css";
import '../components/Content/Content.scss'
import '../components/Header/Header.scss'
import '../components/Footer/Footer.scss'
import '../components/Waves/Waves.scss'
import '../components/GradientBorder/GradientBorder.scss'
import '../components/Buttons/Buttons.scss'
import '../components/Animations/Animations.scss'
import '../components/Menu/Menu.scss'
import '../components/Card/Card.scss'
import '../components/Blobs/Blobs.scss'


function MyNomo({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href={"./favicon.ico"} />
                <Script
                    src={"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"}
                />
                <title>Nomo</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyNomo;
