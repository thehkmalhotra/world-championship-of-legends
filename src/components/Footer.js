import Link from 'next/link';
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="col-1">
                        <p>© Copyright {currentYear} WCL. All rights reserved. Unauthorized use or reproduction of any content is prohibited.</p>
                    </div>
                    <div className="col-2">
                        <ul>
                            <li><Link href="/privacy" legacyBehavior><a>Privacy</a></Link></li>
                            <li><Link href="/cancellation-refund" legacyBehavior><a>Cancellation & Refund</a></Link></li>
                        </ul>
                    </div>
                    <div class="col-3">
                     <p>Sai Telematics is our official partner for collecting payments.</p>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                footer {
                    width: 100%;
                }

                .footer-container {
                    width: 100%;
                    max-width: 1280px;
                    padding: 30px 20px;
                    margin: auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                @media screen and (max-width: 1023px) {
                    .footer-container {
                        display: flex;
                        flex-direction: column-reverse;
                        align-items: flex-start;
                        gap: 40px;
                    }
                }

                .footer-container .col-1 p {
                    color: #ABB1CB;
                    font-family: "Formula Condensed Regular";
                    font-size: 16px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                footer ul {
                    display: flex;
                    gap: 20px;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                footer ul:last-child {
                    justify-content: flex-end;
                }

                footer ul li {
                    font-family: "Formula Condensed Regular";
                    font-size: 16px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                footer ul li a {
                    color: #ABB1CB;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                footer ul li {
                    color: #ABB1CB;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                footer ul li a.active {
                    color: #fff;
                }

                footer ul li a:hover {
                    color: #fff;
                }

                .footer-container .col-3 p {
                    color: #ABB1CB;
                    font-family: "Formula Condensed Regular";
                    font-size: 16px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }
            `}</style>
        </>
    )
}

export default Footer
