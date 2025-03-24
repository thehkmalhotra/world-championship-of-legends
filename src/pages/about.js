import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = ({ meta_title, meta_description, meta_keywords }) => {
    return (
        <>
            <Head>
                <title>{meta_title}</title>
                <meta name="description" content={meta_description} />
                <meta name="keywords" content={meta_keywords} />
            </Head>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="about-container">
                        <div className="about-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>About</li>
                            </ul>
                            <div className="page-headers">
                                <h1>About Wcl</h1>
                            </div>
                        </div>
                        <div className="about-wcl">
                            <Image src="/assets/images/trophy.webp" width={100} height={280} />
                            <div>
                                <h2>WAR OF CHAMPIONS</h2>
                                <p>Edgbaston, the distinguished host of the World Championship of Legends (WCL) this summer. Immerse yourself in a riveting T20 tournament. Approved by the England & Wales Cricket Board (ECB), WCL unveils a stellar showcase of retired and non-contracted players from cricketing giants, including England, India, Pakistan, Australia, West Indies, and South Africa. Join us for an unforgettable celebration of cricket’s living legends.</p>
                            </div>
                        </div>
                        <div className="about-wcl-bollywood">
                            <div>
                                <h2>Meet the league owners</h2>
                                <p>Leading the World Championship of Legends (WCL) is a visionary leadership team dedicated to redefining the sport. Mr. Ajay Devgn, Bollywood icon and co-owner of WCL, Mr. Nishant Pitti, co-founder of EaseMyTrip, and Mr. Harshit Tomar, founder and owner of WCL, bring together their unmatched expertise in entertainment, business, and sports to make WCL a premier platform for cricket legends.</p>
                            </div>
                            <div className="bollywood-owners">
                                <Link href={"/owner/ajay-devgn"}>
                                    <div className="wcl-owner" style={{ backgroundImage: "url('/assets/images/owners/ajay-devgn.webp')" }}>
                                        <div>
                                            <h2>Ajay Devgn</h2>
                                            <p>Co-Owner</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link href={"/owner/nishant-pitti"}>
                                    <div className="wcl-owner" style={{ backgroundImage: "url('/assets/images/owners/nishant-pitti.webp')" }}>
                                        <div>
                                            <h2>Nishant Pitti</h2>
                                            <p>Chief Patron</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link href={"/owner/harshit-tomar"}>
                                    <div className="wcl-owner" style={{ backgroundImage: "url('/assets/images/owners/harshit-tomar.webp')" }}>
                                        <div>
                                            <h2>Harshit Tomar</h2>
                                            <p>Founder & CEO</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            <style jsx>{`
            .about-container {
                width: 100%;
                max-width: 1280px;
                padding: 0 20px;
                margin: auto;
                display: flex;
                flex-direction: column;
                gap: 100px;
                margin-top: 80px;
            }

            .about-header-container {
                width: max-content;
                margin: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            .about-header-container ul {
                display: flex;
                gap: 5px;
                list-style: none;
            }

            .about-header-container ul li {
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

            .about-wcl {
                width: 100%;
                max-width: 720px;
                padding: 0 20px;
                margin: 50px auto 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 80px;
            }

            .about-wcl img {
                margin: auto;
            }

            .about-wcl div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            .about-wcl div h2 {
                color: #ffffff;
                font-family: "Poppins Semibold";
                text-transform: uppercase;
            }

            .about-wcl div p {
                color: #D3D3D3;
                font-family: "Poppins Light";
                font-weight: 500;
                text-align: center;
            }

            .about-wcl-bollywood {
                width: 100%;
                max-width: 720px;
                padding: 0 20px;
                margin: 150px auto 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 50px;
            }

            .about-wcl-bollywood div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            .about-wcl-bollywood div h2 {
                color: #ffffff;
                font-family: "Poppins Semibold";
x                text-transform: uppercase;
                text-align: center;
            }

            .about-wcl-bollywood div p {
                color: #D3D3D3;
                font-family: "Poppins Light";
                font-weight: 500;
                text-align: center;
            }

            .bollywood-owners {
                width: 100%;
                display: grid !important;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
            }

            @media screen and (max-width: 768px) {
            .bollywood-owners {
                grid-template-columns: repeat(1, 1fr);
            }
            }

            .wcl-owner {
                width: 100%;
                height: 320px;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                border-radius: 20px;
                display: flex;
                padding: 15px;
                position: relative;
            }

            @media screen and (max-width: 768px) {
            .wcl-owner {
                height: 480px;
            }
            }

            .wcl-owner:after {
                content: "";
                height: 100%;
                width: 100%;
                background-color: #00000050;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 20px;
            }

            .wcl-owner div {
                display: flex;
                flex-direction: column;
                gap: 4px;
                margin-top: auto;
                margin-right: auto;
            }

            .wcl-owner h2 {
                margin: auto auto 0 0;
                color: #D3D3D3;
                font-family: "Poppins Regular" !important;
                font-size: 15px;
                letter-spacing: .02em;
                text-transform: uppercase;
                z-index: 1;
            }

            .wcl-owner p {
                margin: auto auto 0 0;
                color: #D3D3D3;
                font-family: "Poppins Light" !important;
                font-size: 12px;
                letter-spacing: .02em;
                text-transform: uppercase;
                z-index: 1;
            }
      `}</style>
        </>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            meta_title: "West Indies Champions | West Indies Cricket Legends | WCL 2025 - WCL T20",
            meta_description: "See West Indies Champions & West Indies cricket legends in WCL 2025! Iconic WI stars shine in the World Championship. Check it out!",
            meta_keywords: "West Indies Champions, West Indies  Cricket Legends, West Indies  Legends,  Edgbaston, Northampton, WCL T20"
        }
    }
}

export default About