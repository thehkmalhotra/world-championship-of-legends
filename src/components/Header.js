import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const router = useRouter();

    return (
        <>
            <header>
                <div className="header-container">
                    <ul className="nav-menu-left">
                        <li><Link href="/news" legacyBehavior><a className={router.pathname === "/news" ? "active" : ""}>News</a></Link></li>
                        <li><Link href="/videos" legacyBehavior><a className={router.pathname === "/videos" ? "active" : ""}>Videos</a></Link></li>
                        <li><Link href="/gallery" legacyBehavior><a className={router.pathname === "/gallery" ? "active" : ""}>Gallery</a></Link></li>
                        <li><Link href="/teams" legacyBehavior><a className={router.pathname === "/teams" ? "active" : router.route.includes("/teams") ? "active" : ""}>Teams</a></Link></li>
                        <li><Link href="/#standings" legacyBehavior><a>Standings</a></Link></li>
                    </ul>
                    <Link href="/" legacyBehavior><a><Image src="/assets/images/wcl-logo.webp" width={70} height={70} /></a></Link>
                    <ul className="nav-menu-right">
                        <li><Link href="/about" legacyBehavior><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link></li>
                        <li><Link href="/partners" legacyBehavior><a className={router.pathname === "/partners" ? "active" : ""}>Partners</a></Link></li>
                        <li><Link href="https://www.instagram.com/worldchampionshipoflegends" legacyBehavior><a>Instagram</a></Link></li>
                        <li><Link href="https://www.facebook.com/@worldchampionshipoflegends/?mibextid=ZbWKwL" legacyBehavior><a>Facebook</a></Link></li>
                        <li><Link href="https://x.com/wclleague" legacyBehavior><a>X</a></Link></li>
                    </ul>
                    <div className="hamburger" onClick={() => { setMobileMenu(!mobileMenu) }}>
                        {
                            mobileMenu ?
                                "Close"
                                :
                                "Menu"
                        }
                    </div>
                    {
                        mobileMenu ?
                            <div className="mobile-menu">
                                <ul>
                                    <li><Link href="/news" legacyBehavior><a className={router.pathname === "/news" ? "active" : ""}>News</a></Link></li>
                                    <li><Link href="/videos" legacyBehavior><a className={router.pathname === "/videos" ? "active" : ""}>Videos</a></Link></li>
                                    <li><Link href="/gallery" legacyBehavior><a className={router.pathname === "/gallery" ? "active" : ""}>Gallery</a></Link></li>
                                    <li><Link href="/teams" legacyBehavior><a className={router.pathname === "/teams" ? "active" : router.route.includes("/teams") ? "active" : ""}>Teams</a></Link></li>
                                    <li onClick={() => { setMobileMenu(false) }}><Link href="/#standings" legacyBehavior><a>Standings</a></Link></li>
                                    <li><Link href="/about" legacyBehavior><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link></li>
                                    <li><Link href="/partners" legacyBehavior><a className={router.pathname === "/partners" ? "active" : ""}>Partners</a></Link></li>
                                    <li><Link href="https://www.instagram.com/worldchampionshipoflegends" legacyBehavior><a>Instagram</a></Link></li>
                                    <li><Link href="https://www.facebook.com/@worldchampionshipoflegends/?mibextid=ZbWKwL" legacyBehavior><a>Facebook</a></Link></li>
                                    <li><Link href="https://x.com/wclleague" legacyBehavior><a>X</a></Link></li>
                                </ul>
                            </div>
                            :
                            ""
                    }
                </div>
            </header>

            <style jsx>{`
                header {
                    width: 100%;
                    height: 100px;
                    display: flex;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    z-index: 999;
                    background-color: #2D3B7D;
                }

                header .header-container {
                    width: 100%;
                    max-width: 1280px;
                    margin: auto;
                    padding: 0 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                header ul {
                    width: 45%;
                    display: flex;
                    gap: 20px;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                @media screen and (max-width: 1023px) {
                    header ul {
                        display: none;
                    }
                }

                header ul.nav-menu-right {
                    justify-content: flex-end;
                }

                header ul li {
                    font-family: "Formula Condensed Regular";
                    font-size: 16px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                header ul li a {
                    color: #ABB1CB;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                header ul li {
                    color: #ABB1CB;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                header ul li a.active {
                    color: #fff;
                }

                header ul li a:hover {
                    color: #fff;
                }

                header img {
                    width: 80px;
                }

                .hamburger {
                    display: none;
                }
                
                @media screen and (max-width: 1023px) {
                .hamburger {
                    display: flex;
                    font-family: "Formula Condensed Regular";
                    font-size: 20px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    color: #ABB1CB;
                }

                .mobile-menu {
                    display: none;
                }

                @media screen and (max-width: 1023px) {
                .mobile-menu {
                    width: 100%;
                    height: calc(100% - 100px);
                    padding: 20px;
                    background-color: #2D3B7D;
                    display: flex;
                    position: fixed;
                    top: 100px;
                    left: 0;
                }

                .mobile-menu ul {
                    display: flex;
                    flex-direction: column;
                }

                .mobile-menu ul li {
                    font-size: 30px;
                }
                }
            `}</style>
        </>
    )
}

export default Header
