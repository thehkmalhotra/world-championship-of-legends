import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React, { useState } from 'react'

const LwlLanding = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!email) {
            setSuccess("");
            setError('Email is required');
            return;
        }
    
        if (!validateEmail(email)) {
            setSuccess("");
            setError('Please enter a valid email address');
            return;
        }
        setError('');
    
        // If email is valid, proceed with form submission
        const response = await fetch("/api/lwl/preregister", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email
            })
        });
    
        if (response.ok) {
            const result = await response.json();
            if (result.statusCode === 500) { // Fixed here: Strict comparison
                setError("You've already subscribed");
            } else if (result.statusCode === 200) {
                setSuccess("You've subscribed for LWL.");
            }
            console.log(result);            
            setError('');
        } else {
            setError('There was an error submitting your email. Please try again.');
        }
    };

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
                                <div className="email">
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            placeholder="Enter your email address"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <button type="submit">Join Now</button>
                                    </form>
                                </div>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                {success && <p style={{ color: '#ffffff' }}>{success}</p>}
                            </div>
                        </div>
                        <div className="lwl-wcl">
                            <img src="/assets/images/lwl-registeration-banner.webp" />
                            <div>
                                <h2>What's in for you?</h2>
                                <ul>
                                    <li>Travel to the UK 🇬🇧 alongside your favourite 🏏 cricketing legends.</li>
                                    <li>Stay with your chosen team and experience the behind-the-scenes 🎥 action of WCL.</li>
                                    <li>Be a part of match-day activities 🏟️, training sessions 💪, and 🎤 media appearances.</li>
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
                                        <h6>(16th March to 25th March)</h6>
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

                .email {
                    width: 300px;
                    margin: auto;
                    position: relative;
                }

                .email input {
                    width: 100%;
                    height: 45px;
                    padding: 0 110px 0 10px;
                    border: solid 2px #ABB1CB;
                    outline: none;
                    border-radius: 10px;
                    background-color: transparent;
                    color: #ffffff;
                    font-family: "Formula Condensed Regular";
                    font-weight: 500;
                    font-size: 16px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    transition: all .2s;
                }

                .email input:hover,
                .email input:active,
                .email input:focus {
                    border: solid 2px #ffffff;
                }

                .email input::placeholder {
                    color: #ABB1CB;
                }

                .email button {
                    width: 100px;
                    height: 45px !important;
                    background-color: #ffffff !important;
                    color: #2D3B7D !important;
                    text-decoration: unset !important;
                    border-radius: 10px;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    font-family: "Formula Condensed Regular";
                    font-weight: 500;
                    font-size: 16px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
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
    );
};

export default LwlLanding;