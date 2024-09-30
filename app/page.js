'use client'
import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Banner1 from "@/components/sections/Banner1"
import Coinlist1 from "@/components/sections/Coinlist1"
import Crypto1 from "@/components/sections/Crypto1"
import Download from "@/components/sections/Download"
import Sale from "@/components/sections/Sale"
import Testimonials1 from "@/components/sections/Testimonials1"
import Work1 from "@/components/sections/Work1"
import {Provider} from "react-redux";
import store from "@/store";
import Providers from "@/components/layout/Providers";
export default function Home() {



    return (
        <>
        <Providers>
            <Provider store={store}>
                <Layout headerStyle={1} footerStyle={2}>

                    <Banner1 />
                    <Crypto1 />
                    <Coinlist1 />
                    <Work1 />
                    <About1 />
                    <Download />
                    <Testimonials1 />
                    <Sale />
                </Layout>
            </Provider>
        </Providers>
        </>
    )
}