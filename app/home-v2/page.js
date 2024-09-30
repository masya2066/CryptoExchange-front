'use client'
import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Banner2 from "@/components/sections/Banner2"
import Blog1 from "@/components/sections/Blog1"
import Coinlist2 from "@/components/sections/Coinlist2"
import Crypto2 from "@/components/sections/Crypto2"
import Services1 from "@/components/sections/Services1"
import Work2 from "@/components/sections/Work2"
import store from "@/store";
import {Provider} from "react-redux";
export default function Home2() {

    return (
        <>
            <Provider store={store}>
            <Layout headerStyle={1} footerStyle={2}>
                <Banner2 />
                <Crypto2 />
                <Services1 />
                <Coinlist2 />
                <About2 />
                <Work2 />
                <Blog1 />
            </Layout>
            </Provider>
        </>
    )
}