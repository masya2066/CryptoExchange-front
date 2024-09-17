
import Layout from "@/components/layout/Layout"
import Banner3 from "@/components/sections/Banner3"
import Blog2 from "@/components/sections/Blog2"
import Counter from "@/components/sections/Counter"
import Join from "@/components/sections/Join"
import Services2 from "@/components/sections/Services2"
import Testimonials2 from "@/components/sections/Testimonials2"
import Trading from "@/components/sections/Trading"
export default function Home3() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2}>
                <Banner3 />
                <Services2 />
                <Trading />
                <Counter />
                <Testimonials2 />
                <Join />
                <Blog2 />
            </Layout>
        </>
    )
}