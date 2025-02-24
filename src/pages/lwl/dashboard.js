import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { destroyCookie, parseCookies } from 'nookies';
import React from 'react';

const Dashboard = (props) => {
    const router = useRouter();
    const current_user = props;

    function handleStartQuiz() {
        const interval = setInterval(() => {
            if (typeof smartech !== "undefined") {
                smartech('identify', current_user.user.email);
                smartech('dispatch', 'quiz_start', {
                    'email': current_user.user.email
                });
                clearInterval(interval);
            }
        }, 500);
    }

    function handleLogout(){
        destroyCookie(null, "current_user", {path: "/"});
        router.push("/lwl");
    }

    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="dashboard-container">
                        <div className="dashboard-inner-container">
                            <div className="dashboard-header">
                                <h6>{current_user.user.name}</h6>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                            {
                                current_user?.user?.quizProgress?.round1?.status === "locked" ?
                                    <div className="container">
                                        <h4>Round 1 : Quiz</h4>
                                        <div className="content">
                                            Before You Start the Quiz – Please Read Carefully
                                            <ul>
                                                <li>- Time Limit: You have 15 minutes to complete the quiz.</li>
                                                <li>- Auto-Submission: If you do not submit within 15 minutes, the quiz will be automatically submitted with your attempted answers.</li>
                                                <li>- No Retakes: Once submitted (manually or automatically), you cannot retake the quiz.</li>
                                                <li>- Device & Network: Ensure your device is charged and you have a stable internet connection to avoid any disruptions.</li>
                                            </ul>
                                            Make sure you’re ready before starting. Good luck!
                                        </div>
                                        <Link href="/lwl/quiz" legacyBehavior onClick={handleStartQuiz}><a><button>Start Quiz</button></a></Link>
                                    </div>
                                    :
                                    <div className="empty">
                                        <h4>Congratulations on Completing Round 1! 🎉</h4>
                                        <div className="content">
                                            Thank you for participating in Round 1 of Live with the Legends (LWL)!
                                            <ul>
                                                <p>📢 What’s Next?</p>
                                                <li>- Round 1 Results Announcement: Results will be declared on March 16 via email. Keep an eye on your inbox—you will receive an email from us with your result.</li>
                                                <li>- Round 2 Details: If you qualify, you will move on to Round 2</li>
                                            </ul>
                                            Stay tuned for further instructions in your email!. Good luck!
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
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
                    
                .dashboard-container {
                    width: 100%;
                    max-width: 1280px;
                    display: flex;
                    flex-direction: column;
                    gap: 200px;
                    padding: 200px 2rem;
                }

                .dashboard-inner-container {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    gap: 100px;
                    margin: auto;
                }

                @media screen and (max-width: 767px){
                    .dashboard-inner-container {
                        width: 100%;
                    }
                }

                .dashboard-header {
                    width: 100%;
                    max-width: 1280px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .dashboard-header h6 {
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 16px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    color: #ffffff;
                }

                .dashboard-header button {
                    width: max-content;
                    padding: 0 20px;
                    background-color: transparent;
                    color: #ffffff;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 15px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    text-align: center;
                    text-decoration-line: underline;
                    cursor: pointer;
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .container h4 {
                    font-family: "Poppins Bold";
                    font-weight: 500;
                    font-size: 30px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    color: #ffffff;
                }

                .container .content {
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 18px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    color: #ABB1CB;
                }

                .container .content ul {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    padding: 20px 0;
                    list-style: none;
                }

                .container button {
                    width: max-content;
                    height: 40px;
                    padding: 0 20px;
                    margin-top: 20px;
                    background-color: #ffffff;
                    color: #2D3B7D;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 15px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    text-align: center;
                    cursor: pointer;
                }

                .empty h4 {
                    font-family: "Poppins Bold";
                    font-weight: 500;
                    font-size: 30px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    color: #ffffff;
                }

                .empty {
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 18px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                    color: #ABB1CB;
                }

                .empty ul {
                    list-style: none;
                }
            `}</style>
        </>
    );
};

export function getServerSideProps(context) {
    const cookies = parseCookies(context);
    const current_user = cookies?.current_user ? JSON.parse(cookies.current_user) : null;

    if (!current_user) {
        return {
            redirect: {
                destination: "/lwl/login",
                permanent: false,
            },
        };
    }

    return {
        props: current_user,
    };
}

export default Dashboard;