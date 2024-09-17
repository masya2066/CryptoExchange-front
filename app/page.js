import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Banner1 from "@/components/sections/Banner1"
import Coinlist1 from "@/components/sections/Coinlist1"
import Crypto1 from "@/components/sections/Crypto1"
import Download from "@/components/sections/Download"
import Sale from "@/components/sections/Sale"
import Testimonials1 from "@/components/sections/Testimonials1"
import Work1 from "@/components/sections/Work1"
export default function Home() {
    console.log("Layout")
    return (
        <>

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
        </>
    )
}