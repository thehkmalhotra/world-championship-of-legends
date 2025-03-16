import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import React from 'react'

const Tickets = () => {

    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="tickets-container">
                        <div className="tickets-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>Tickets</li>
                            </ul>
                            <div className="page-headers">
                                <h1>WCL Tickets</h1>
                            </div>
                        </div>
                        <div className="tickets-grid">
                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-1-pak-eng.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-2-wi-sa.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-3-eng-aus.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-4-ind-pak.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-5-ind-sa.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-6-eng-wi.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-7-aus-wi.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-8-pak-sa.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-9-eng-sa.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-10-ind-aus.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-11-pak-wi.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-12-aus-sa.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-13-ind-eng.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-14-aus-pak.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-15-ind-wi.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-16-sf1-sf4.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-17-sf2-sf3.webp" /></a>
                            </Link>

                            <Link href="https://edgbaston.com/wcl/" legacyBehavior>
                                <a><img src="/assets/images/tickets/match-18-f1-f2.webp" /></a>
                            </Link>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            <style jsx>{`
            .tickets-container {
                width: 100%;
                max-width: 1280px;
                padding: 0 20px;
                margin: auto;
                display: flex;
                flex-direction: column;
                gap: 100px;
                margin-top: 80px;
            }

            .tickets-header-container {
                width: max-content;
                margin: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            .tickets-header-container ul {
                display: flex;
                gap: 5px;
                list-style: none;
            }

            .tickets-header-container ul li {
                color: #ABB1CB;
                font-family: "Poppins Regular";
                font-size: 16px;
                text-transform: uppercase;
            }

            .page-headers {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .page-headers h1 {
                color: #ffffff;
                font-family: "Poppins Semibold";
                font-size: 35px;
                letter-spacing: .02em;
                text-transform: uppercase;
            }

            .container-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .container-header h1 {
                color: #ffffff;
                font-family: "Poppins Bold";
                font-weight: 500;
                font-size: 40px;
                letter-spacing: .02em;
                text-transform: uppercase;
            }

            .tickets-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 15px;
            }

            @media screen and (max-width: 768px) {
            .tickets-grid {
                grid-template-columns: repeat(1, 1fr);
            }
            }

            .tickets-grid a img {
                width: 100%;
                cursor: pointer;
            }
      `}</style>
        </>
    )
}

export default Tickets;
