import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';

const LoginLWL = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate empty fields
        if (!email || !password) {
            setError("Email and Password cannot be empty.");
            return;
        }

        // Validate email format
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Reset error and handle login here
        setError('');
        const response = await fetch("/api/lwl/login",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const result = await response.json();
        console.log(result);
        
        // Perform your login logic here (e.g., API call)
    };

    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="lwl-container">
                        <div className="lwl-header-container">
                            <div className="page-headers">
                                <h1>Live with the Legends Login</h1>
                            </div>
                        </div>
                        <div className="login-container">
                            <form onSubmit={handleSubmit}>
                                <label>
                                    Email
                                    <input
                                        type="text"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>
                                <label>
                                    Password
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </label>
                                <button type="submit">Login</button>
                            </form>
                            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
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

                .login-container {
                    width: 100%;
                    margin: auto;
                    padding: 0 2rem 50px 2rem;
                }

                .login-container form {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .login-container form label {
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

                .login-container form input,
                .login-container form select {
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

                .login-container form input:hover,
                .login-container form input:active,
                .login-container form input:focus {
                    border: solid 2px #ffffff;
                }

                .login-container form select {
                    -webkit-appearance: none;
                }

                .login-container form input::placeholder {
                    color: #ABB1CB;
                }

                .login-container form button {
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

export default LoginLWL;