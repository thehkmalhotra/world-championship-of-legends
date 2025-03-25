import Header from '@/components/Header'
import PlayerCard from '@/components/PlayerCard';
import TeamOwner from '@/components/TeamOwner';
import Head from 'next/head';
import React from 'react'
import 'swiper/css';

const WestIndiesChampions = ({ canonical_link, meta_title, meta_description, meta_keywords }) => {
    const players = [
        {
            "player_name": "Chris Gayle",
            "player_type": "Batsman",
            "player_jersey": "33",
            "player_player_metric_1": "70",
            "player_player_metric_2": "40",
            "player_dob": "21 Sep",
            "player_image": "/assets/images/players/west-indies-champions/chris-gayle.webp"
        },
        {
            "player_name": "Darren Sammy",
            "player_type": "Batsman",
            "player_jersey": "88",
            "player_metric_1": "33",
            "player_metric_2": "18",
            "player_dob": "20 Dec",
            "player_image": "/assets/images/players/west-indies-champions/darren-sammy.webp"
        },
        {
            "player_name": "Samuel Badree",
            "player_type": "Bowler",
            "player_jersey": "77",
            "player_metric_1": "1",
            "player_metric_2": "13",
            "player_dob": "9 Mar",
            "player_image": "/assets/images/players/west-indies-champions/samuel-badree.webp"
        },
        {
            "player_name": "Tino Best",
            "player_type": "Bowler",
            "player_jersey": "36",
            "player_metric_1": "2",
            "player_metric_2": "41",
            "player_dob": "26 Aug",
            "player_image": "/assets/images/players/west-indies-champions/tino-best.webp"
        },
        {
            "player_name": "Rayad Rayan",
            "player_type": "Bowler",
            "player_jersey": "",
            "player_metric_1": "3",
            "player_metric_2": "48",
            "player_dob": "8 Mar",
            "player_image": "/assets/images/players/west-indies-champions/rayad-rayan.webp"
        },
        {
            "player_name": "Jason Mohammed",
            "player_type": "Bowler",
            "player_jersey": "3",
            "player_metric_1": "2",
            "player_metric_2": "23",
            "player_dob": "23 Sep",
            "player_image": "/assets/images/players/west-indies-champions/jason-mohammed.webp"
        },
        {
            "player_name": "Navin Stewart",
            "player_type": "Bowler",
            "player_jersey": "25",
            "player_metric_1": "0",
            "player_metric_2": "18",
            "player_dob": "13 Jun",
            "player_image": "/assets/images/players/west-indies-champions/navin-stewart.webp"
        },
        {
            "player_name": "Ashley Nurse",
            "player_type": "Batsman",
            "player_jersey": "5",
            "player_metric_1": "70",
            "player_metric_2": "36",
            "player_dob": "22 Dec",
            "player_image": "/assets/images/players/west-indies-champions/ashley-nurse.webp"
        },
        {
            "player_name": "Dwayne Smith",
            "player_type": "Batsman",
            "player_jersey": "50",
            "player_metric_1": "65",
            "player_metric_2": "46",
            "player_dob": "12 Apr",
            "player_image": "/assets/images/players/west-indies-champions/dwayne-smith.webp"
        },
        {
            "player_name": "Suleiman Benn",
            "player_type": "Bowler",
            "player_jersey": "62",
            "player_metric_1": "2",
            "player_metric_2": "26",
            "player_dob": "22 Jul",
            "player_image": "/assets/images/players/west-indies-champions/suleiman-benn.webp"
        },
        {
            "player_name": "Chadwick Walton",
            "player_type": "Batsman",
            "player_jersey": "59",
            "player_metric_1": "85",
            "player_metric_2": "42",
            "player_dob": "3 Jul",
            "player_image": "/assets/images/players/west-indies-champions/chadwick-walton.webp"
        },
        {
            "player_name": "Jerome Taylor",
            "player_type": "Bowler",
            "player_jersey": "75",
            "player_metric_1": "1",
            "player_metric_2": "27",
            "player_dob": "22 Jun",
            "player_image": "/assets/images/players/west-indies-champions/jerome-taylor.webp"
        },
        {
            "player_name": "Fidel Edwards",
            "player_type": "Bowler",
            "player_jersey": "20",
            "player_metric_1": "3",
            "player_metric_2": "24",
            "player_dob": "6 Feb",
            "player_image": "/assets/images/players/west-indies-champions/fidel-edwards.webp"
        },
        {
            "player_name": "Kirk Edwards",
            "player_type": "Batsman",
            "player_jersey": "30",
            "player_metric_1": "12",
            "player_metric_2": "9",
            "player_dob": "3 Nov",
            "player_image": "/assets/images/players/west-indies-champions/kirk-edwards.webp"
        }
    ];

    return (
        <>
            <Head>
                <title>{meta_title}</title>
                <link rel="canonical" href={canonical_link} />
                <meta name="description" content={meta_description} />
                <meta name="keywords" content={meta_keywords} />
            </Head>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="teams-container">
                        <div className="team-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>Teams &gt;</li>
                                <li>West Indies Champions</li>
                            </ul>
                            <div className="page-headers">
                                <h1>West Indies Champions & Cricket Legends - WCL 2025 West Indies Team</h1>
                            </div>
                        </div>
                        <div className="team-owners-container">
                            <div className="team-owners">
                                <div className="team-owner">
                                    <TeamOwner name="Mr.Ajay Sethi" image="/assets/images/team-owners/ajay-sethi.webp" about="The proud owner of the West Indies Champions Cricket Team, is the Chairman of Channel 2 Group Corporation. While he is driven by the thrill of running businesses and emerging victoriously as a market leader, he also believes deeply that his remarkable success was destined, making him the humble yet inspiring figure he is today. The tycoon is the quintessential picture of rising in the world through a keen eye for trends and using one's wits to transform an opportunity into a triumph." />
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
                    font-family: "Poppins Regular";
                    font-size: 16px;
                    text-transform: uppercase;
                }

                .page-headers {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .page-headers h1 {
                    color: #ffffff;
                    font-family: "Poppins Semibold";
                    font-size: 35px;
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
                    grid-template-columns: repeat(1, 1fr);
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
                    font-family: "Poppins Bold";
                    font-weight: 500;
                    font-size: 30px;
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

export async function getServerSideProps({ req }) {
  return {
      props: {
          canonical_link: `https://${req.headers.host}${req.url}`,
          meta_title: "West Indies Champions | West Indies Cricket Legends | WCL 2025 - WCL T20",
          meta_description: "See West Indies Champions & West Indies cricket legends in WCL 2025! Iconic WI stars shine in the World Championship. Check it out!",
          meta_keywords: "West Indies Champions, West Indies  Cricket Legends, West Indies  Legends,  Edgbaston, Northampton, WCL T20"
      }
  }
}

export default WestIndiesChampions