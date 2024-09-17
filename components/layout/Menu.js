'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MainMenu() {
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    console.log("Component Menu")

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-item" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

    return (
        <>
            <ul id="menu-primary-menu" className="menu">
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/home-v2", "/home-v3"])}`}>
                    <Link href="#">Homepage </Link>
                    <ul className="sub-menu">
                        <li className={`menu-item ${checkCurrentMenuItem("/")}`}>
                            <Link href="/">Home 01</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/home-v2")}`}>
                            <Link href="/home-v2">Home 02</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/home-v3")}`}>
                            <Link href="/home-v3">Home 03</Link>
                        </li>
                    </ul>
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/buy-crypto-select",
                    "/buy-crypto-confirm",
                    "/buy-crypto-details",])}`}>
                    <Link href="#">Buy Crypto</Link>
                    <ul className="sub-menu">
                        <li className={`menu-item ${checkCurrentMenuItem("/buy-crypto-select")}`}>
                            <Link href="/buy-crypto-select">Buy Crypto Select</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/buy-crypto-confirm")}`}>
                            <Link href="/buy-crypto-confirm">Buy Crypto Confirm</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/buy-crypto-details")}`}>
                            <Link href="/buy-crypto-details">Buy Crypto Details</Link>
                        </li>
                    </ul>
                </li>
                <li className={`menu-item ${pathname === "/markets" ? "current-menu-item" : ""}`}>
                    <Link href="/markets">Markets </Link>
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/sell-crypto",
                    "/sell-crypto-amount",
                    "/sell-crypto-confirm",
                    "/sell-crypto-details",])}`}>
                    <Link href="#">Sell Crypto</Link>
                    <ul className="sub-menu">
                        <li className={`menu-item ${checkCurrentMenuItem("/sell-crypto")}`}>
                            <Link href="/sell-crypto">Sell Select</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/sell-crypto-amount")}`}>
                            <Link href="/sell-crypto-amount">Sell Crypto Amount</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/sell-crypto-confirm")}`}>
                            <Link href="/sell-crypto-confirm">Sell Crypto Confirm</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/sell-crypto-details")}`}>
                            <Link href="/sell-crypto-details">Sell Crypto Details</Link>
                        </li>
                    </ul>
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/blog-default",
                    "/blog-grid-v1",
                    "/blog-grid-v2",
                    "/blog-list",
                    "/blog-details"])}`}>
                    <Link href="#">Blog</Link>
                    <ul className="sub-menu">
                        <li className={`menu-item ${checkCurrentMenuItem("/blog-default")}`}>
                            <Link href="/blog-default">Blog Default</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/blog-grid-v1")}`}>
                            <Link href="/blog-grid-v1">Blog Grid v1</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/blog-grid-v2")}`}>
                            <Link href="/blog-grid-v2">Blog Grid v2</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/blog-list")}`}>
                            <Link href="/blog-list">Blog List</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/blog-details")}`}>
                            <Link href="/blog-details">Blog Details</Link>
                        </li>
                    </ul>
                </li>
                <li className={`menu-item ${pathname === "/wallet" ? "current-menu-item" : ""}`}>
                    <Link href="/wallet">BITUSDT
                        <svg className="s1" width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.75979 3.20154C6.69318 3.13681 6.59973 3.10739 6.50828 3.12243C6.41666 3.13741 6.33754 3.19493 6.29504 3.27747C6.14887 3.56144 5.9632 3.82239 5.74477 4.05308C5.76654 3.88644 5.7775 3.7188 5.7775 3.55072C5.7775 3.2282 5.73428 2.8963 5.64898 2.56413C5.36855 1.4731 4.6332 0.550422 3.63154 0.0327073C3.54434 -0.0123512 3.44043 -0.0107692 3.35463 0.0369261C3.26883 0.0846409 3.21264 0.172121 3.20494 0.269973C3.12686 1.26146 2.61615 2.16349 1.80301 2.74536C1.79225 2.75312 1.78156 2.76097 1.77088 2.76878C1.74875 2.78497 1.72789 2.80029 1.7084 2.81314C1.70535 2.81517 1.70232 2.81724 1.69936 2.81937C1.18795 3.18552 0.765977 3.67361 0.479004 4.23101C0.187402 4.79798 0.0395508 5.4064 0.0395508 6.03931C0.0395508 6.36173 0.0827734 6.69362 0.168027 7.02585C0.61793 8.77697 2.19379 9.99997 4.00023 9.99997C6.18404 9.99997 7.96068 8.22322 7.96068 6.03931C7.96068 4.96236 7.5342 3.95454 6.75979 3.20154Z" fill="#3772FF" />
                        </svg>
                    </Link>
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/user-profile",
                    "/login",
                    "/register",
                    "/contact",
                    "/faq"
                ])}`}>
                    <Link href="#"> Pages </Link>
                    <ul className="sub-menu">
                        <li className={`menu-item ${checkCurrentMenuItem("/user-profile")}`}>
                            <Link href="/user-profile">User Profile</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/login")}`}>
                            <Link href="/login">Login</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/register")}`}>
                            <Link href="/register">Register</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/contact")}`}>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/faq")}`}>
                            <Link href="/faq">FAQ</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

