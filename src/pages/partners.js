import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import React from 'react'

const Partners = ({ canonical_link, meta_title, meta_description, meta_keywords }) => {
    return (
        <>
            <Head>
                <title>{meta_title}</title>
                <link rel="canonical" href={canonical_link} />
                <meta name="description" content={meta_description} />
                <meta name="keywords" content={meta_keywords} />
            </Head>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="partners-container">
                        <div className="partners-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>Partners</li>
                            </ul>
                            <div className="page-headers">
                                <h1>WCL Cricket Partners 2025</h1>
                            </div>
                        </div>
                        <div className="sponsors">
                            <h2>Sponsors</h2>
                            <div className="partners-grid">
                                <div>
                                    <img src="/assets/images/sponsor/aayush.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/aeon-trisl.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/burj-mayfair.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/emt-hite.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/fomo-7.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/grace-entertaiment.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/honor.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/maisour.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/oneflita.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/pannache.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/remit-choice.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/tata-aig-ins.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/the-knight.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/three-falcon.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/tv-9.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/voce.webp" />
                                </div>
                            </div>
                        </div>
                        <div className="partners">
                            <h2>Broadcast Partners</h2>
                            <div className="partners-grid">
                                <div>
                                    <img src="/assets/images/broadcast/cricbuzz.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/broadcast/fancode.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/broadcast/fox-sports.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/broadcast/sports-eye.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/broadcast/sports-max.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/sponsor/grace-entertaiment.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/broadcast/star-sports-hindi-hd.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/broadcast/star-sports-hindi.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/broadcast/starzplay.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/broadcast/super-sport.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/broadcast/tamasha.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/broadcast/tnt-sports.webp" />
                                </div>
                                <div>
                                    <img src="/assets/images/broadcast/willow.webp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            <style jsx>{`
                .partners-container {
                    width: 100%;
                    max-width: 1280px;
                    padding: 0 20px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 100px;
                    margin-top: 80px;
                    margin-bottom: 40px;
                }

                .partners-header-container {
                    width: max-content;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .partners-header-container ul {
                    display: flex;
                    gap: 5px;
                    list-style: none;
                }

                .partners-header-container ul li {
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

                .sponsors {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .sponsors h2 {
                    color: #ffffff;
                    font-family: "Poppins Semibold";
                    font-size: 25px;
                    text-transform: uppercase;
                }

                .partners {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .partners h2 {
                    color: #ffffff;
                    font-family: "Poppins Semibold";
                    font-size: 25px;
                    text-transform: uppercase;
                }

                .partners-grid {
                    display: grid;
                    grid-template-columns: repeat(10, 1fr);
                    gap: 15px;
                }

                @media screen and (max-width: 768px) {
                .partners-grid {
                    grid-template-columns: repeat(3, 1fr);
                }
                }

                .partners-grid div {
                    height: 100px;
                    width: 100px;
                    background-color: #ffffff;
                    border-radius: 10px;
                    padding: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .partners-grid div img {
                    width: 100%;
                    object-fit: contain;
                }
            `}</style>
        </>
    )
}

export async function getServerSideProps({ req }) {
    return {
        props: {
            canonical_link: `https://${req.headers.host}${req.url}`,
            meta_title: "WCL Cricket Partners 2025 | World Championship of Legends Sponsors - WCL T20",
            meta_description: "Meet the WCL Cricket Partners 2025! Explore sponsors of the World Championship of Legends at Edgbaston. Join us today!",
            meta_keywords: "WCL Cricket Partners 2025, World Championship Sponsors, Edgbaston, Northampton, WCL T20WCL Cricket Partners 2025, World Championship Sponsors, Edgbaston, Northampton, WCL T20"
        }
    }
}

export default Partners