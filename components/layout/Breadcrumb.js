import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    console.log("Component Breadcrumb")
    return (
        <>

            <section className="page-title">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="heading">{breadcrumbTitle}</h3>
                        </div>
                        <div className="col-md-6">
                            <ul className="breadcrumb">
                                <li><Link href="/">Home</Link></li>
                                <li><p className="fs-18">/</p></li>
                                <li><p className="fs-18">{breadcrumbTitle}</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
