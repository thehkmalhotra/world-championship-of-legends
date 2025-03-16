import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React, { useEffect, useState } from 'react';
import { destroyCookie, parseCookies } from 'nookies';

const SubmitVideo = ({ current_user }) => {
    const [user, setUser] = useState(null);
    const [videoUrl, setVideoUrl] = useState("");
    const [submissionMessage, setSubmissionMessage] = useState("");
    const access_token = current_user?.token || "";

    useEffect(() => {
        if (current_user) {
            setUser(current_user);
        }
    }, [current_user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate URL input
        if (!videoUrl.trim()) {
            alert("Please enter a valid video URL.");
            return;
        }

        try {
            const response = await fetch("/api/lwl/submit-video", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token: access_token, video: videoUrl })
            });

            const result = await response.json();
            setSubmissionMessage(result.message || "Video submitted successfully & you will be logged out in next 3 seconds!");
            destroyCookie(null, "current_user", { path: "/" });
            router.push("/lwl");
        } catch (error) {
            console.error("Error submitting video:", error);
            alert("Failed to submit video. Please try again.");
        }
    };

    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    {user?.user?.quizProgress?.round1?.status === "passed" &&
                        user?.user?.quizProgress?.round2?.status === "locked" ? (
                        <div className="lwl-container">
                            <h2>Round 2: Submit your recorded video</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="url"
                                    placeholder="Enter your recorded video URL"
                                    value={videoUrl}
                                    onChange={(e) => setVideoUrl(e.target.value)}
                                    required
                                />
                                <button type="submit">Submit Video</button>
                                {submissionMessage != "" ?
                                    <p>{submissionMessage}</p>
                                    :
                                    ""}
                            </form>
                            <div className="round-instructions">
                                <p>🎉 Congratulations on clearing Round 1 of Live with the Legends (LWL)!</p>
                                <ul>
                                    <p>📢 What’s Next?</p>
                                    <li>- Round 1 Results Announcement: Results will be sent via email on April 16.</li>
                                    <li>- Round 2 Eligibility: You have successfully qualified for Round 2!</li>
                                </ul>
                                <p>📌 <strong>Round 2 Instructions:</strong></p>
                                <p>Upload your video to YouTube, Google Drive, or any other online platform, ensuring that it is publicly accessible. Copy the public video URL and submit it below.</p>
                                <p>⚠️ <strong>Important:</strong> Your video must be publicly visible without any restrictions. If it is private or restricted, you will not be able to submit it again.</p>
                                <p>🎥 Get ready and showcase your best!</p>
                            </div>

                        </div>
                    ) :
                        user?.user?.quizProgress?.round1?.status === "passed" &&
                            user?.user?.quizProgress?.round2?.status === "submitted"
                            ?
                            (
                                <div className="empty">
                                    <h4>Video Already Submitted</h4>
                                    <p>You are not eligible to submit a video as you've already submitted.</p>
                                </div>
                            )
                            :
                            (
                                <div className="empty">
                                    <h4>Access Denied</h4>
                                    <p>You are not eligible to submit a video at this time.</p>
                                </div>
                            )
                    }
                </div>
                <Footer />
            </div>

            <style jsx>{`
                .main {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .body {
                    width: 100%;
                }

                .lwl-container {
                    width: 40%;
                    max-width: 1280px;
                    padding: 260px 20px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-top: 80px;
                }

                @media screen and (max-width: 767px){
                    .lwl-container {
                        width: 100%;
                    }
                }

                .lwl-container h2 {
                    font-family: "Poppins Bold";
                    font-weight: 500;
                    font-size: 30px;
                    text-transform: uppercase;
                    color: #ffffff;
                }

                .lwl-container form {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .lwl-container form input {
                    width: 100%;
                    height: 50px;
                    padding: 0 10px;
                    border: solid 2px #ABB1CB;
                    border-radius: 10px;
                    background-color: transparent;
                    color: #ffffff;
                    font-size: 16px;
                }

                .lwl-container form input:hover,
                .lwl-container form input:focus {
                    border: solid 2px #ffffff;
                }

                .lwl-container form input::placeholder {
                    color: #ABB1CB;
                }

                .lwl-container form button {
                    width: 100%;
                    height: 50px;
                    border: none;
                    border-radius: 10px;
                    background-color: #ffffff;
                    color: #2D3B7D;
                    font-size: 16px;
                    text-transform: uppercase;
                    cursor: pointer;
                }

                .lwl-container p {
                    font-family: "Poppins Regular";
                    font-weight: 400;
                    font-size: 14px;
                    color: #ffffff;
                }

                .lwl-container .round-instructions {
                    font-family: "Poppins Regular";
                    font-weight: 400;
                    font-size: 14px;
                    color: #ffffff;
                }

                .empty {
                    font-size: 18px;
                    color: #ABB1CB;
                    padding: 250px 0;
                    text-align: center;
                }

                .empty h4 {
                    font-family: "Poppins Bold";
                    font-weight: 400;
                    font-size: 25px;
                    color: #ffffff;
                }

                .empty p {
                    font-family: "Poppins Regular";
                    font-weight: 400;
                    font-size: 18px;
                    color: #ffffff;
                }
            `}</style>
        </>
    );
};

export function getServerSideProps(context) {
    const cookies = parseCookies(context);
    let current_user = null;

    try {
        if (cookies?.current_user) {
            current_user = JSON.parse(cookies.current_user);
        }
    } catch (error) {
        console.error("Error parsing cookies:", error);
    }

    if (!current_user) {
        return {
            redirect: {
                destination: "/lwl/login",
                permanent: false,
            },
        };
    }

    return {
        props: { current_user },
    };
}

export default SubmitVideo;