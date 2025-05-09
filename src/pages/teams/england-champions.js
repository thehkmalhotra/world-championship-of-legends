import Footer from '@/components/Footer';
import Header from '@/components/Header'
import PlayerCard from '@/components/PlayerCard';
import TeamOwner from '@/components/TeamOwner';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react'
import 'swiper/css';

const EnglandChampions = ({ canonical_link, meta_title, meta_description, meta_keywords, page_content }) => {
    const [season, setSeason] = useState(2);
    const players = {
        season1: [
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
                "player_image": "/assets/images/players/england-champions/ravi-bopara.webp"
            },
            {
                "player_name": "Ian Bell",
                "player_type": "Batsman",
                "player_jersey": "7",
                "player_image": "/assets/images/players/england-champions/ian-bell.webp"
            },
            {
                "player_name": "Samit Patel",
                "player_type": "Batsman",
                "player_jersey": "21",
                "player_image": "/assets/images/players/england-champions/samit-patel.webp"
            },
            {
                "player_name": "Owais Shah",
                "player_type": "Batsman",
                "player_jersey": "",
                "player_image": "/assets/images/players/england-champions/owais-shah.webp"
            },
            {
                "player_name": "Phil Mustard",
                "player_type": "Batsman",
                "player_jersey": "52",
                "player_image": "/assets/images/players/england-champions/phil-mustard.webp"
            },
            {
                "player_name": "Sajid Mahmood",
                "player_type": "Bowler",
                "player_jersey": "19",
                "player_image": "/assets/images/players/england-champions/sajid-mahmood.webp"
            },
            {
                "player_name": "Chris Schofield",
                "player_type": "Bowler",
                "player_jersey": "30",
                "player_image": "/assets/images/players/england-champions/chris-schofield.webp"
            },
            {
                "player_name": "Ajmal Shahzad",
                "player_type": "Bowler",
                "player_jersey": "4",
                "player_image": "/assets/images/players/england-champions/ajmal-shahzad.webp"
            },
            {
                "player_name": "Ryan Sidebottom",
                "player_type": "Bowler",
                "player_jersey": "11",
                "player_image": "/assets/images/players/england-champions/ryan-sidebottom.webp"
            },
            {
                "player_name": "Usman Afzaal",
                "player_type": "Bowler",
                "player_jersey": "3",
                "player_image": "/assets/images/players/england-champions/usman-afzaal.webp"
            },
            {
                "player_name": "Stuart Meaker",
                "player_type": "Bowler",
                "player_jersey": "18",
                "player_image": "/assets/images/players/england-champions/stuart-meaker.webp"
            },
            {
                "player_name": "Kevin O’Brien",
                "player_type": "Batsman",
                "player_jersey": "22",
                "player_image": "/assets/images/players/england-champions/kevin-obrien.webp"
            },
            {
                "player_name": "Darren Maddy",
                "player_type": "Batsman",
                "player_jersey": "",
                "player_image": "/assets/images/players/england-champions/darren-maddy.webp"
            },
            {
                "player_name": "Alistair Brown",
                "player_type": "Batsman",
                "player_jersey": "23",
                "player_image": "/assets/images/players/england-champions/alistair-brown.webp"
            }
        ],
        season2: [
            {
                "player_name": "Sir Alastair Cook",
                "player_type": "Batsman",
                "player_jersey": "26",
                "player_image": "/assets/images/players/england-champions/alastair-cook.webp",
                "player_about": "One of England’s greatest Test captains, Alastair Cook brings his legendary batting prowess to WCL. Known for his resilience and impeccable technique, he remains a cornerstone of any squad he plays for."
            },
            {
                "player_name": "Moeen Ali",
                "player_type": "All Rounder",
                "player_jersey": "18",
                "player_image": "/assets/images/players/england-champions/moeen-ali.webp",
                "player_about": "A dynamic all-rounder, Moeen Ali's explosive batting and sharp off-spin make him a key asset in WCL. His ability to turn games around with both bat and ball adds immense value to the tournament."
            },
            {
                "player_name": "Eoin Morgan",
                "player_type": "Batsman",
                "player_jersey": "16",
                "player_image": "/assets/images/players/england-champions/eoin-morgan.webp",
                "player_about": "The mastermind behind England’s white-ball revolution, Eoin Morgan’s leadership and power-hitting are set to electrify WCL. His experience in high-pressure situations makes him a game-changer."
            },
            {
                "player_name": "Ravi Bopara",
                "player_type": "All Rounder",
                "player_jersey": "42",
                "player_image": "/assets/images/players/england-champions/ravi-bopara.webp",
                "player_about": "A versatile all-rounder, Ravi Bopara's consistency with the bat and ability to chip in with crucial wickets make him a player to watch in WCL. His adaptability across formats is a major asset."
            },
            {
                "player_name": "Samit Patel",
                "player_type": "All Rounder",
                "player_jersey": "21",
                "player_image": "/assets/images/players/england-champions/samit-patel.webp",
                "player_about": "A seasoned all-rounder, Samit Patel’s ability to anchor innings and provide key breakthroughs with his spin bowling adds depth to WCL. His experience in global leagues makes him a valuable addition."
            },
            {
                "player_name": "Phil Mustard",
                "player_type": "Wicket Keeper",
                "player_jersey": "52",
                "player_image": "/assets/images/players/england-champions/phil-mustard.webp",
                "player_about": "A hard-hitting wicketkeeper-batsman, Phil Mustard’s aggressive style of play is set to entertain WCL fans. His quick glovework behind the stumps further strengthens his impact on the game."
            },
            {
                "player_name": "Liam Plunkett",
                "player_type": "Bowler",
                "player_jersey": "29",
                "player_image": "/assets/images/players/england-champions/liam-plunkett.webp",
                "player_about": "A genuine fast bowler with the ability to generate bounce and pace, Liam Plunkett’s wicket-taking abilities make him a threat in WCL. His contributions in crunch moments define his reputation."
            },
            {
                "player_name": "Chris Tremlett",
                "player_type": "Bowler",
                "player_jersey": "33",
                "player_image": "/assets/images/players/england-champions/chris-tremplett.webp",
                "player_about": "Known for his intimidating height and raw pace, Chris Tremlett is a force to reckon with in WCL. His ability to extract bounce and trouble batsmen will be crucial in high-stakes encounters."
            },
            {
                "player_name": "Ajmal Shahzad",
                "player_type": "Bowler",
                "player_jersey": "13",
                "player_image": "/assets/images/players/england-champions/ajmal-shahzad.webp",
                "player_about": "A skilled fast bowler, Ajmal Shahzad brings energy and aggression to WCL. His ability to swing the ball and deliver under pressure makes him a dangerous bowler in the shortest formats."
            },
            {
                "player_name": "Ian Bell",
                "player_type": "Batsman",
                "player_jersey": "7",
                "player_image": "/assets/images/players/england-champions/ian-bell.webp",
                "player_about": "A stylish batsman with a classical technique, Ian Bell’s grace at the crease is a treat for WCL fans. His experience and ability to build big innings add immense value to any team."
            },
            {
                "player_name": "Tim Ambrose",
                "player_type": "Wicket Keeper",
                "player_jersey": "12",
                "player_image": "/assets/images/players/england-champions/tim-ambrose.webp",
                "player_about": "A reliable wicketkeeper-batsman, Tim Ambrose’s steady hands behind the stumps and his ability to score crucial runs lower down the order make him a vital component of WCL."
            }
        ]
    }
    const currentSquad = players[`season${season}`];

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
                                <li>England Champions</li>
                            </ul>
                            <div className="page-headers">
                                <div>England Champions</div>
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
                            <h2>England Champions Squad - Team Overview</h2>
                            <div className="season-switcher">
                                <select onChange={(event) => setSeason(event.target.value)}>
                                    <option value="1">Season 1</option>
                                    <option value="2" selected>Season 2</option>
                                </select>
                            </div>
                           <div className="players-grid">
                              {currentSquad.map((player, index) => {
                                const isEoinMorgan = player.player_name === "Eoin Morgan";
                            
                                const card = (
                                  <PlayerCard
                                    key={index}
                                    name={player.player_name}
                                    type={player.player_type}
                                    jersey={player.player_jersey}
                                    about={player.player_about}
                                    image={player.player_image}
                                  />
                                );
                            
                                return isEoinMorgan ? (
                                  <Link href="/eoin-morgan" key={index}>
                                    <a style={{ textDecoration: "none" }}>{card}</a>
                                  </Link>
                                ) : (
                                  <React.Fragment key={index}>{card}</React.Fragment>
                                );
                              })}
                        </div>
                        <div className="team-fixtures">
                            <h2>England Champions Fixtures - WCL T20</h2>
                            <Link href="https://edgbaston.com/wcl" legacyBehavior><a><img src="/assets/images/fixtures/england-fixture.webp" /></a></Link>
                        </div>
                    </div>
                </div>
                <Footer pagecontent={page_content} />
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
                width: 100%;
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
                font-size: 14px;
                text-transform: uppercase;
            }

            .page-headers {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .page-headers div {
                color: #ffffff;
                font-family: "Poppins Semibold";
                font-size: 25px;
                text-transform: uppercase;
                text-align: center;
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
                font-family: "Poppins Bold";
                font-weight: 500;
                font-size: 30px;
                text-transform: uppercase;
            }

            .season-switcher select {
                -webkit-appearance: none;
                background-color: transparent;
                color: #ffffff;
                font-family: "Poppins Semibold";
                font-size: 14px;
                text-transform: uppercase;
                border-bottom: solid 1px #ffffff;
                outline: none;
                border-radius: 0;
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

            .team-fixtures {
                width: 100%;
                margin-top: 80px;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .team-fixtures h2 {
                color: #ffffff;
                font-family: "Poppins Bold";
                font-weight: 500;
                font-size: 30px;
                text-transform: uppercase;
            }

            .team-fixtures img {
                width: 100%;
                border-radius: 20px;
                transition: all .5s;
            }

            .team-fixtures img:hover {
                transform: scale(.99);
            }
      `}</style>
        </>
    )
}

export async function getServerSideProps({ req }) {
    return {
        props: {
            canonical_link: `https://${req.headers.host}${req.url}`,
            meta_title: "England Champions | England Cricket Legends | WCL 2025 - WCL T20",
            meta_description: "Discover England Champions & England cricket legends in WCL 2025! See England’s finest at Edgbaston and Northampton in action. Explore now!",
            meta_keywords: "England Champions, England Cricket Legends, England Legends, Edgbaston, Northampton, WCL T20",
            page_content: `<h1>England Champions & Cricket Legends – WCL 2025 Team</h1>
                <p>England Champions represent the birthplace of cricket, carrying the heritage and pride of English cricket into <span class="link" href="/">WCL 2025</span>. This team of England Cricket Legends showcases classical cricketing technique merged with modern innovation and competitive spirit. Playing with structured discipline and tactical depth, the England Champions bring historical gravitas and professionalism to the <span class="link" href="/">World Championship of Legends Cricket</span>.
                They embody the fighting spirit of England’s past teams – never backing down and excelling under pressure – providing a strong backbone to the tournament. With the home advantage of playing in front of English crowds at iconic venues, the England Champions are poised to be a top contender and a pillar of the league.</p>
                <h2>Upcoming England Champions Matches in 2025:</h2>
                <ul>
                    <li><strong>18 July:</strong> England Champions vs <span class="link" href="/teams/pakistan-champions">Pakistan Champions</span></li>
                    <li><strong>19 July:</strong> England Champions vs <span class="link" href="/teams/australia-champions">Australia Champions</span></li>
                    <li><strong>22 July:</strong> England Champions vs <span class="link" href="/teams/west-indies-champions">West Indies Champions</span></li>
                    <li><strong>24 July:</strong> England Champions vs <span class="link" href="/teams/south-africa-champions">South Africa Champions</span></li>
                    <li><strong>27 July:</strong> England Champions vs <span class="link" href="/teams/india-champions">India Champions</span></li>
            </ul>`
        }
    }
}

export default EnglandChampions
