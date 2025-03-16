import React from 'react'

const PlayerCard = ({ name, jersey, dob, type, metric1, metric2, image }) => {
    return (
        <>
            <div className="player">
                <div className="player-body">
                    <div className="col-left">
                        <div>
                            <h2>{metric1}</h2>
                            <p>{type === "Bowler" ? "Wickets" : "Runs"}</p>
                        </div>
                        <div>
                            <h2>{metric2}</h2>
                            <p>{type === "Bowler" ? "Runs" : "Balls"}</p>
                        </div>
                    </div>
                    <div className="col-right">
                        <h2>{jersey}</h2>
                    </div>
                    <img src={image} />
                </div>
                <div className="separator"></div>
                <div className="player-footer">
                    <h2>{dob}</h2>
                    <div className="divider"></div>
                    <div className="player-detail">
                        <h4>{name}</h4>
                        <p>{type}</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .player {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    background-color: #27336D;
                    border-radius: 20px;
                }

                .player-body {
                    height: 360px;
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    position: relative;
                }

                .col-left {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .col-left div {
                    display: flex;
                    flex-direction: column;
                    gap: 0px;
                }

                .col-left div h2 {
                    color: #ffffff;
                    font-family: "Schabo";
                    font-size: 50px;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                }

                .col-left div p {
                    color: #ffffff;
                    font-family: "Poppins Light";
                    font-weight: 500;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                }

                .col-right h2 {
                    color: #ffffff;
                    font-family: "Schabo";
                    font-weight: 500;
                    font-size: 200px;
                    line-height: 10.5rem;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                }

                @media screen and (max-width: 1023px) {
                .col-right h2 {
                    font-size: 200px;
                    line-height: 13rem;
                }
                }

                .player img {
                    width: 310px;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                }

                @media screen and (max-width: 1023px) {
                .player img {
                    width: 300px;
                } 
                }

                .separator {
                    width: 100%;
                    height: 1px;
                    background-color: #FFFFFF;
                    opacity: .4;
                }

                .player-footer {
                    width: 100%;
                    height: 80px;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .divider {
                    width: 1px;
                    height: 40px;
                    background-color: #FFFFFF;
                    opacity: .4;
                }

                .player-footer h2 {
                    color: #ffffff;
                    font-family: "Poppins Semibold";
                    font-size: 40px;
                    font-weight: 500;
                    text-transform: uppercase;
                }

                .player-detail {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                .player-detail h4 {
                    color: #ffffff;
                    font-family: "Poppins Medium";
                    font-size: 16px;
                    font-weight: 500;
                    text-transform: uppercase;
                }

                .player-detail p {
                    color: #ffffff;
                    font-family: "Poppins Light";
                    font-size: 12px;
                    text-transform: uppercase;
                }
            `}</style>
        </>
    )
}

export default PlayerCard
