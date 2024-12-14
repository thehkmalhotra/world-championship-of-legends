import Image from 'next/image'
import React from 'react'

const TeamOwner = ({ name, image, about }) => {
    return (
        <>
            <div className="team-owner">
                <div className="team-owner-header">
                    <Image src={image} width={50} height={50} style={{borderRadius: "10px"}} />
                    <h4>{name}</h4>
                    <p>(Owner)</p>
                </div>
                <p>
                    {about}
                </p>
            </div>

            <style jsx>{`
                .team-owner {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .team-owner-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .team-owner-header h4 {
                    color: #ffffff;
                    font-family: "Formula Condensed Regular";
                    font-size:18px;
                    font-weight: 500;
                    letter-spacing: .02em;
                    text-transform: uppercase;
                }

                .team-owner p {
                    color: #d3d3d3;
                    font-family: "Formula Condensed Light";
                    font-size: 15px;
                    letter-spacing: .05em;
                    text-transform: uppercase;
                }
            `}</style>
        </>
    )
}

export default TeamOwner
