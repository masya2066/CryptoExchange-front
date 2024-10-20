
import { DM_Sans, Poppins } from 'next/font/google'
import "/public/app/dist/app.css"
import "/public/app/dist/swiper-bundle.min.css"
import Head from "next/head";

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--poppins",
    display: 'swap',
})
const dm = DM_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--dm",
    display: 'swap',
})

export const metadata = {
    title: 'Finchain | INDEX',
    description: '',
}

export default function RootLayout({ children }) {


    return (
        <html lang="en">
        <Head>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="apple-touch-icon" sizes="192x192" href="assets/images/logo/favicon.png"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body className={`${poppins.variable} ${dm.variable} body header-fixed`}>{children}</body>
        </html>
    )
}
