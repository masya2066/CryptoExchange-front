'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileMenu({ isMobileMenu }) {
    const [isActive, setIsActive] = useState(0)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")


    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-item" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""
    return (
        <>
            <nav id="main-nav-mobi" className="main-nav" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                <ul id="menu-primary-menu" className="menu">
                    <li className={`menu-item menu-item-has-children ${checkParentActive(["/home-v2", "/home-v3"])}`}>
                        <Link href="#">Home </Link>
                    </li>
                    <li className={`menu-item menu-item-has-children ${checkParentActive(["/buy-crypto-select",
                        "/buy-crypto-confirm",
                        "/buy-crypto-details",])}`}>
                        <Link href="#">Buy/Sell Crypto</Link>
                        <span className="arrow" onClick={() => handleClick(2)} />
                        <ul className="sub-menu" style={{ display: `${isActive == 2 ? "block" : "none"}` }}>
                            <li className={`menu-item ${checkCurrentMenuItem("/buy-crypto-select")}`}>
                                <Link href="/buy-crypto-select">Buy/Sell Crypto Select</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/buy-crypto-confirm")}`}>
                                <Link href="/buy-crypto-confirm">Buy/Sell Crypto Confirm</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/buy-crypto-details")}`}>
                                <Link href="/buy-crypto-details">Buy/Sell Crypto Details</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

        </>
    )
}
