import Footer from '@/components/Footer';
import Header from '@/components/Header'
import PlayerCard from '@/components/PlayerCard';
import TeamOwner from '@/components/TeamOwner';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import 'swiper/css';

const PakistanChampions = ({ canonical_link, meta_title, meta_description, meta_keywords, page_content }) => {
    const players = [
        {
            "player_name": "Younis Khan",
            "player_type": "Batsman",
            "player_jersey": "75",
            "player_metric_1": "65",
            "player_metric_2": "45",
            "player_dob": "29 Nov",
            "player_image": "/assets/images/players/pakistan-champions/younis-khan.webp"
        },
        {
            "player_name": "Shahid Afridi",
            "player_type": "Batsman",
            "player_jersey": "10",
            "player_metric_1": "20",
            "player_metric_2": "10",
            "player_dob": "1 Mar",
            "player_image": "/assets/images/players/pakistan-champions/shahid-afridi.webp"
        },
        {
            "player_name": "Misbah-ul-Haq",
            "player_type": "Batsman",
            "player_jersey": "22",
            "player_metric_1": "18",
            "player_metric_2": "15",
            "player_dob": "28 May",
            "player_image": "/assets/images/players/pakistan-champions/misbah-ul-haq.webp"
        },
        {
            "player_name": "Sharjeel Khan",
            "player_type": "Batsman",
            "player_jersey": "98",
            "player_metric_1": "72",
            "player_metric_2": "30",
            "player_dob": "14 Aug",
            "player_image": "/assets/images/players/pakistan-champions/sharjeel-khan.webp"
        },
        {
            "player_name": "Abdul Razzaq",
            "player_type": "Bowler",
            "player_jersey": "12",
            "player_metric_1": "2",
            "player_metric_2": "22",
            "player_dob": "2 Dec",
            "player_image": "/assets/images/players/pakistan-champions/abdul-razzaq.webp"
        },
        {
            "player_name": "Kamran Akmal",
            "player_type": "Batsman",
            "player_jersey": "",
            "player_metric_1": "77",
            "player_metric_2": "40",
            "player_dob": "26 May",
            "player_image": "/assets/images/players/pakistan-champions/kamran-akmal.webp"
        },
        {
            "player_name": "Sohaib Maqsood",
            "player_type": "Batsman",
            "player_jersey": "92",
            "player_metric_1": "64",
            "player_metric_2": "44",
            "player_dob": "15 Apr",
            "player_image": "/assets/images/players/pakistan-champions/sohaib-maqsood.webp"
        },
        {
            "player_name": "Shoaib Malik",
            "player_type": "Batsman",
            "player_jersey": "18",
            "player_metric_1": "51",
            "player_metric_2": "26",
            "player_dob": "1 Feb",
            "player_image": "/assets/images/players/pakistan-champions/shoaib-malik.webp"
        },
        {
            "player_name": "Saeed Ajmal",
            "player_type": "Bowler",
            "player_jersey": "",
            "player_metric_1": "3",
            "player_metric_2": "12",
            "player_dob": "20 Dec",
            "player_image": "/assets/images/players/pakistan-champions/saeed-ajmal.webp"
        },
        {
            "player_name": "Sohail Tanvir",
            "player_type": "Bowler",
            "player_jersey": "14",
            "player_metric_1": "1",
            "player_metric_2": "18",
            "player_dob": "12 Dec",
            "player_image": "/assets/images/players/pakistan-champions/sohail-tanvir.webp"
        },
        {
            "player_name": "Wahab Riaz",
            "player_type": "Bowler",
            "player_jersey": "47",
            "player_metric_1": "2",
            "player_metric_2": "35",
            "player_dob": "28 Jun",
            "player_image": "/assets/images/players/pakistan-champions/wahab-riaz.webp"
        },
        {
            "player_name": "Abdul Rehman",
            "player_type": "Bowler",
            "player_jersey": "",
            "player_metric_1": "0",
            "player_metric_2": "0",
            "player_dob": "1 Mar",
            "player_image": "/assets/images/players/pakistan-champions/abdul-rehman.webp"
        },
        {
            "player_name": "Sohail Khan",
            "player_type": "Bowler",
            "player_jersey": "",
            "player_metric_1": "4",
            "player_metric_2": "21",
            "player_dob": "6 Mar",
            "player_image": "/assets/images/players/pakistan-champions/sohail-khan.webp"
        },
        {
            "player_name": "Aamer Yamin",
            "player_type": "Batsman",
            "player_jersey": "34",
            "player_metric_1": "40",
            "player_metric_2": "18",
            "player_dob": "26 Jun",
            "player_image": "/assets/images/players/pakistan-champions/aamer-yamin.webp"
        },
        {
            "player_name": "Taufeeq Umar",
            "player_type": "Batsman",
            "player_jersey": "",
            "player_metric_1": "0",
            "player_metric_2": "0",
            "player_dob": "20 Jun",
            "player_image": "/assets/images/players/pakistan-champions/taufeeq-umar.webp"
        },
        {
            "player_name": "Yasir Arafat",
            "player_type": "Bowler",
            "player_jersey": "27",
            "player_metric_1": "0",
            "player_metric_2": "8",
            "player_dob": "12 Mar",
            "player_image": "/assets/images/players/pakistan-champions/yasir-arafat.webp"
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
                                <li>Pakistan Champions</li>
                            </ul>
                            <div className="page-headers">
                                <div>Pakistan Champions</div>
                            </div>
                        </div>
                        <div className="team-owners-container">
                            <div className="team-owners">
                                <div className="team-owner">
                                    <TeamOwner name="Mr. Kamil Khan" image="/assets/images/team-owners/kamil-khan.webp" about="Mr. Kamil Khan Kamil Khan is a visionary entrepreneur and highly respected in the cricketing community around the world, with a background in hospitality and marketing. He has been involved in various sporting ventures, multicultural community events in Australia, and is the CEO of a real estate company in Dubai." />
                                </div>
                            </div>
                        </div>
                        <div className="team-squad">
                            <h2>Pakistan Champions Squad - Team Overview</h2>
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
                        <div className="team-fixtures">
                            <h2>Pakistan Champions Fixtures - WCL T20</h2>
                            <Link href="https://edgbaston.com/wcl" legacyBehavior><a><img src="/assets/images/fixtures/pakistan-fixture.webp" /></a></Link>
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
            meta_title: "Pakistan Champions | Pakistan Cricket Legends | WCL 2025 - WCL T20",
            meta_description: "See Pakistan Champions & Pakistan cricket legends in WCL 2025! Pakistan’s iconic stars shine in the World Championship. Explore now!",
            meta_keywords: "Pakistan Champions, Pakistan Cricket Legends, Pakistan Legends, Edgbaston, Northampton, WCL T20",
            page_content: `<h1>Pakistan Champions & Cricket Legends - WCL 2025 Team</h1>
                <p>Pakistan Champions bring a legacy of flair, unpredictability, and iconic victories to <span class="link" href="/">WCL 2025</span>. Hailing from a nation renowned for its raw talent and passionate fans, this team of Pakistan Cricket Legends infuses the league with excitement and intensity.</p>
                <p>Known for their aggressive fast bowling and improvisational batting, Pakistan Champions can turn a match on its head at any moment. They play with heart and an emotional connection to their supporters, embodying the never-say-die spirit that Pakistan cricket is famous for.</p>
                <p>Every fixture involving the Pakistan Champions adds an element of thrill to the <span class="link" href="/">World Championship of Legends Cricket</span>, as they channel the magic of their past World Cup triumphs and unforgettable performances.</p>
                <h2>Pakistan Champions Squad – Team Overview</h2>
                <h2>Upcoming Pakistan Champions Matches in 2025:</h2>
                <ul>
                    <li><strong>18 July:</strong> Pakistan Champions vs <span class="link" href="/teams/england-champions">England Champions</span></li>
                    <li><strong>20 July:</strong> Pakistan Champions vs <span class="link" href="/teams/india-champions">India Champions</span></li>
                    <li><strong>25 July:</strong> Pakistan Champions vs <span class="link" href="/teams/south-africa-champions">South Africa Champions</span></li>
                    <li><strong>26 July:</strong> Pakistan Champions vs <span class="link" href="/teams/west-indies-champions">West Indies Champions</span></li>
                    <li><strong>30 July:</strong> Pakistan Champions vs <span class="link" href="/teams/australia-champions">Australia Champions</span></li>
            </ul>`
        }
    }
}

export default PakistanChampions