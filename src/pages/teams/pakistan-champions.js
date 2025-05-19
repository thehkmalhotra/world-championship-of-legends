// pages/teams/pakistan-champions.js

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlayerCard from "@/components/PlayerCard";
import TeamOwner from "@/components/TeamOwner";
import pakistanChampions from "@/data/pakistanChampions";

function PakistanChampions({ canonical_link, meta_title, meta_description, meta_keywords, page_content }) {
  const [season, setSeason] = useState("2");
  const players = {
    season2: pakistanChampions
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
                <li>Pakistan Champions</li>
              </ul>
              <div className="page-headers">
                <div>Pakistan Champions</div>
              </div>
            </div>

            <div className="team-owners-container">
              <div className="team-owners">
                <div className="team-owner">
                  <TeamOwner name="Mr. Kamil Khan" image="/assets/images/team-owners/kamil-khan.webp" about="Kamil Khan, owner of the Pakistan Champions Cricket Team in the World Championship of Legends (WCL), is an Australia-based passionate cricket enthusiast with a strong background in real estate. Recognised as an ICC Community Champion in 2022 and is known for his work as an Australian entrepreneur , he brings a unique blend of business acumen and love for the cricket to the WCL. With a deep commitment to honoring Pakistan’s cricketing legacy, he has played a crucial role in bringing legendary players back into the spotlight. His vision and leadership focus on building a team that embodies the pride, passion, and fighting spirit of Pakistan, while reconnecting fans with the golden era of cricket on a global platform." />
                </div>
              </div>
            </div>

            <div className="team-squad">
              <h2>Pakistan Champions Squad - Team Overview</h2>
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
              <h2>Pakistan Champions Fixtures - WCL T20</h2>
              <Link href="https://edgbaston.com/wcl" legacyBehavior><a><img src="/assets/images/fixtures/pakistan-fixture.webp" /></a></Link>
            </div>
          </div>
        </div>
        <Footer pagecontent={page_content} />
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      canonical_link: `https://${req.headers.host}${req.url}`,
      meta_title: "Pakistan Champions | Pakistan Cricket Legends | WCL 2025 - WCL T20",
      meta_description: "Meet Pakistan Champions & cricket legends in WCL 2025! Explore Pakistan's iconic players in the World Championship of Legends.",
      meta_keywords: "Pakistan Champions, Shahid Afridi, Shoaib Malik, Pakistan Cricket Legends, WCL Pakistan Squad, Edgbaston, WCL T20",
      page_content: `<h1>Pakistan Champions & Cricket Legends - WCL 2025 Pakistan Team</h1>
          <p>Pakistan Champions represent explosive power and fearless cricket. Led by Shahid Afridi, this squad carries Pakistan's flair and aggression into WCL 2025. Their legacy of thrilling matches and big moments makes them a fan-favourite.</p>
          <p>This legendary team in the <span class='link' href='/'>World Championship of Legends Cricket</span> features players with match-winning experience and iconic reputations. Expect electrifying cricket across UK venues this summer!</p>
          <h2>Upcoming Pakistan Champions Matches in 2025:</h2>
          <ul>
            <li><strong>20 July:</strong> Pakistan Champions vs <span class='link' href='/teams/india-champions'>India Champions</span></li>
            <li><strong>23 July:</strong> Pakistan Champions vs <span class='link' href='/teams/west-indies-champions'>West Indies Champions</span></li>
            <li><strong>27 July:</strong> Pakistan Champions vs <span class='link' href='/teams/australia-champions'>Australia Champions</span></li>
            <li><strong>30 July:</strong> Pakistan Champions vs <span class='link' href='/teams/england-champions'>England Champions</span></li>
            <li><strong>1 August:</strong> Pakistan Champions vs <span class='link' href='/teams/south-africa-champions'>South Africa Champions</span></li>
          </ul>`
    }
  };
}

export default PakistanChampions;

