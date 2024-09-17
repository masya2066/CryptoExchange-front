
import ChatList from "@/components/chart/ChatList"
import Link from "next/link"

export default function Services2() {
    return (
        <>

            <section className="services-2 bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="services__content" data-aos="fade-up" data-aos-duration={1000}>
                                <h3 className="heading">Why choose Rockie</h3>
                                <p className="fs-20 desc">
                                    Rockie has a variety of features that make it the best place to
                                    start trading
                                </p>
                                <ul className="list">
                                    <li className="active">
                                        <div className="icon">
                                            <svg width={37} height={38} viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M35.9606 13.88C34.7889 6.66876 28.6638 1.30399 21.361 1.0928C21.0138 1.07919 20.6754 1.2042 20.4205 1.44029C20.1655 1.67637 20.0149 2.00415 20.0018 2.35138V2.35138V2.46885L20.824 14.7694C20.878 15.5974 21.5898 16.2269 22.4182 16.179L34.7523 15.3567C35.0999 15.331 35.4228 15.1678 35.6496 14.9032C35.8764 14.6386 35.9883 14.2945 35.9606 13.9471V13.88Z" stroke="#D33535" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.8195 8.40957C13.6041 8.22809 14.407 8.62953 14.7325 9.36609C14.8178 9.53933 14.8691 9.72732 14.8835 9.91987C15.0514 12.3028 15.4038 17.5217 15.6051 20.3409C15.6395 20.8488 15.8749 21.322 16.2591 21.6558C16.6433 21.9896 17.1448 22.1566 17.6524 22.1197V22.1197L28.0064 21.482C28.4686 21.4542 28.9218 21.6187 29.2586 21.9365C29.5954 22.2542 29.786 22.6971 29.7851 23.1601V23.1601C29.3656 29.4125 24.8735 34.6394 18.7553 35.9942C12.6371 37.3491 6.3582 34.5074 3.33816 29.0167C2.43662 27.4365 1.86569 25.6894 1.66005 23.8817C1.57214 23.3269 1.53842 22.7649 1.55937 22.2036C1.57718 15.5266 6.26646 9.7735 12.8027 8.40957" stroke="#D33535" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Manage your portfolio</h6>
                                            <p>
                                                Buy and sell popular digital currencies, keep track of
                                                them in the one place.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon green">
                                            <svg width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.6667 3.66699V9.16699" stroke="#58BD7D" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M29.3333 3.66699V9.16699" stroke="#58BD7D" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6.41675 16.665H37.5834" stroke="#58BD7D" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M40.3334 34.8333C40.3334 36.2083 39.9484 37.51 39.2701 38.61C38.0051 40.7367 35.6768 42.1667 33.0001 42.1667C31.1484 42.1667 29.4618 41.4883 28.1784 40.3333C27.6101 39.8567 27.1151 39.27 26.7301 38.61C26.0518 37.51 25.6667 36.2083 25.6667 34.8333C25.6667 30.7817 28.9484 27.5 33.0001 27.5C35.2001 27.5 37.1618 28.4716 38.5001 29.9933C39.6368 31.295 40.3334 32.9817 40.3334 34.8333Z" stroke="#58BD7D" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M30.1401 34.8338L31.9551 36.6488L35.8601 33.0371" stroke="#58BD7D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M38.5 15.5837V29.9936C37.1617 28.472 35.2 27.5003 33 27.5003C28.9483 27.5003 25.6667 30.782 25.6667 34.8337C25.6667 36.2087 26.0517 37.5103 26.73 38.6103C27.115 39.2703 27.61 39.857 28.1783 40.3337H14.6667C8.25 40.3337 5.5 36.667 5.5 31.167V15.5837C5.5 10.0837 8.25 6.41699 14.6667 6.41699H29.3333C35.75 6.41699 38.5 10.0837 38.5 15.5837Z" stroke="#58BD7D" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M21.9918 25.1169H22.0083" stroke="#58BD7D" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15.2062 25.1169H15.2226" stroke="#58BD7D" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15.2062 30.6169H15.2226" stroke="#58BD7D" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Recurring buys</h6>
                                            <p>
                                                Invest in cryptocurrency slowly over time by scheduling
                                                buys daily, weekly, or monthly.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon blue">
                                            <svg width={45} height={44} viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M26.5332 3.66699H22.1332C21.5253 3.66699 21.0332 4.15907 21.0332 4.76699C21.0332 5.37491 21.5253 5.86699 22.1332 5.86699H26.5332C27.1411 5.86699 27.6332 5.37491 27.6332 4.76699C27.6332 4.15907 27.1411 3.66699 26.5332 3.66699Z" fill="#3772FF" />
                                                <path d="M31.3001 0H13.7001C11.2743 0 9.30011 1.97416 9.30011 4.4V39.6C9.30011 42.0258 11.2743 44 13.7001 44H31.3001C33.726 44 35.7001 42.0258 35.7001 39.6V4.4C35.7001 1.97416 33.726 0 31.3001 0ZM33.5001 39.6C33.5001 40.8152 32.5153 41.8 31.3001 41.8H13.7001C12.485 41.8 11.5001 40.8152 11.5001 39.6V4.4C11.5001 3.18484 12.485 2.2 13.7001 2.2H31.3001C32.5153 2.2 33.5001 3.18484 33.5001 4.4V39.6Z" fill="#3772FF" />
                                                <path d="M22.5002 40.3336C23.7152 40.3336 24.7002 39.3486 24.7002 38.1336C24.7002 36.9186 23.7152 35.9336 22.5002 35.9336C21.2851 35.9336 20.3002 36.9186 20.3002 38.1336C20.3002 39.3486 21.2851 40.3336 22.5002 40.3336Z" fill="#3772FF" />
                                                <path d="M18.4666 5.86699C19.0741 5.86699 19.5666 5.3745 19.5666 4.76699C19.5666 4.15948 19.0741 3.66699 18.4666 3.66699C17.8591 3.66699 17.3666 4.15948 17.3666 4.76699C17.3666 5.3745 17.8591 5.86699 18.4666 5.86699Z" fill="#3772FF" />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Mobile apps</h6>
                                            <p>
                                                Stay on top of the markets with the Coinbase app for
                                                Android or iOS.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="services_image">
                                <div className="experience">
                                    <h6 className="fs-18">How was your experience?</h6>
                                    <ul className="list-felling">
                                        <li className="icon">
                                            <Link href="#"><img src="/assets/images/icon/icon-1.png" alt="" /></Link>
                                        </li>
                                        <li className="icon">
                                            <Link href="#"><img src="/assets/images/icon/icon-2.png" alt="" /></Link>
                                        </li>
                                        <li className="icon">
                                            <Link href="#"><img src="/assets/images/icon/icon-3.png" alt="" /></Link>
                                        </li>
                                        <li className="icon">
                                            <Link href="#"><img src="/assets/images/icon/icon-4.png" alt="" /></Link>
                                        </li>
                                        <li className="icon">
                                            <Link href="#"><img src="/assets/images/icon/icon-5.png" alt="" /></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="crypto-box">
                                    <img className="arrow" src="/assets/images/icon/Arrow.png" alt="" />
                                    <div className="left">
                                        <img src="/assets/images/icon/bitcoin.png" alt="" />
                                        <div>
                                            <h6>BTC</h6>
                                            <p>+1.46%</p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <h6 className="price">$56,623.54</h6>
                                        <ChatList color={1} />
                                    </div>
                                </div>
                                <div className="shape" />
                                <div className="user-card">
                                    <div className="info">
                                        <img src="/assets/images/avt/user.jpg" alt="" />
                                        <h6>Esther Howard</h6>
                                        <p>estherhoward01@gmail.com</p>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">Portfolio</h6>
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.556641 12.6349L0.556641 12.6351C0.555778 18.596 5.38811 23.4291 11.3462 23.4291L0.556641 12.6349ZM0.556641 12.6349C0.554914 6.67409 5.3871 1.8418 11.348 1.8418C17.3089 1.8418 22.1413 6.67494 22.1413 12.6359C22.1413 18.5958 17.3091 23.4282 11.3462 23.4291L0.556641 12.6349Z" stroke="#B1B5C3" />
                                            <path d="M15.7919 9.86931C15.6464 8.3568 14.3408 7.84992 12.691 7.70535V5.60645H11.4143V7.64933C11.0791 7.64933 10.7358 7.65566 10.3951 7.66288V5.60645H9.11844L9.11754 7.70354C8.84106 7.70896 8.5691 7.71439 8.30436 7.71439V7.70806L6.54338 7.70716V9.07149C6.54338 9.07149 7.48667 9.05342 7.47041 9.07059C7.98813 9.07059 8.15618 9.37056 8.20497 9.62987V12.0206C8.24112 12.0206 8.2872 12.0224 8.3396 12.0297H8.20497L8.20407 15.3791C8.18148 15.5417 8.08571 15.801 7.7243 15.8019C7.74056 15.8164 6.79637 15.8019 6.79637 15.8019L6.54248 17.3271H8.20497C8.51398 17.3271 8.81847 17.3325 9.11664 17.3343L9.11754 19.4567H10.3933V17.3569C10.743 17.3641 11.0818 17.3668 11.4134 17.3668L11.4125 19.4567H12.6892V17.3388C14.836 17.2159 16.3404 16.6747 16.5265 14.658C16.6774 13.0344 15.9139 12.3088 14.695 12.0161C15.4368 11.6402 15.9003 10.9761 15.7919 9.86931ZM14.0047 14.4068C14.0047 15.9925 11.2896 15.8127 10.4231 15.8127V13.0001C11.2896 13.0019 14.0047 12.7534 14.0047 14.4068ZM13.4102 10.4394C13.4102 11.8824 11.1442 11.7134 10.4231 11.7143V9.16456C11.1451 9.16456 13.4111 8.93506 13.4102 10.4394Z" fill="#B1B5C3" />
                                            <path d="M8.20801 11.9639H8.39775V12.1039H8.20801V11.9639Z" fill="#B1B5C3" />
                                        </svg>
                                        <p>Balance</p>
                                        <h6 className="price">$2,509.75 <span>+9.77%</span></h6>
                                        <div className="button">
                                            <Link href="#">Deposit</Link>
                                            <Link href="#">Withdraw</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
