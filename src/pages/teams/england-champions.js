import Header from '@/components/Header'
import PlayerCard from '@/components/PlayerCard';
import TeamOwner from '@/components/TeamOwner';
import React from 'react'
import 'swiper/css';

const EnglandChampions = () => {
    const players = [
        {
            "player_name": "Kevin Pietersen",
            "player_type": "Batsman",
            "player_jersey": "24",
            "player_metric_1": "41",
            "player_metric_2": "19",
            "player_dob": "27 Jun",
            "player_image": "/assets/images/players/england-champions/kevin-pietersen.webp"
        },
        {
            "player_name": "Ravi Bopara",
            "player_type": "Batsman",
            "player_jersey": "42",
            "player_metric_1": "53",
            "player_metric_2": "30",
            "player_dob": "4 May",
            "player_image": "/assets/images/players/england-champions/ravi-bopara.webp"
        },
        {
            "player_name": "Ian Bell",
            "player_type": "Batsman",
            "player_jersey": "7",
            "player_metric_1": "97",
            "player_metric_2": "64",
            "player_dob": "11 April",
            "player_image": "/assets/images/players/england-champions/ian-bell.webp"
        },
        {
            "player_name": "Samit Patel",
            "player_type": "Batsman",
            "player_jersey": "21",
            "player_metric_1": "51",
            "player_metric_2": "25",
            "player_dob": "30 Nov",
            "player_image": "/assets/images/players/england-champions/samit-patel.webp"
        },
        {
            "player_name": "Owais Shah",
            "player_type": "Batsman",
            "player_jersey": "",
            "player_metric_1": "23",
            "player_metric_2": "9",
            "player_dob": "22 Oct",
            "player_image": "/assets/images/players/england-champions/owais-shah.webp"
        },
        {
            "player_name": "Mustard Philip",
            "player_type": "Batsman",
            "player_jersey": "19",
            "player_metric_1": "84",
            "player_metric_2": "35",
            "player_dob": "8 Oct",
            "player_image": "/assets/images/players/england-champions/mustard-philip.webp"
        },
        {
            "player_name": "Sajid Mahmood",
            "player_type": "Bowler",
            "player_jersey": "19",
            "player_metric_1": "0",
            "player_metric_2": "0",
            "player_dob": "21 Dec",
            "player_image": "/assets/images/players/england-champions/sajid-mahmood.webp"
        },
        {
            "player_name": "Chris Schofield",
            "player_type": "Bowler",
            "player_jersey": "30",
            "player_metric_1": "4",
            "player_metric_2": "33",
            "player_dob": "6 Oct",
            "player_image": "/assets/images/players/england-champions/chris-schofield.webp"
        },
        {
            "player_name": "Ajmal Shahzad",
            "player_type": "Bowler",
            "player_jersey": "4",
            "player_metric_1": "2",
            "player_metric_2": "17",
            "player_dob": "27 Jul",
            "player_image": "/assets/images/players/england-champions/ajmal-shahzad.webp"
        },
        {
            "player_name": "Ryan Sidebottom",
            "player_type": "Bowler",
            "player_jersey": "11",
            "player_metric_1": "0",
            "player_metric_2": "16",
            "player_dob": "15 Jan",
            "player_image": "/assets/images/players/england-champions/ryan-sidebottom.webp"
        },
        {
            "player_name": "Usman Afzaal",
            "player_type": "Bowler",
            "player_jersey": "3",
            "player_metric_1": "1",
            "player_metric_2": "30",
            "player_dob": "9 Jun",
            "player_image": "/assets/images/players/england-champions/usman-afzaal.webp"
        },
        {
            "player_name": "Stuart Meaker",
            "player_type": "Bowler",
            "player_jersey": "18",
            "player_metric_1": "0",
            "player_metric_2": "11",
            "player_dob": "21 Jan",
            "player_image": "/assets/images/players/england-champions/stuart-meaker.webp"
        },
        {
            "player_name": "Kevin O’Brien",
            "player_type": "Batsman",
            "player_jersey": "22",
            "player_metric_1": "0",
            "player_metric_2": "0",
            "player_dob": "4 Mar",
            "player_image": "/assets/images/players/england-champions/kevin-obrien.webp"
        },
        {
            "player_name": "Darren Maddy",
            "player_type": "Batsman",
            "player_jersey": "",
            "player_metric_1": "0",
            "player_metric_2": "19",
            "player_dob": "23 May",
            "player_image": "/assets/images/players/england-champions/darren-maddy.webp"
        },
        {
            "player_name": "Alistair Brown",
            "player_type": "Batsman",
            "player_jersey": "23",
            "player_metric_1": "26",
            "player_metric_2": "20",
            "player_dob": "11 Feb",
            "player_image": "/assets/images/players/england-champions/alistair-brown.webp"
        }
    ];

    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="teams-container">
                        <div className="team-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>Teams &gt;</li>
                                <li>England Champions</li>
                            </ul>
                            <div className="page-headers">
                                <h1>England Champions</h1>
                            </div>
                        </div>
                        <div className="team-owners-container">
                            <div className="team-owners">
                                <div className="team-owner">
                                    <TeamOwner name="Mr. Praveen Sharma" image="/assets/images/team-owners/praveen-sharma.webp" about="Praveen Sharma is Meteora's Founder and Chief Executive Officer. As the leader of a diverse team, he focuses on business management and strategy to support the projects developed by the firm. Praveen has had the opportunity to be a part of the Big 4 firms in senior financial roles and has also been on the client-side as well as an investor and owner's representative in the property markets." />
                                </div>
                                <div className="team-owner">
                                    <TeamOwner name="Mr. Omar Al Omour" image="/assets/images/team-owners/omar-al-omar.webp" about="Omar Al Omour has over 20 years of experience in real estate construction and is considered one of the top qualified engineering and construction professional, having successfully completed projects in the United Arab Emirates, India, Tanzania, and Italy." />
                                </div>
                            </div>
                        </div>
                        <div className="team-squad">
                            <h2>Squad 2k24</h2>
                            <div className="players-grid">
                                {players.map((player, index) => (
                                    <PlayerCard
                                        key={index}
                                        name={player.player_name}
                                        type={player.player_type}
                                        jersey={player.player_jersey}
                                        dob={player.player_dob}
                                        metric1={player.player_metric_1}
                                        metric2={player.player_metric_2}
                                        image={player.player_image}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
            .teams-container {
                width: 100%;
                max-width: 1280px;
                padding: 0 20px;
                margin: auto;
                display: flex;
                flex-direction: column;
                margin-top: 80px;
            }

            .team-header-container {
                width: max-content;
                margin: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            .team-header-container ul {
                display: flex;
                gap: 5px;
                list-style: none;
            }

            .team-header-container ul li {
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
            }

            .page-headers h1 {
                color: #ffffff;
                font-family: "Formula Condensed Bold";
                font-weight: 500;
                font-size: 45px;
                letter-spacing: .02em;
                text-transform: uppercase;
            }

            .team-owners-container {
                width: 100%;
                max-width: 1280px;
                margin: auto;
                display: flex;
                flex-direction: column;
                gap: 100px;
                margin-top: 80px;
            }

            .team-owners {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 50px;
                background-color: #27336D;
                padding: 15px;
                border-radius: 20px;
            }

            @media screen and (max-width: 1023px) {
            .team-owners {
                grid-template-columns: repeat(1, 1fr);
            }
            }

            .team-squad {
                width: 100%;
                max-width: 1280px;
                margin: auto;
                display: flex;
                flex-direction: column;
                gap: 25px;
                margin-top: 80px;
            }

            .team-squad h2 {
                color: #ffffff;
                font-family: "Formula Condensed Bold";
                font-weight: 500;
                font-size: 30px;
                letter-spacing: .02em;
                text-transform: uppercase;
            }

            .players-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
            }

            @media screen and (max-width: 1023px) {
            .players-grid {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                gap: 10px;
            }
            }
      `}</style>
        </>
    )
}

export default EnglandChampions