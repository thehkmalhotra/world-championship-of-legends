import Footer from '@/components/Footer';
import Header from '@/components/Header'
import PlayerCard from '@/components/PlayerCard';
import TeamOwner from '@/components/TeamOwner';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react'
import 'swiper/css';

const AustraliaChampions = ({ canonical_link, meta_title, meta_description, meta_keywords, page_content }) => {
  const [season, setSeason] = useState(2);
  const players = {
    season1: [
      {
        "player_name": "Brett Lee",
        "player_type": "Bowler",
        "player_jersey": "58",
        "player_image": "/assets/images/players/australia-champions/brett-lee.webp"
      },
      {
        "player_name": "Tim Paine",
        "player_type": "Batsman",
        "player_jersey": "36",
        "player_image": "/assets/images/players/australia-champions/tim-paine.webp"
      },
      {
        "player_name": "Shaun Marsh",
        "player_type": "Batsman",
        "player_jersey": "9",
        "player_image": "/assets/images/players/australia-champions/shaun-marsh.webp"
      },
      {
        "player_name": "Ben Cutting",
        "player_type": "Batsman",
        "player_jersey": "31",
        "player_image": "/assets/images/players/australia-champions/ben-cutting.webp"
      },
      {
        "player_name": "Ben Dunk",
        "player_type": "Batsman",
        "player_jersey": "51",
        "player_image": "/assets/images/players/australia-champions/ben-dunk.webp"
      },
      {
        "player_name": "Dirk Nannes",
        "player_type": "Bowler",
        "player_jersey": "29",
        "player_image": "/assets/images/players/australia-champions/dirk-nannes.webp"
      },
      {
        "player_name": "Dan Christian",
        "player_type": "Batsman",
        "player_jersey": "54",
        "player_metric_1": "99",
        "player_metric_2": "35",
        "player_image": "/assets/images/players/australia-champions/dan-christian.webp"
      },
      {
        "player_name": "Ben Laughlin",
        "player_type": "Bowler",
        "player_jersey": "55",
        "player_image": "/assets/images/players/australia-champions/ben-laughlin.webp"
      },
      {
        "player_name": "Aaron Finch",
        "player_type": "Batsman",
        "player_jersey": "5",
        "player_image": "/assets/images/players/australia-champions/aaron-finch.webp"
      },
      {
        "player_name": "John Hastings",
        "player_type": "Bowler",
        "player_jersey": "41",
        "player_image": "/assets/images/players/australia-champions/john-hastings.webp"
      },
      {
        "player_name": "Callum Ferguson",
        "player_type": "Batsman",
        "player_jersey": "12",
        "player_image": "/assets/images/players/australia-champions/callum-fergusan.webp"
      },
      {
        "player_name": "Peter Siddle",
        "player_type": "Bowler",
        "player_jersey": "64",
        "player_image": "/assets/images/players/australia-champions/peter-siddle.webp"
      },
      {
        "player_name": "Xavier Doherty",
        "player_type": "Bowler",
        "player_jersey": "3",
        "player_image": "/assets/images/players/australia-champions/xavier-doherty.webp"
      },
      {
        "player_name": "Nathan Coulter-Nile",
        "player_type": "Bowler",
        "player_jersey": "6",
        "player_image": "/assets/images/players/australia-champions/nathan-coulter-nile.webp"
      }
    ],
    season2: [
      {
        "player_name": "Brett Lee",
        "player_type": "Bowler",
        "player_jersey": "42",
        "player_image": "/assets/images/players/australia-champions/brett-lee.webp",
        "player_about": "One of the fastest bowlers in cricket history, Brett Lee’s raw pace and aggressive bowling make him a lethal weapon in WCL. His ability to rattle batsmen with sheer speed adds excitement to the tournament."
      },
      {
        "player_name": "Dan Christian",
        "player_type": "All Rounder",
        "player_jersey": "54",
        "player_image": "/assets/images/players/australia-champions/dan-christian.webp",
        "player_about": "A seasoned all-rounder, Dan Christian’s ability to finish games with the bat and contribute with the ball makes him a valuable asset in WCL. His vast T20 experience strengthens any team."
      },
      {
        "player_name": "Shaun Marsh",
        "player_type": "Batsman",
        "player_jersey": "9",
        "player_image": "/assets/images/players/australia-champions/shaun-marsh.webp",
        "player_about": "A classy left-handed batsman, Shaun Marsh’s ability to build innings and play elegant shots makes him a key player in WCL. His consistency at the top adds stability to the batting lineup."
      },
      {
        "player_name": "Ben Dunk",
        "player_type": "Wicket Keeper",
        "player_jersey": "51",
        "player_image": "/assets/images/players/australia-champions/ben-dunk.webp",
        "player_about": "A hard-hitting wicketkeeper-batsman, Ben Dunk’s aggressive batting in the powerplay makes him a dangerous opponent in WCL. His fearless approach adds firepower to any team."
      },
      {
        "player_name": "D’Arcy Short",
        "player_type": "Batsman",
        "player_jersey": "23",
        "player_image": "/assets/images/players/australia-champions/darcy-short.webp",
        "player_about": "A dynamic opening batsman and useful left-arm spinner, D’Arcy Short’s explosive stroke play makes him a key entertainer in WCL. His all-round ability adds great balance to his team."
      },
      {
        "player_name": "Nathan Coulter-Nile",
        "player_type": "Bowler",
        "player_jersey": "6",
        "player_image": "/assets/images/players/australia-champions/nathan-coulter-nile.webp",
        "player_about": "A skilled fast bowler and handy lower-order hitter, Nathan Coulter-Nile’s ability to bowl crucial spells and score quick runs makes him an impactful player in WCL."
      },
      {
        "player_name": "Ben Cutting",
        "player_type": "All Rounder",
        "player_jersey": "31",
        "player_image": "/assets/images/players/australia-champions/ben-cutting.webp",
        "player_about": "A powerful all-rounder, Ben Cutting’s ability to clear the ropes effortlessly and contribute with the ball makes him a match-winner in WCL. His aggressive style is perfect for high-intensity games."
      },
      {
        "player_name": "Peter Siddle",
        "player_type": "Bowler",
        "player_jersey": "64",
        "player_image": "/assets/images/players/australia-champions/peter-siddle.webp",
        "player_about": "A veteran pacer known for his accuracy and discipline, Peter Siddle’s experience and ability to bowl long spells make him a valuable bowler in WCL. His leadership on the field adds depth to the team."
      },
      {
        "player_name": "Callum Ferguson",
        "player_type": "Batsman",
        "player_jersey": "12",
        "player_image": "/assets/images/players/australia-champions/callum-fergusan.webp",
        "player_about": "A stylish middle-order batsman, Callum Ferguson’s ability to anchor innings and accelerate when needed makes him a crucial part of WCL. His experience in domestic and international cricket adds value."
      }
    ]
  };
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
                <li>Australia Champions</li>
              </ul>
              <div className="page-headers">
                <div>Australia Champions</div>
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
              <h2>Australia Champions Squad - Team Overview</h2>
              <div className="season-switcher">
                <select onChange={(event) => setSeason(event.target.value)}>
                  <option value="1">Season 1</option>
                  <option value="2" selected>Season 2</option>
                </select>
              </div>
              <div className="players-grid">
                {currentSquad.map((player, index) => (
                  <PlayerCard
                    key={index}
                    name={player.player_name}
                    type={player.player_type}
                    jersey={player.player_jersey}
                    about={player.player_about}
                    metric1={player.player_metric_1}
                    metric2={player.player_metric_2}
                    image={player.player_image}
                  />
                ))}
              </div>
            </div>
            <div className="team-fixtures">
              <h2>Australia Champions Fixtures - WCL T20</h2>
              <Link href="https://edgbaston.com/wcl" legacyBehavior><a><img src="/assets/images/fixtures/australia-fixture.webp" /></a></Link>
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
      meta_title: "Australia Champions | Australia Cricket Legends | WCL 2025 Team - WCL T20",
      meta_description: "Meet Australia Champions & Australia Cricket Legends in WCL 2025! Explore the top Australia Legends in action at Edgbaston and Northampton. Dive in now!",
      meta_keywords: "Australia Champions, Australia Legends, Australia Cricket Legends, Edgbaston, Northampton, WCL T20",
      page_content: `<h1>Australia Champions & Cricket Legends - WCL 2025 Team</h1>
          <p>Australia Champions are defined by dominance, grit, and a high-performance culture. Hailing from a nation with a proud cricketing pedigree, this team of Australia Cricket Legends brings the hallmark Aussie attitude to <span class="link" href="/">WCL 2025</span>. They combine precision fast bowling, fearless power-hitting, and world-class fielding to assert their dominance in every match.</p>
          <p>Australian cricket has a rich history of winning trophies, and the Australia Champions channel that legacy by playing with unrelenting energy and competitive pride. In the <span class="link" href="/">World Championship of Legends Cricket</span>, they are known for their never-say-die spirit and the ability to handle high-pressure situations – traits that make them serious contenders for the title and thrilling to watch for fans.</p>
          <p>As the Australia Cricket Legends take the field, fans can expect the team to set a high standard early in the tournament. Brett Lee and his bowlers will be keen to make a statement by rattling the West Indies top order, while the Australian batsmen aim to outgun their opponents. An opening win in Leicester would put the Australia Champions on the front foot in the World Championship of Legends Cricket standings, reinforcing their reputation as a team that turns up in big tournaments ready to win it all.</p>
          <h2>Upcoming Australia Champions Matches in 2025:</h2>
          <ul>
            <li><strong>19 July:</strong> Australia Champions vs <span class="link" href="/teams/england-champions">England Champions</span></li>
            <li><strong>23 July:</strong> Australia Champions vs <span class="link" href="/teams/west-indies-champions">West Indies Champions</span></li>
            <li><strong>26 July:</strong> Australia Champions vs <span class="link" href="/teams/india-champions">India Champions</span></li>
            <li><strong>27 July:</strong> Australia Champions vs <span class="link" href="/teams/south-africa-champions">South Africa Champions</span></li>
            <li><strong>2 August:</strong> Australia Champions vs <span class="link" href="/teams/pakistan-champions">Pakistan Champions</span></li>
      </ul>`
    }
  }
}

export default AustraliaChampions