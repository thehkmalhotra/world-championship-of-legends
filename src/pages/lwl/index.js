import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const LwlLanding = () => {
    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="lwl-container">
                        <div className="lwl-header-container">
                            <div className="page-headers">
                                <h1>Live with the Legends</h1>
                                <p>
                                    Are you ready to live your cricket dream? Here’s your chance to win an all-expenses-paid trip to the UK, where you’ll travel with legendary cricketers, live the cricket lifestyle, and create memories of a lifetime!
                                </p>
                                <div className="cta">
                                    <Link href="/lwl/register" legacyBehavior>
                                        <button>Join Now</button>
                                    </Link>
                                    <Link href="/lwl/login" legacyBehavior>
                                        <button>Already Joined</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="lwl-wcl">
                            <img src="/assets/images/lwl-registeration-banner.webp" />
                            <div>
                                <h2>What's in for you?</h2>
                                <ul>
                                    <li>Travel to the UK 🇬🇧 alongside your favourite 🏏 cricketing legends.</li>
                                    <li>Stay with your chosen team and experience the behind-the-scenes 🎥 action of WCL.</li>
                                    <li>Be a part of match-day activities 🏟️ training sessions 💪 and 🎤 media appearances.</li>
                                    <li>Feature on WCL platforms & broadcasting partners 📺 as one of the lucky winners.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="how-it-works-container">
                            <div className="how-it-works-header">
                                <h2>How it works?</h2>
                                <p>Participating in "Live with the Legends" is simple yet exciting!</p>
                            </div>
                            <div className="how-it-works-grid">
                                <div className="round">
                                    <div>
                                        <h4>Round 1</h4>
                                        <h6>(15th Feb to 15th March)</h6>
                                    </div>
                                    <p>A 15-minute quiz with 10 multiple-choice questions on cricket history, rules, iconic moments, and the World Championship of Legends (WCL).</p>
                                </div>
                                <div className="round">
                                    <div>
                                        <h4>Round 2</h4>
                                        <h6>(16th March to 25th march)</h6>
                                    </div>
                                    <p>Submit a 1-2 minute video sharing your enthusiasm for cricket and why you should win this incredible opportunity.</p>
                                </div>
                                <div className="round">
                                    <div>
                                        <h4>Round 3</h4>
                                        <h6>(8th April to 10th April)</h6>
                                    </div>
                                    <p>A live Zoom call with the team captains and WCL representatives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            <style jsx>{`
            .lwl-container {
                width: 100%;
                max-width: 1280px;
                padding: 0 20px;
                margin: auto;
                display: flex;
                flex-direction: column;
                gap: 100px;
                margin-top: 80px;
            }

            .lwl-header-container {
                margin: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            .page-headers {
                width: 100%;
                max-width: 720px;
                margin: auto;
                padding: 0 20px;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .page-headers h1 {
                color: #ffffff;
                font-family: "Formula Condensed Bold";
                font-weight: 500;
                font-size: 45px;
                letter-spacing: .02em;
                text-transform: uppercase;
                text-align: center;
            }

            .page-headers p {
                color: #D3D3D3;
                font-family: "Formula Condensed Light";
                font-weight: 500;
                font-size: 18px;
                letter-spacing: .02em;
                text-transform: uppercase;
                text-align: center;
            }

            .page-headers .cta {
                display: flex;
                align-items: center;
                gap: 10px;
                margin: auto;
            }

            .page-headers button:first-child {
                width: max-content;
                height: 40px;
                padding: 0 20px;
                background-color: #ffffff;
                color: #2D3B7D;
                border: none;
                outline: none;
                border-radius: 10px;
                font-family: "Formula Condensed Light";
                font-weight: 500;
                font-size: 16px;
                letter-spacing: .02em;
                text-transform: uppercase;
                text-align: center;
                cursor: pointer;
            }

            .page-headers button:last-child {
                width: max-content;
                height: 40px;
                padding: 0 20px;
                background-color: transparent;
                color: #ffffff;
                border: none;
                outline: none;
                font-family: "Formula Condensed Light";
                font-weight: 500;
                font-size: 16px;
                letter-spacing: .02em;
                text-transform: uppercase;
                text-decoration-line: underline;
                text-underline-offset: 2px;
                text-align: center;
                cursor: pointer;
            }

            .lwl-wcl {
                width: 100%;
                max-width: 720px;
                padding: 0 20px;
                margin: 50px auto 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 80px;
            }

            .lwl-wcl img {
                margin: auto;
                width: 100%;
                border-radius: 15px;
            }

            .lwl-wcl div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            .lwl-wcl div h2 {
                color: #ffffff;
                font-family: "Formula Condensed Bold";
                font-weight: 500;
                letter-spacing: .02em;
                text-transform: uppercase;
            }

            .lwl-wcl div p {
                color: #D3D3D3;
                font-family: "Formula Condensed Light";
                font-weight: 500;
                letter-spacing: .02em;
                text-transform: uppercase;
                text-align: center;
            }

            .lwl-wcl div ul {
                list-style: none;
                display: flex;
                flex-direction: column;
            }

            @media screen and (max-width: 767px) {
            .lwl-wcl div ul {
                gap: 10px;
            }
            }

            .lwl-wcl div ul li {
                color: #D3D3D3;
                font-family: "Formula Condensed Light";
                font-weight: 500;
                letter-spacing: .02em;
                text-transform: uppercase;
                text-align: center;
            }

            .how-it-works-container {
                width: 100%;
                max-width: 720px;
                padding: 0 20px;
                margin: 50px auto 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 40px;
            }

            .how-it-works-header {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .how-it-works-header h2 {
                color: #ffffff;
                font-family: "Formula Condensed Bold";
                font-weight: 500;
                letter-spacing: .02em;
                text-transform: uppercase;
                text-align: center;
            }

            .how-it-works-header p {
                color: #D3D3D3;
                font-family: "Formula Condensed Light";
                font-weight: 500;
                letter-spacing: .02em;
                text-transform: uppercase;
                text-align: center;
            }

            .how-it-works-grid {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                column-gap: 10px;
                row-gap: 10px;
            }

            .round {
                background-color: #27336D;
                padding: 40px 20px;
                width: calc(50% - 5px);
                border-radius: 15px;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            @media screen and (max-width: 767px) {
            .round {
                width: 100%;
            }
            }

            .round:last-child {
                width: 100%;
            }

            .round h4 {
                color: #ffffff;
                font-family: "Formula Condensed Regular";
                font-weight: 500;
                letter-spacing: .02em;
                text-transform: uppercase;
                text-align: center;
            }

            .round h6 {
                color: #ABB1CB;
                font-family: "Formula Condensed Light";
                font-weight: 500;
                font-size: 12px;
                letter-spacing: .02em;
                text-transform: uppercase;
                text-align: center;
            }

            .round p {
                color: #D3D3D3;
                font-family: "Formula Condensed Light";
                font-weight: 500;
                font-size: 14px;
                letter-spacing: .02em;
                text-transform: uppercase;
                text-align: center;
            }
      `}</style>
        </>
    )
}

export default LwlLanding