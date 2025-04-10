import Footer from '@/components/Footer';
import Header from '@/components/Header'
import PlayerCard from '@/components/PlayerCard';
import TeamOwner from '@/components/TeamOwner';
import Head from 'next/head';
import React from 'react'
import 'swiper/css';

const SauthAfricaChampions = ({ canonical_link, meta_title, meta_description, meta_keywords, page_content }) => {
  const players = [
    {
      "player_name": "Jacques Kallis",
      "player_type": "Batsman",
      "player_jersey": "3",
      "player_metric_1": "18",
      "player_metric_2": "21",
      "player_dob": "16 Oct",
      "player_image": "/assets/images/players/south-africa-champions/jacques-kallis.webp"
    },
    {
      "player_name": "Imran Tahir",
      "player_type": "Bowler",
      "player_jersey": "99",
      "player_metric_1": "1",
      "player_metric_2": "19",
      "player_dob": "27 Mar",
      "player_image": "/assets/images/players/south-africa-champions/imran-tahir.webp"
    },
    {
      "player_name": "Herschelle Gibbs",
      "player_type": "Batsman",
      "player_jersey": "24",
      "player_metric_1": "26",
      "player_metric_2": "19",
      "player_dob": "23 Feb",
      "player_image": "/assets/images/players/south-africa-champions/herschelle-gibbs.webp"
    },
    {
      "player_name": "Dale Steyn",
      "player_type": "Bowler",
      "player_jersey": "8",
      "player_metric_1": "1",
      "player_metric_2": "24",
      "player_dob": "27 Jun",
      "player_image": "/assets/images/players/south-africa-champions/dale-steyn.webp"
    },
    {
      "player_name": "Mahkaya Ntini",
      "player_type": "Bowler",
      "player_jersey": "77",
      "player_metric_1": "0",
      "player_metric_2": "27",
      "player_dob": "6 Jul",
      "player_image": "/assets/images/players/south-africa-champions/mahkaya-ntini.webp"
    },
    {
      "player_name": "JP Duminy",
      "player_type": "Bowler",
      "player_jersey": "21",
      "player_metric_1": "2",
      "player_metric_2": "33",
      "player_dob": "14 Apr",
      "player_image": "/assets/images/players/south-africa-champions/jp-duminy.webp"
    },
    {
      "player_name": "Neil McKenzie",
      "player_type": "Batsman",
      "player_jersey": "44",
      "player_metric_1": "33",
      "player_metric_2": "24",
      "player_dob": "24 Nov",
      "player_image": "/assets/images/players/south-africa-champions/neil-mckenzie.webp"
    },
    {
      "player_name": "Ryan McLaren",
      "player_type": "Bowler",
      "player_jersey": "23",
      "player_metric_1": "2",
      "player_metric_2": "20",
      "player_dob": "9 Feb",
      "player_image": "/assets/images/players/south-africa-champions/ryan-mclaren.webp"
    },
    {
      "player_name": "Justice Ontong",
      "player_type": "Batsman",
      "player_jersey": "26",
      "player_metric_1": "1",
      "player_metric_2": "2",
      "player_dob": "4 Jan",
      "player_image": "/assets/images/players/south-africa-champions/justice-ontong.webp"
    },
    {
      "player_name": "Rory Klienveldt",
      "player_type": "Bowler",
      "player_jersey": "19",
      "player_metric_1": "1",
      "player_metric_2": "14",
      "player_dob": "15 Mar",
      "player_image": "/assets/images/players/south-africa-champions/rory-klienveldt.webp"
    },
    {
      "player_name": "Ashwell Prince",
      "player_type": "Batsman",
      "player_jersey": "5",
      "player_metric_1": "46",
      "player_metric_2": "35",
      "player_dob": "28 May",
      "player_image": "/assets/images/players/south-africa-champions/ashwell-prince.webp"
    },
    {
      "player_name": "Dane Vilas",
      "player_type": "Batsman",
      "player_jersey": "33",
      "player_metric_1": "44",
      "player_metric_2": "17",
      "player_dob": "10 Jun",
      "player_image": "/assets/images/players/south-africa-champions/dane-vilas.webp"
    },
    {
      "player_name": "Vernon Philander",
      "player_type": "Bowler",
      "player_jersey": "1",
      "player_metric_1": "1",
      "player_metric_2": "37",
      "player_dob": "24 Jun",
      "player_image": "/assets/images/players/south-africa-champions/vernon-philander.webp"
    },
    {
      "player_name": "Charl Langeveldt",
      "player_type": "Bowler",
      "player_jersey": "67",
      "player_metric_1": "1",
      "player_metric_2": "47",
      "player_dob": "17 Dec",
      "player_image": "/assets/images/players/south-africa-champions/charl-langeveldt.webp"
    },
    {
      "player_name": "Richard Levi",
      "player_type": "Batsman",
      "player_jersey": "88",
      "player_metric_1": "60",
      "player_metric_2": "25",
      "player_dob": "14 Jan",
      "player_image": "/assets/images/players/south-africa-champions/richard-levi.webp"
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
                <li>South Africa Champions</li>
              </ul>
              <div className="page-headers">
                <div>South Africa Champions</div>
              </div>
            </div>
            <div className="team-owners-container">
              <div className="team-owners">
                <div className="team-owner">
                  <TeamOwner name="Mr.Harry Singh" image="/assets/images/team-owners/harry-singh.webp" about="The proud owner of South Africa Champions Cricket Team, is the founder and managing director of Nkd Life Ltd., a leading water purification technology company in the UK and USA. He also co-founded Tech 23 Ltd, focused on R&D in water filtration for humanitarian efforts. Mr. Singh holds key leadership roles in several global companies, including MK Illumination AT and One Filta Ltd, which serves governments and NGOs. His extensive work with the Department of International Trade and relationships with organizations like the-JN and WHO highlight his global impact. Beyond his professional endeavors, Harry is also a passionate sports enthusiast." />
                </div>
                <div className="team-owner">
                  <TeamOwner name="Mr. Amandeep Singh" image="/assets/images/team-owners/amandeep-singh.webp" about="Amandeep Singh is a dynamic young entrepreneur and investor who is passionate about sports, hospitality, and entertainment. He is the owner of South Africa Champions and has been involved in various ventures in these industries. Amandeep Singh has a strong vision for success and has a keen interest in making a positive impact in the world of sports and entertainment." />
                </div>
              </div>
            </div>
            <div className="team-squad">
              <h2>South Africa Champions Squad - Team Overview</h2>
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
      meta_title: "South Africa Champions | South Africa Cricket Legends | WCL 2025 - WCL T20",
      meta_description: "Meet South Africa Champions & South Africa cricket legends in WCL 2025! See SA’s iconic stars in action at Edgbaston and Northampton. Check it out!",
      meta_keywords: "South Africa Champions, South Africa Cricket Legends, South Africa Legends, Edgbaston, Northampton, WCL T20",
      page_content: `<h1>South Africa Champions & Cricket Legends - WCL 2025 Team</h1>
          <p>South Africa Champions bring consistency, athleticism, and competitive fire to <span class="link" href="/">WCL 2025</span>. Representing a nation with a legacy of excellence, this team of South Africa Cricket Legends is balanced across all departments – batting, bowling, and fielding – making them a threat on any pitch. They play with the trademark Protea fighting spirit, known to never give up until the last ball is bowled.</p>
          <p>The South Africa Champions infuse the <span class="link" href="/">World Championship of Legends Cricket</span> with their blend of aggressive fast bowling, dynamic fielding, and powerful batting line-ups honed from years of international success. With a history of near-misses and dramatic wins on the world stage, the South Africans are driven to dominate and finally clinch a major title in this legends arena.</p>
          <h2>Upcoming South Africa Champions Matches in 2025:</h2>
          <ul>
            <li><strong>19 July:</strong> South Africa Champions vs <span class="link" href="/teams/west-indies-champions">West Indies Champions</span></li>
            <li><strong>22 July:</strong> South Africa Champions vs <span class="link" href="/teams/india-champions">India Champions</span></li>
            <li><strong>24 July:</strong> South Africa Champions vs <span class="link" href="/teams/england-champions">England Champions</span></li>
            <li><strong>25 July:</strong> South Africa Champions vs <span class="link" href="/teams/pakistan-champions">Pakistan Champions</span></li>
            <li><strong>27 July:</strong> South Africa Champions vs <span class="link" href="/teams/australia-champions">Australia Champions</span></li>
      </ul>`
    }
  }
}

export default SauthAfricaChampions
