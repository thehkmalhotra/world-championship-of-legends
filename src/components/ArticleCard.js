import Link from 'next/link'
import React from 'react'

const ArticleCard = ({ title, image, url, type }) => {
    return (
        <>
            <Link href={url} target="__blank">
                <div className="grid-item">
                    <img
                        src={image} />
                    <div className="grid-item-footer">
                        <div className="tag">
                            <svg width="15" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M21.9149 0.892125C20.1569 0.703125 17.9429 0.703125 15.1169 0.703125H14.9789C12.1529 0.703125 9.93885 0.703125 8.18085 0.892125C6.38685 1.08712 4.93485 1.49213 3.69585 2.39213C2.94585 2.93813 2.28285 3.59812 1.73685 4.35112C0.836852 5.59012 0.431852 7.04212 0.236852 8.83612C0.0478516 10.5941 0.0478516 12.8081 0.0478516 15.6341V15.7721C0.0478516 18.5981 0.0478516 20.8121 0.236852 22.5701C0.431852 24.3641 0.836852 25.8161 1.73685 27.0551C2.28285 27.8051 2.94285 28.4681 3.69585 29.0141C4.93485 29.9141 6.38685 30.3191 8.18085 30.5141C9.93885 30.7031 12.1529 30.7031 14.9789 30.7031H15.1169C17.9429 30.7031 20.1569 30.7031 21.9149 30.5141C23.7089 30.3191 25.1609 29.9141 26.3999 29.0141C27.1499 28.4681 27.8129 27.8081 28.3589 27.0581C29.2589 25.8161 29.6639 24.3641 29.8589 22.5701C30.0479 20.8121 30.0479 18.5981 30.0479 15.7721V15.6341C30.0479 12.8081 30.0479 10.5941 29.8589 8.83612C29.6639 7.04212 29.2589 5.59012 28.3589 4.35112C27.8137 3.59953 27.1536 2.93844 26.4029 2.39213C25.1609 1.49213 23.7089 1.08712 21.9149 0.892125ZM5.05185 4.25812C5.83185 3.69112 6.83385 3.35813 8.42985 3.18713C10.0499 3.01313 12.1379 3.01312 15.0479 3.01312C17.9579 3.01312 20.0489 3.01312 21.6659 3.19312C23.2619 3.36412 24.2639 3.69412 25.0439 4.26112C25.5989 4.66612 26.0879 5.15513 26.4929 5.71013C27.0599 6.49013 27.3929 7.49213 27.5639 9.08813C27.7379 10.7081 27.7409 12.7961 27.7409 15.7061C27.7409 18.6161 27.7409 20.7071 27.5609 22.3241C27.3899 23.9201 27.0599 24.9221 26.4929 25.7021C26.089 26.2583 25.6 26.7473 25.0439 27.1511C24.2639 27.7181 23.2619 28.0511 21.6659 28.2221C20.0459 28.3961 17.9579 28.3991 15.0479 28.3991C12.1379 28.3991 10.0469 28.3991 8.42985 28.2191C6.83385 28.0481 5.83185 27.7181 5.05185 27.1511C4.49571 26.7473 4.00671 26.2583 3.60285 25.7021C3.03585 24.9221 2.70285 23.9201 2.53185 22.3241C2.35785 20.7011 2.35785 18.6131 2.35785 15.7031C2.35785 12.7931 2.35785 10.7021 2.53785 9.08512C2.70885 7.48912 3.03885 6.48712 3.60585 5.70712C4.00971 5.15099 4.49871 4.66198 5.05485 4.25812H5.05185Z"
                                    fill="black" />
                                <path
                                    d="M11.5295 8C10.3282 8 9.17609 8.38199 8.32665 9.06195C7.47721 9.7419 7 10.6641 7 11.6257V12.9449C7 13.2074 7.1303 13.4592 7.36224 13.6449C7.59418 13.8306 7.90876 13.9349 8.23677 13.9349C8.56478 13.9349 8.87936 13.8306 9.1113 13.6449C9.34324 13.4592 9.47354 13.2074 9.47354 12.9449V11.6283C9.47354 10.718 10.3923 9.98 11.5295 9.98H13.5886V21.1863H11.5327C11.2047 21.1863 10.8901 21.2906 10.6582 21.4762C10.4262 21.6619 10.2959 21.9137 10.2959 22.1763C10.2959 22.4389 10.4262 22.6907 10.6582 22.8763C10.8901 23.062 11.2047 23.1663 11.5327 23.1663H18.1181C18.4461 23.1663 18.7607 23.062 18.9926 22.8763C19.2246 22.6907 19.3549 22.4389 19.3549 22.1763C19.3549 21.9137 19.2246 21.6619 18.9926 21.4762C18.7607 21.2906 18.4461 21.1863 18.1181 21.1863H16.0622V9.98H18.1181C19.2585 9.98 20.1804 10.718 20.1804 11.6257V12.9449C20.1719 13.0789 20.1975 13.213 20.2557 13.3389C20.3139 13.4648 20.4035 13.5799 20.5191 13.6773C20.6346 13.7746 20.7737 13.8521 20.9278 13.905C21.0819 13.958 21.2479 13.9853 21.4156 13.9853C21.5833 13.9853 21.7493 13.958 21.9034 13.905C22.0575 13.8521 22.1966 13.7746 22.3121 13.6773C22.4277 13.5799 22.5173 13.4648 22.5755 13.3389C22.6337 13.213 22.6593 13.0789 22.6508 12.9449V11.6283C22.6508 10.6667 22.1736 9.74447 21.3241 9.06452C20.4747 8.38456 19.3226 8.00257 18.1213 8.00257L11.5295 8Z"
                                    fill="black" />
                            </svg>
                            <p>{type}</p>
                        </div>
                        <h4>{title}</h4>
                    </div>
                </div>
            </Link>

            <style jsx>{`
                        .grid-item {
                            width: 100%;
                            height: 480px;
                            display: flex;
                            position: relative;
                        }

                        .grid-item::after {
                            content: "";
                            height: 320px;
                            width: 100%;
                            background: linear-gradient(360deg, #00000099, #ffffff05);
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            border-radius: 0 0 15px 15px;
                        }

                        .grid-item img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            object-position: center;
                            border-radius: 15px;
                        }

                        .grid-item-footer {
                            width: 90%;
                            display: flex;
                            flex-direction: column;
                            gap: 10px;
                            z-index: 1;
                            position: absolute;
                            left: 50%;
                            bottom: 10px;
                            transform: translateX(-50%);
                        }

                        .grid-item-footer .tag {
                            width: 65px;
                            height: 25px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            gap: 5px;
                            align-items: center;
                            background-color: #DAB072;
                            border-radius: 8px;
                        }

                        .grid-item-footer .tag p {
                            color: #212121;
                            margin-top: 3px;
                            font-family: "Formula Condensed Light";
                            font-size: 12px;
                            letter-spacing: 1px;
                            text-transform: uppercase;
                        }

                        .grid-item-footer h4 {
                            font-family: "Formula Condensed Regular";
                            font-weight: 500;
                            font-size: 20px;
                            line-height: 1.5rem;
                            text-transform: uppercase;
                            color: #ffffff;
                        }
                    `}</style>
        </>
    )
}

export default ArticleCard