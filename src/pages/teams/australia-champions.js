import Header from '@/components/Header'
import PlayerCard from '@/components/PlayerCard';
import TeamOwner from '@/components/TeamOwner';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'
import 'swiper/css';

const AustraliaChampions = ({ canonical_link, meta_title, meta_description, meta_keywords }) => {
  const router = useRouter();
  const players = [
    {
      "player_name": "Brett Lee",
      "player_type": "Bowler",
      "player_jersey": "58",
      "player_metric_1": "2",
      "player_metric_2": "19",
      "player_dob": "8 Nov",
      "player_image": "/assets/images/players/australia-champions/brett-lee.webp"
    },
    {
      "player_name": "Tim Paine",
      "player_type": "Batsman",
      "player_jersey": "36",
      "player_metric_1": "34",
      "player_metric_2": "21",
      "player_dob": "8 Dec",
      "player_image": "/assets/images/players/australia-champions/tim-paine.webp"
    },
    {
      "player_name": "Shaun Marsh",
      "player_type": "Batsman",
      "player_jersey": "9",
      "player_metric_1": "49",
      "player_metric_2": "28",
      "player_dob": "9 Jul",
      "player_image": "/assets/images/players/australia-champions/shaun-marsh.webp"
    },
    {
      "player_name": "Ben Cutting",
      "player_type": "Batsman",
      "player_jersey": "31",
      "player_metric_1": "38",
      "player_metric_2": "17",
      "player_dob": "30 Jan",
      "player_image": "/assets/images/players/australia-champions/ben-cutting.webp"
    },
    {
      "player_name": "Ben Dunk",
      "player_type": "Batsman",
      "player_jersey": "51",
      "player_metric_1": "100",
      "player_metric_2": "35",
      "player_dob": "11 Mar",
      "player_image": "/assets/images/players/australia-champions/ben-dunk.webp"
    },
    {
      "player_name": "Dirk Nannes",
      "player_type": "Bowler",
      "player_jersey": "29",
      "player_metric_1": "0",
      "player_metric_2": "0",
      "player_dob": "16 May",
      "player_image": "/assets/images/players/australia-champions/dirk-nannes.webp"
    },
    {
      "player_name": "Dan Christian",
      "player_type": "Batsman",
      "player_jersey": "54",
      "player_metric_1": "99",
      "player_metric_2": "35",
      "player_dob": "4 May",
      "player_image": "/assets/images/players/australia-champions/dan-christian.webp"
    },
    {
      "player_name": "Ben Laughlin",
      "player_type": "Bowler",
      "player_jersey": "55",
      "player_metric_1": "0",
      "player_metric_2": "19",
      "player_dob": "3 Oct",
      "player_image": "/assets/images/players/australia-champions/ben-laughlin.webp"
    },
    {
      "player_name": "Aaron Finch",
      "player_type": "Batsman",
      "player_jersey": "5",
      "player_metric_1": "68",
      "player_metric_2": "40",
      "player_dob": "17 Nov",
      "player_image": "/assets/images/players/australia-champions/aaron-finch.webp"
    },
    {
      "player_name": "John Hastings",
      "player_type": "Bowler",
      "player_jersey": "41",
      "player_metric_1": "0",
      "player_metric_2": "0",
      "player_dob": "4 Nov",
      "player_image": "/assets/images/players/australia-champions/john-hastings.webp"
    },
    {
      "player_name": "Callum Ferguson",
      "player_type": "Batsman",
      "player_jersey": "12",
      "player_metric_1": "26",
      "player_metric_2": "16",
      "player_dob": "21 Nov",
      "player_image": "/assets/images/players/australia-champions/callum-fergusan.webp"
    },
    {
      "player_name": "Peter Siddle",
      "player_type": "Bowler",
      "player_jersey": "64",
      "player_metric_1": "4",
      "player_metric_2": "50",
      "player_dob": "25 Nov",
      "player_image": "/assets/images/players/australia-champions/peter-siddle.webp"
    },
    {
      "player_name": "Xavier Doherty",
      "player_type": "Bowler",
      "player_jersey": "3",
      "player_metric_1": "3",
      "player_metric_2": "23",
      "player_dob": "22 Nov",
      "player_image": "/assets/images/players/australia-champions/xavier-doherty.webp"
    },
    {
      "player_name": "Nathan Coulter-Nile",
      "player_type": "Bowler",
      "player_jersey": "6",
      "player_metric_1": "3",
      "player_metric_2": "7",
      "player_dob": "11 Oct",
      "player_image": "/assets/images/players/australia-champions/nathan-coulter-nile.webp"
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
                <li>Australia Champions</li>
              </ul>
              <div className="page-headers">
                <h1>Australia Champions & Cricket Legends - WCL 2025 Australia Team</h1>
              </div>
            </div>
            <div className="team-owners-container">
              <div className="team-owners">
                <div className="team-owner">
                  <TeamOwner name="Mr. Puneet Singh" image="/assets/images/team-owners/puneet-singh.webp" about="Puneet Singh, a Global entrepreneur and investor, is the proud owner of the Australia Champions Cricket team. With a diverse business portfolio spanning across finance, real estate, entertainment and sports, Mr. Singh is a prominent figure in the global business community. As a co-owner of a Punjab De Asher team of India's prestigious Celebrity Cricket League (CCL), he is deeply involved in the sports and entertainment industry. With a wealth of experience and achievements, Mr. Puneet Singh is a visionary leader dedicated to promoting the unifying power of sports and fostering strong ties between nations." />
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
      meta_title: "Australia Champions | Australia Cricket Legends | WCL 2025 Team - WCL T20",
      meta_description: "Meet Australia Champions & Australia Cricket Legends in WCL 2025! Explore the top Australia Legends in action at Edgbaston and Northampton. Dive in now!",
      meta_keywords: "Australia Champions, Australia Legends, Australia Cricket Legends, Edgbaston, Northampton, WCL T20"
    }
  }
}

export default AustraliaChampions