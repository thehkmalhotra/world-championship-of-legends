import Footer from '@/components/Footer';
import Header from '@/components/Header'
import TeamCard from '@/components/TeamCard'
import React from 'react'

const Teams = () => {
    const teams = [
        {
            team: "Australia Champions",
            logo: "/assets/images/team-logos/australia-logo.webp",
            href: "/teams/australia-champions"
        },
        {
            team: "England Champions",
            logo: "/assets/images/team-logos/england-logo.webp",
            href: "/teams/england-champions"
        },
        {
            team: "India Champions",
            logo: "/assets/images/team-logos/india-logo.webp",
            href: "/teams/india-champions"
        },
        {
            team: "Pakistan Champions",
            logo: "/assets/images/team-logos/pakistan-logo.webp",
            href: "/teams/pakistan-champions"
        },
        {
            team: "South Africa Champions",
            logo: "/assets/images/team-logos/south-africa-logo.webp",
            href: "/teams/south-africa-champions"
        },
        {
            team: "West Indies Champions",
            logo: "/assets/images/team-logos/west-indies-logo.webp",
            href: "/teams/west-indies-champions"
        }
    ];
    
    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    <div className="teams-container">
                        <div className="teams-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>Teams</li>
                            </ul>
                            <div className="page-headers">
                                <h1>Wcl Squads</h1>
                            </div>
                        </div>
                        <div className="teams-grid">
                            {teams.map((team, index)=>{
                                return(
                                    <TeamCard logo={team.logo} href={team.href} key={index}></TeamCard>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            <style jsx>{`
                .teams-container {
                    width: 100%;
                    max-width: 1280px;
                    padding: 0 20px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 100px;
                    margin-top: 80px;
                }

                .teams-header-container {
                    width: max-content;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .teams-header-container ul {
                    display: flex;
                    gap: 5px;
                    list-style: none;
                }

                .teams-header-container ul li {
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

                .page-headers  h1 {
                    color: #ffffff;
                    font-family: "Poppins Semibold";
                    font-size: 35px;
                    text-transform: uppercase;
                }

                .teams-grid {
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }

                @media screen and (max-width: 1023px) {
                .teams-grid {
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 20px;
                }
                }
            `}</style>
        </>
    )
}

export default Teams
