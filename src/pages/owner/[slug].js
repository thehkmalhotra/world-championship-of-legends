import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const Owner = () => {
    const currentSlug = useRouter().query.slug;
    const currentOwner = currentSlug?.replace("-", " ");
    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="owner-container">
                        <div className="owner-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>About &gt;</li>
                                <li>Owner &gt;</li>
                                <li>{currentOwner}</li>
                            </ul>
                            <div className="page-headers">
                                <h1>{currentOwner}</h1>
                            </div>
                        </div>
                        <div className="owner-wcl">
                            <Image src={`/assets/images/owners/${currentSlug}.webp`} width={320} height={480} style={{ borderRadius: "20px", objectFit: "cover" }} />
                            <div>
                                <h2>{currentOwner === "ajay devgn" ? "Mr. Ajay Devgn – Bollywood Icon and Co-Owner of WCL" : currentOwner === "nishant pitti" ? "CEO and Founder, EaseMyTrip" : currentOwner === "harshit tomar" ? "CEO and Founder, WCL" : ""}</h2>
                                <p>
                                    {currentOwner === "ajay devgn" ? "A legendary figure in Indian cinema, Mr. Ajay Devgn brings his unparalleled influence and visionary leadership to the World Championship of Legends (WCL). As a Bollywood icon with a career spanning over three decades, he is known for his excellence in acting, producing, and entrepreneurship. As the co-owner of WCL, Mr. Devgn leverages his passion for sports and entertainment to elevate the league, creating a global platform that celebrates cricket legends and their enduring legacy."
                                        :
                                        currentOwner === "nishant pitti" ? "Nishant Pitti is the CEO and founder of EaseMyTrip, India’s second-largest travel company, valued at $1.2 billion, with a presence in over 12 countries, including the UK, Thailand, UAE and the USA. Under his leadership, EaseMyTrip was successfully listed on the National Stock Exchange of India in 2021, marking a significant milestone for the company. In addition to his achievements in the travel industry, Mr. Pitti has made a name in Bollywood, producing notable films like Harry Met Sejal, Tubelight, Manikarnika, and many others. Beyond travel and film, he has diversified his investments into various sectors, including real estate, restaurants, and sport leagues, showcasing his versatile business acumen. As the Chief Patron of the World Championship of Legends, Nishant brings his strategic insight and dedication to creating unforgettable experiences for cricket fans, elevating WCL as a global celebration of the sport."
                                            :
                                            currentOwner === "harshit tomar" ? "Harshit Tomar began his journey as a rapper and has contributed over 30 songs to the music industry, collaborating with top artists like Neha Kakkar and Raftaar. With partnerships spanning nearly every major music label in the country, Mr. Harshit has solidified his presence in the industry. He also owns Platinum Music, a music label that has produced numerous hits with well-known artists. Beyond music, Mr. Harshit has worked closely with EaseMyTrip, representing the company at major sporting events such as the Asia Cup, World Tennis League, World Padel League, and many other prominent tournaments. Now, as the founder and CEO of the World Championship of Legends, he brings his creative vision and leadership to the world of sports, making WCL a premier event celebrating the legacy of cricket."
                                                :
                                                ""}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            <style jsx>{`
            .owner-container {
                width: 100%;
                max-width: 1280px;
                padding: 0 20px;
                margin: auto;
                display: flex;
                flex-direction: column;
                gap: 100px;
                margin-top: 80px;
                margin-bottom: 80px;
            }

            .owner-header-container {
                width: max-content;
                margin: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            .owner-header-container ul {
                display: flex;
                gap: 5px;
                list-style: none;
            }

            .owner-header-container ul li {
                color: #ABB1CB;
                font-family: "Poppins Regular";
                font-size: 16px;
                letter-spacing: 1px;
                text-transform: uppercase;
            }

            .page-headers {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .page-headers div {
                color: #ffffff;
                font-family: "Poppins Bold";
                font-weight: 500;
                font-size: 45px;
                letter-spacing: .02em;
                text-transform: uppercase;
            }

            .owner-wcl {
                width: 100%;
                max-width: 720px;
                padding: 0 20px;
                margin: 50px auto 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 80px;
            }

            .owner-wcl img {
                margin: auto;
            }

            .owner-wcl div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            .owner-wcl div h2 {
                color: #ffffff;
                font-family: "Poppins Bold";
                font-weight: 500;
                letter-spacing: .02em;
                text-transform: uppercase;
                text-align: center;
            }

            .owner-wcl div p {
                color: #D3D3D3;
                font-family: "Poppins Light";
                font-weight: 500;
                letter-spacing: .04em;
                text-transform: uppercase;
                text-align: center;
            }
      `}</style>
        </>
    )
}

export default Owner
