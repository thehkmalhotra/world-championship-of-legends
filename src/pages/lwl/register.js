import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';

const RegisterLwl = () => {
    const [loaderStatus, setLoaderStatus] = useState(false);
    const [registerContentStatus, setRegisterContentStatus] = useState(false);

    function handleTerms() {
        setLoaderStatus(true);
        setTimeout(() => {
            setLoaderStatus(false);
            setRegisterContentStatus(true);
        }, 2000)
    }
    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    {
                        registerContentStatus ?
                            <div className="lwl-container">
                                <div className="lwl-header-container">
                                    <div className="page-headers">
                                        <h1>Live with the Legends Registeration</h1>
                                    </div>
                                </div>
                                <div className="registeration-container">
                                    <form>
                                        <label>
                                            Name
                                            <input type="text" placeholder="Your full name" />
                                        </label>
                                        <label>
                                            Father's Name
                                            <input type="text" placeholder="Your father's name" />
                                        </label>
                                        <label>
                                            Date of Birth
                                            <input type="text" placeholder="Your DOB in DD-MM-YY format" />
                                        </label>
                                        <label>
                                            Occupation
                                            <input type="text" placeholder="Your occupation" />
                                        </label>
                                        <label>
                                            Number
                                            <input type="text" placeholder="Your contact number with country code" />
                                        </label>
                                        <label>
                                            Residing Country
                                            <input type="text" placeholder="Your residing country" />
                                        </label>
                                        <label>
                                            Favourite Team
                                            <select>
                                                <option value="Australia Champions">Australia Champions</option>
                                                <option value="England Champions">England Champions</option>
                                                <option value="India Champions">India Champions</option>
                                                <option value="Pakistan Champions">Pakistan Champions</option>
                                                <option value="Sauth Africa Champions">Sauth Africa Champions</option>
                                                <option value="West Indies Champions">West Indies Champions</option>
                                            </select>
                                        </label>
                                        <button>Pay now $12 or ₹1,050</button>
                                    </form>
                                </div>
                            </div>
                            :
                            <div className="lwl-container">
                                <div className="lwl-header-container">
                                    <div className="page-headers">
                                        <h1>Terms and conditions for participation</h1>
                                    </div>
                                </div>
                                <div className="policy-content">
                                    <div>
                                        <h2>Eligibility</h2>
                                        <ul>
                                            <li>Participants must be at least 13 years old.</li>
                                            <li>Ages 13–17 require written permission from a parent or guardian.</li>
                                            <li>Open worldwide, except for WCL employees and immediate family.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Entry Fee</h2>
                                        <ul>
                                            <li>$12 non-refundable fee required to participate.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Selection Process</h2>
                                        <ul>
                                            <li>Completion of Quiz Round, Video Submission, and Captain’s Call required.</li>
                                            <li>Judges' decisions are final.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Travel and Accommodation</h2>
                                        <ul>
                                            <li>Winners receive all-expense-paid travel to the UK.</li>
                                            <li>WCL handles visas and logistics.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Participation in Activities</h2>
                                        <ul>
                                            <li>Winners must attend all training, matches, and media sessions.</li>
                                            <li>Adherence to WCL rules is mandatory.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Media and Publicity</h2>
                                        <ul>
                                            <li>Winners agree to media appearances and promotion.</li>
                                            <li>WCL may use names and images for promotional purposes.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Code of Conduct</h2>
                                        <ul>
                                            <li>Respectful behavior is required; violations may lead to disqualification.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Anti-Corruption Compliance</h2>
                                        <ul>
                                            <li>Strict compliance with WCL’s Anti-Corruption Code is required</li>
                                            <li>Report any suspicious activity to WCL immediately.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Liability</h2>
                                        <ul>
                                            <li>WCL is not liable for personal injury or loss during the contest.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Privacy Policy</h2>
                                        <ul>
                                            <li>Personal information is used only for contest administration.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Disqualification</h2>
                                        <ul>
                                            <li>Non-compliance or false information may result in disqualification.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Governing Law</h2>
                                        <ul>
                                            <li>Governed by Dubai law; disputes resolved in Dubai courts.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Payment Partner</h2>
                                        <ul>
                                            <li>Sai Telematics - E2 Swaran Jayanti Puram Govindpuram Ghaziabad Uttar Pradesh 201002</li>
                                        </ul>
                                    </div>
                                    <button onClick={handleTerms}>
                                        {loaderStatus ? (
                                            <span className="loader"></span>
                                        ) : (
                                            <span>I Agree and Continue</span>
                                        )}
                                    </button>

                                </div>
                            </div>
                    }
                </div>
                <Footer />
            </div>

            <style jsx>{`
                .main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

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
                    width: 100%;
                }

                .lwl-header-container ul {
                    display: flex;
                    gap: 5px;
                    list-style: none;
                }

                .lwl-header-container ul li {
                    color: #ABB1CB;
                    font-family: "Formula Condensed Regular";
                    font-size: 16px;
                    letter-spacing: 1px;
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
                    font-family: "Formula Condensed Bold";
                    font-weight: 500;
                    font-size: 45px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                }

                .policy-content {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    margin: auto;
                    padding: 0 0 50px 0;
                }

                .policy-content div {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .policy-content h2 {
                    font-family: "Formula Condensed Bold";
                    font-weight: 500;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    color: #ffffff;
                }

                .policy-content ul {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    list-style: disc;
                    padding-left: 40px;
                    text-align: left;
                    padding: 0 0 0 15px;
                }

                .policy-content ul li {
                    font-family: "Formula Condensed Light";
                    font-weight: 500;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    color: #ABB1CB;
                }

                .policy-content p {
                    color: #ABB1CB;
                    font-family: "Formula Condensed Light";
                    font-weight: 500;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                }

                .policy-content p a {
                    color: #ffffff;
                    text-decoration-line: underline;
                }

                .policy-content button {
                    width: 180px;
                    height: 40px;
                    padding: 0 20px;
                    margin-top: 20px;
                    background-color: #ffffff;
                    color: #2D3B7D;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    font-family: "Formula Condensed Regular";
                    font-weight: 500;
                    font-size: 16px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    text-align: center;
                }

                .loader {
                    height: 20px;
                    width: 20px;
                    border: 2px solid #ffffff;
                    border-top: 3px solid #000000;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    display: inline-block;
                    vertical-align: middle;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                .registeration-container {
                    width: 100%;
                    margin: auto;
                    padding: 0 2rem 50px 2rem;
                }

                .registeration-container form {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .registeration-container form label {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    color: #ffffff;
                    font-family: "Formula Condensed Regular";
                    font-weight: 500;
                    font-size: 16px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                }

                .registeration-container form input,
                .registeration-container form select {
                    width: 100%;
                    height: 50px;
                    padding: 0 10px;
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

                .registeration-container form input:hover,
                .registeration-container form input:active,
                .registeration-container form input:focus {
                    border: solid 2px #ffffff;
                }

                .registeration-container form select {
                    -webkit-appearance: none;
                }

                .registeration-container form input::placeholder {
                    color: #ABB1CB;
                }

                .registeration-container form button {
                    width: 100%;
                    height: 50px;
                    padding: 0 10px;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    background-color: #ffffff;
                    color: #2D3B7D;
                    font-family: "Formula Condensed Regular";
                    font-weight: 500;
                    font-size: 16px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
};

export default RegisterLwl;