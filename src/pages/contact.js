import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="contact-container">
                        <div className="contact-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>Contact</li>
                            </ul>
                            <div className="page-headers">
                                <h1>Contact WCL</h1>
                            </div>
                        </div>
                        <div className="contact-wcl">
                            <div>
                                <h2>Office Address</h2>
                                <p>Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.</p>
                            </div>
                            <div>
                                <h2>Office Address (India)</h2>
                                <p>Sai Telematics - E2 Swaran Jayanti Puram Govindpuram Ghaziabad Uttar Pradesh 201002</p>
                            </div>
                            <div>
                                <h2>Email</h2>
                                <p>support@wclcricket.com</p>
                            </div>
                            <div>
                                <h2>Support Hours</h2>
                                <p>Our team is available to assist you Monday to Friday, 9 AM to 6 PM (Dubai Time).</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            <style jsx>{`
                .contact-container {
                    width: 100%;
                    padding: 40px 20px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }

                .contact-header-container {
                    width: max-content;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .contact-header-container ul {
                    display: flex;
                    gap: 5px;
                    list-style: none;
                }

                .contact-header-container ul li {
                    color: #ABB1CB;
                    font-family: "Poppins Regular";
                    font-size: 16px;
                    text-transform: uppercase;
                }

                .page-headers {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    text-align: center;
                }

                .page-headers h1 {
                    color: #ffffff;
                    font-family: "Poppins Semibold";
                    font-size: 35px;
                    text-transform: uppercase;
                }

                .contact-wcl {
                    width: 100%;
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 100px 2rem;
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 20px;
                }

                .contact-wcl div {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .contact-wcl div h2 {
                    color: #ffffff;
                    font-family: "Poppins Semibold";
                    font-weight: 500;
                    font-size: 20px;
                    text-transform: uppercase;
                    text-align: center;
                }

                .contact-wcl div p {
                    color: #D3D3D3;
                    font-family: "Poppins Light";
                    text-align: center;
                }

                /* Responsive adjustments */
                @media (min-width: 768px) {
                    .contact-wcl {
                        grid-template-columns: repeat(2, 1fr);
                        padding: 280px 20px;
                    }
                }

                @media (min-width: 1024px) {
                    .contact-wcl {
                        grid-template-columns: repeat(4, 1fr);
                        padding: 280px 20px;
                    }
                }
            `}</style>
        </>
    )
}

export default Contact