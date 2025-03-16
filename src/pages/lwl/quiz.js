import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React, { useEffect, useState } from 'react';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

const Quiz = ({ current_user }) => {
    const [user, setUser] = useState(current_user);
    const [timeLeft, setTimeLeft] = useState(0);
    const [quiz, setQuiz] = useState(null);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const access_token = current_user?.token || "";

    useEffect(() => {
        if (!access_token) return;

        const getQuiz = async () => {
            try {
                const response = await fetch("/api/lwl/quiz", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token: access_token })
                });

                if (!response.ok) throw new Error("Failed to fetch quiz");

                const result = await response.json();

                if (result.statusCode === 200) {
                    setTimeLeft(result.data.timeRemaining);
                    setQuiz(result.data);
                } else {
                    setQuiz(null);
                }
            } catch (error) {
                console.error("Error fetching quiz:", error.message);
            }
        };

        getQuiz();
    }, [current_user?.token]);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prevTime => Math.max(0, prevTime - 1));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    useEffect(() => {
        if (timeLeft === 0 && quiz) {
            handleQuizSubmit();
        }
    }, [timeLeft, quiz]);

    function handleSelectAnswers(questionId, answerId) {
        setSelectedAnswers(prev => {
            const updatedAnswers = prev.filter(answer => answer.questionId !== questionId);
            return [...updatedAnswers, { questionId, answerId }];
        });
    }

    useEffect(()=>{
        console.log(user);
        
    },[])

    async function handleQuizSubmit() {
        if (!quiz?.quizId) return;

        try {
            const response = await fetch("/api/lwl/submit-quiz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token: access_token,
                    quiz_id: quiz.quizId,
                    answers: selectedAnswers
                })
            });

            const result = await response.json();
            destroyCookie(null, "current_user", { path: "/" });
            setCookie(null, "current_user", JSON.stringify(result.data.user));
            setUser(parseCookies()?.current_user ? JSON.parse(parseCookies().current_user) : null);

            smartech('contact', 6, {
                'pk^email': result.data.user.email,
                'mobile': result.data.user.contactNumber,
                'SCORE': result.data.user.quizProgress.round1?.score || 0,
                'RESULT': result.data.user.quizProgress.round1?.status || "N/A"
            });

            smartech('identify', result.data.user.email);
            smartech('dispatch', 'quiz_submitted', {
                'score': result.data.user.quizProgress.round1?.score || 0,
                'result': result.data.user.quizProgress.round1?.status || "N/A"
            });

            console.log("Quiz submitted successfully:", result);
        } catch (error) {
            console.error("Error submitting quiz:", error.message);
        }
    }

    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="lwl-container">
                        {
                            user?.user?.quizProgress?.round1?.status === "locked" ?
                                <>
                                    <div className="lwl-header-container">
                                        <div className="time-loader">
                                            <div></div>
                                        </div>
                                        <p>⌛ {Math.floor(timeLeft / 60)} Minutes & {Math.floor(timeLeft % 60)} Seconds Left</p>
                                    </div>
                                    <div className="quiz-container">
                                        <form>
                                            {
                                                quiz?.questions?.map((question, index) => (
                                                    <div className="question" key={question._id}>
                                                        <h4>Q{index + 1}. {question.question}</h4>
                                                        <div className="options">
                                                            {
                                                                question?.options?.map((option) => (
                                                                    <label key={option._id}>
                                                                        <input
                                                                            type="radio"
                                                                            name={question._id}
                                                                            value={option._id}
                                                                            onChange={() => handleSelectAnswers(question._id, option._id)}
                                                                        />
                                                                        <p>{option.text}</p>
                                                                    </label>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </form>
                                    </div>
                                    <div className="lwl-footer-container">
                                        <button className="submit" onClick={handleQuizSubmit}>Submit</button>
                                    </div>
                                </>
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
                    padding: 0 20px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                    margin-top: 80px;
                }

                @media screen and (max-width: 767px){
                    .lwl-container {
                        width: 100%;
                    }
                }

                .lwl-header-container {
                    width: 100%;
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
                    width: ${(timeLeft / 900) * 100}%;
                    height: 100%;
                    border-radius: 100px;
                    background-color: #ffffff;
                }

                .lwl-header-container p {
                    font-family: "Poppins Regular";
                    font-size: 14px;
                    font-weight: 400;
                    text-transform: uppercase;
                    color: #ffffff;
                }

                .quiz-container form {
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                }
                
                .quiz-container form input {
                    display: none;
                }

                .quiz-container form input:checked + p {
                    color: #ffffff;
                }

                .question h4 {
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 20px;
                    text-transform: uppercase;
                    color: #ffffff;
                }

                .quiz-container form .options {
                    display: flex;
                    gap: 30px;
                    margin-top: 20px;
                }

                .quiz-container form .options label {
                    width: max-content;
                }

                .quiz-container form .options p {
                    font-family: "Poppins Regular";
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

                .lwl-footer-container button.submit {
                    width: 100%;
                    height: 50px;
                    padding: 0 10px;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    background-color: #DAB072;
                    color: #2D3B7D;
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 16px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
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
                    padding: 250px 0;
                }

                .empty ul {
                    list-style: none;
                }
            `}</style>
        </>
    )
}

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
        props: { current_user },
    };
}

export default Quiz;