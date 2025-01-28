import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React, { useState } from 'react'

const Quiz = () => {
    const [timeleft, setTimeLeft] = useState(0);
    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="lwl-container">
                        <div className="lwl-header-container">
                            <div className="time-loader">
                                <div></div>
                            </div>
                            <p>⌛ 20 Minutes Left</p>
                        </div>
                        <div className="quiz-container">
                            <form>
                                <div className="question">
                                    <h4>Q1. Who scored the highest score in WCL Season 1 that happened in 2024?</h4>
                                    <div className="options">
                                        <label>
                                            <input type="radio" name="question-1" value="Australia" />
                                            <p>Australia Champions</p>
                                        </label>
                                        <label>
                                            <input type="radio" name="question-1" value="Australia" />
                                            <p>Australia Champions</p>
                                        </label>
                                        <label>
                                            <input type="radio" name="question-1" value="Australia" />
                                            <p>Australia Champions</p>
                                        </label>
                                        <label>
                                            <input type="radio" name="question-1" value="Australia" />
                                            <p>Australia Champions</p>
                                        </label>
                                    </div>
                                    x                                </div>
                            </form>
                        </div>
                        <div className="lwl-footer-container">
                            <div>
                                <button className="go-back">Previous</button>
                                <button className="go-forward">Previous</button>
                            </div>
                            <button className="submit">Submit</button>
                        </div>
                    </div>
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
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                }

                .time-loader {
                    width: 100%;
                    height: 4px;
                    border-radius: 100px;
                    background-color: #ABB1CB;
                }

                .time-loader div {
                    width: 100%;
                    height: 100%;
                    border-radius: 100px;
                    background-color: #ffffff;
                }

                .lwl-header-container p {
                    font-family: "Formula Condensed Regular";
                    font-size: 14px;
                    font-weight: 400;
                    text-transform: uppercase;
                    color: #ffffff;
                }
                
                .quiz-container form input {
                    display: none;
                }

                .quiz-container form input:checked + p {
                    background-color: #27336D;
                    color: #ffffff;
                }

                .question h4 {
                    font-family: "Formula Condensed Regular";
                    font-weight: 500;
                    font-size: 20px;
                    text-transform: uppercase;
                    color: #ffffff;
                }

                .quiz-container form .options {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 100px;
                }

                .quiz-container form .options {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                    margin-top: 20px;
                }

                .quiz-container form .options p {
                    height: 80px;
                    width: 100%;
                    border-radius: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: "Formula Condensed Regular";
                    font-weight: 500;
                    font-size: 16px;
                    text-transform: uppercase;
                    color: #ABB1CB;
                    cursor: pointer;
                }

                .lwl-footer-container {
                    display: flex;
                    justify-content: space-between;
                }

                .lwl-footer-container div {
                    display: flex;
                    gap: 10px;
                }
            `}</style>
        </>
    )
}

export default Quiz