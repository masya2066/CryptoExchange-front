import Link from "next/link"
import { Menu } from '@headlessui/react'

export default function Header2({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>

            <header id="header_main" className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__body d-flex justify-content-between">
                                <div className="header__left">
                                    <div className="logo">
                                        <Link className="light" href="/">
                                            <img id="site-logo" src="/assets/images/logo/logo.png" alt="" width={118} height={32} data-retina="assets/images/logo/logo@2x.png" data-width={118} data-height={32} />
                                        </Link>
                                        <Link className="dark" href="/">
                                            <img src="/assets/images/logo/logo-dark.png" alt="" width={118} height={32} data-retina="assets/images/logo/logo-dark@2x.png" data-width={118} data-height={32} />
                                        </Link>
                                    </div>
                                    <div className="left__main">
                                        <nav id="main-nav" className="main-nav">
                                            <ul id="menu-primary-menu" className="menu">
                                                <li className="menu-item-has-children">
                                                    <Link href="#">Homepage<svg width={8} height={6} viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.99998 5.27995C3.85661 5.27995 3.71325 5.2252 3.60394 5.11594L0.164113 1.67609C-0.0547044 1.45728 -0.0547044 1.1025 0.164113 0.883773C0.382842 0.665044 0.737547 0.665044 0.956382 0.883773L3.99998 3.92754L7.0436 0.883879C7.26242 0.665151 7.61709 0.665151 7.8358 0.883879C8.05472 1.10261 8.05472 1.45738 7.8358 1.6762L4.39603 5.11605C4.28666 5.22533 4.1433 5.27995 3.99998 5.27995Z" fill="white" />
                                                    </svg>
                                                    </Link>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item">
                                                            <Link href="/">Home 01</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/home-v2">Home 02</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/home-v3">Home 03</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item">
                                                    <Link href="/buy-crypto-select">Buy Crypto</Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link href="/markets">Markets </Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link href="/exchange">Exchange </Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link href="/spot">Spot </Link>
                                                </li>
                                                        <li className="menu-item">
                                                            <Link href="/wallet">BITUSDT
                                                                <svg className="s1" width={8} height={10} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M6.75979 3.20154C6.69318 3.13681 6.59973 3.10739 6.50828 3.12243C6.41666 3.13741 6.33754 3.19493 6.29504 3.27747C6.14887 3.56144 5.9632 3.82239 5.74477 4.05308C5.76654 3.88644 5.7775 3.7188 5.7775 3.55072C5.7775 3.2282 5.73428 2.8963 5.64898 2.56413C5.36855 1.4731 4.6332 0.550422 3.63154 0.0327073C3.54434 -0.0123512 3.44043 -0.0107692 3.35463 0.0369261C3.26883 0.0846409 3.21264 0.172121 3.20494 0.269973C3.12686 1.26146 2.61615 2.16349 1.80301 2.74536C1.79225 2.75312 1.78156 2.76097 1.77088 2.76878C1.74875 2.78497 1.72789 2.80029 1.7084 2.81314C1.70535 2.81517 1.70232 2.81724 1.69936 2.81937C1.18795 3.18552 0.765977 3.67361 0.479004 4.23101C0.187402 4.79798 0.0395508 5.4064 0.0395508 6.03931C0.0395508 6.36173 0.0827734 6.69362 0.168027 7.02585C0.61793 8.77697 2.19379 9.99997 4.00023 9.99997C6.18404 9.99997 7.96068 8.22322 7.96068 6.03931C7.96068 4.96236 7.5342 3.95454 6.75979 3.20154Z" fill="#3772FF" />
                                                                </svg>
                                                            </Link>
                                                        </li>
                                                <li className="menu-item-has-children">
                                                    <Link href="#">
                                                        Pages
                                                        <svg width={8} height={6} viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.99998 5.27995C3.85661 5.27995 3.71325 5.2252 3.60394 5.11594L0.164113 1.67609C-0.0547044 1.45728 -0.0547044 1.1025 0.164113 0.883773C0.382842 0.665044 0.737547 0.665044 0.956382 0.883773L3.99998 3.92754L7.0436 0.883879C7.26242 0.665151 7.61709 0.665151 7.8358 0.883879C8.05472 1.10261 8.05472 1.45738 7.8358 1.6762L4.39603 5.11605C4.28666 5.22533 4.1433 5.27995 3.99998 5.27995Z" fill="#23262F" />
                                                        </svg>
                                                    </Link>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item">
                                                            <Link href="/blog-default">Blog Default</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/blog-grid-v1">Blog Grid V1</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/blog-grid-v2">Blog Grid v2</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/blog-list">Blog List</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/blog-details">Blog Details</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/buy-crypto-select">Buy Crypto Select</Link>
                                                        </li>
                                                        <li className="menu-item current-item">
                                                            <Link href="/buy-crypto-confirm">Buy Crypto Confirm</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/buy-crypto-details">Buy Crypto Details</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/sell-crypto">Sell Crypto</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/sell-crypto-confirm">Sell Crypto Confirm</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/sell-crypto-amount">Sell Crypto Amount</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/sell-crypto-details">Sell Crypto Details</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/user-profile">User Profile</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/user-2fa">User 2FA</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/user-api">User API</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/user-change-password">User Change PassWord</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/user-history">User History</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/user-referrals">User Referrals</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/login">Login</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/login-phone">Login Phone</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/register">Register</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/register-phone">Register Phone</Link>
                                                        </li>
                                                        <li className="menu-item">
                                                            <Link href="/contact">Contact</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                        {/* #main-nav */}
                                    </div>
                                </div>
                                <div className="header__right">
                                    <Menu as="div" className="dropdown">
                                        <Menu.Button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Assets
                                        </Menu.Button>
                                        <Menu.Items as="div" className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                                            <Link className="dropdown-item" href="#">Binance Visa Card</Link>
                                            <Link className="dropdown-item" href="#">Crypto Loans</Link>
                                            <Link className="dropdown-item" href="#">Binance Pay</Link>
                                        </Menu.Items>
                                    </Menu>
                                    <Menu as="div" className="dropdown">
                                        <Menu.Button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Orders &amp; Trades
                                        </Menu.Button>
                                        <Menu.Items as="div" className="dropdown-menu show" aria-labelledby="dropdownMenuButton1">
                                            <Link className="dropdown-item" href="#">Binance Convert</Link>
                                            <Link className="dropdown-item" href="#">Spot</Link>
                                            <Link className="dropdown-item" href="#">Margin</Link>
                                            <Link className="dropdown-item" href="#">P2P</Link>
                                        </Menu.Items>
                                    </Menu>
                                    <Menu as="div" className="dropdown">
                                        <Menu.Button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            EN/USD
                                        </Menu.Button>
                                        <Menu.Items as="div" className="dropdown-menu show" aria-labelledby="dropdownMenuButton2">
                                            <Link href="#" className="dropdown-item notify-item language" data-lang="en">
                                                <img src="/assets/images/flags/us.jpg" alt="user-image" className="me-1" height={12} />
                                                <span className="align-middle">English</span>
                                            </Link>
                                            <Link href="#" className="dropdown-item notify-item language" data-lang="sp">
                                                <img src="/assets/images/flags/spain.jpg" alt="user-image" className="me-1" height={12} />
                                                <span className="align-middle">Spanish</span>
                                            </Link>
                                            <Link href="#" className="dropdown-item notify-item language" data-lang="gr">
                                                <img src="/assets/images/flags/germany.jpg" alt="user-image" className="me-1" height={12} />
                                                <span className="align-middle">German</span>
                                            </Link>
                                            <Link href="#" className="dropdown-item notify-item language" data-lang="it">
                                                <img src="/assets/images/flags/italy.jpg" alt="user-image" className="me-1" height={12} />
                                                <span className="align-middle">Italian</span>
                                            </Link>
                                            <Link href="#" className="dropdown-item notify-item language" data-lang="ru">
                                                <img src="/assets/images/flags/russia.jpg" alt="user-image" className="me-1" height={12} />
                                                <span className="align-middle">Russian</span>
                                            </Link>
                                        </Menu.Items>
                                    </Menu>
                                    <div className="mode-switcher">
                                        <Link className="sun" href="#" >
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99993 11.182C9.7572 11.182 11.1818 9.75745 11.1818 8.00018C11.1818 6.24291 9.7572 4.81836 7.99993 4.81836C6.24266 4.81836 4.81812 6.24291 4.81812 8.00018C4.81812 9.75745 6.24266 11.182 7.99993 11.182Z" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8 1V2.27273" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8 13.7271V14.9998" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3.04956 3.04932L3.9532 3.95295" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.0469 12.0469L12.9505 12.9505" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1 8H2.27273" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13.7273 8H15" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3.04956 12.9505L3.9532 12.0469" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.0469 3.95295L12.9505 3.04932" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                        <Link href="#" className="moon" >
                                            <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.0089 8.97241C12.7855 9.64616 12.4491 10.2807 12.0107 10.8477C11.277 11.7966 10.2883 12.5169 9.1602 12.9244C8.03209 13.3319 6.81126 13.4097 5.64056 13.1486C4.46987 12.8876 3.39772 12.2986 2.54959 11.4504C1.70145 10.6023 1.1124 9.53013 0.851363 8.35944C0.590325 7.18874 0.668097 5.96791 1.07558 4.8398C1.48306 3.71169 2.2034 2.72296 3.1523 1.9893C3.71928 1.55094 4.35384 1.21447 5.02759 0.991088C4.69163 1.84583 4.54862 2.77147 4.61793 3.7009C4.72758 5.17128 5.36134 6.55346 6.40394 7.59606C7.44654 8.63866 8.82873 9.27242 10.2991 9.38207C11.2285 9.45138 12.1542 9.30837 13.0089 8.97241Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <Menu as="div" className="dropdown notification">
                                        <Menu.Button className="btn dropdown-toggle" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="icon-notification" />
                                        </Menu.Button>
                                        <Menu.Items as="div" className="dropdown-menu show" aria-labelledby="dropdownMenuButton3">
                                            <div className="dropdown-item">
                                                <div className="media server-log">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-server">
                                                        <rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
                                                        <rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
                                                        <line x1={6} y1={6} x2={6} y2={6} />
                                                        <line x1={6} y1={18} x2={6} y2={18} />
                                                    </svg>
                                                    <div className="media-body">
                                                        <div className="data-info">
                                                            <h6 >Server Rebooted</h6>
                                                            <p >45 min ago</p>
                                                        </div>
                                                        <div className="icon-status">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                                <line x1={6} y1={6} x2={18} y2={18} />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <div className="media">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
                                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                                                        </path>
                                                    </svg>
                                                    <div className="media-body">
                                                        <div className="data-info">
                                                            <h6 >Licence Expiring Soon</h6>
                                                            <p >8 hrs ago</p>
                                                        </div>
                                                        <div className="icon-status">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                                <line x1={6} y1={6} x2={18} y2={18} />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <div className="media file-upload">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text">
                                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z">
                                                        </path>
                                                        <polyline points="14 2 14 8 20 8" />
                                                        <line x1={16} y1={13} x2={8} y2={13} />
                                                        <line x1={16} y1={17} x2={8} y2={17} />
                                                        <polyline points="10 9 9 9 8 9" />
                                                    </svg>
                                                    <div className="media-body">
                                                        <div className="data-info">
                                                            <h6 >Kelly Portfolio.pdf</h6>
                                                            <p >670 kb</p>
                                                        </div>
                                                        <div className="icon-status">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                                <polyline points="20 6 9 17 4 12" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                    <div className="mobile-button"><span /></div>
                                    <div className="wallet">
                                        <Link href="/wallet"> Wallet </Link>
                                    </div>
                                    <Menu as="div" className="dropdown user">
                                        <Menu.Button className="btn dropdown-toggle" type="button" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src="/assets/images/avt/avt-01.jpg" alt="" />
                                        </Menu.Button>
                                        <Menu.Items as="div" className="dropdown-menu show" aria-labelledby="dropdownMenuButton4">
                                            <Link className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle me-1" />
                                                <span>Profile</span></Link>
                                            <Link className="dropdown-item" href="#"><i className="bx bx-wallet font-size-16 align-middle me-1" />
                                                <span>My Wallet</span></Link>
                                            <Link className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1" />
                                                <span>Settings</span></Link>
                                            <Link className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle me-1" />
                                                <span>Lock screen</span></Link>
                                            <div className="dropdown-divider" />
                                            <Link className="dropdown-item text-danger" href="/user-login"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
                                                <span>Logout</span></Link>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
