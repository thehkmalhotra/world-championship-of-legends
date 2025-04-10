import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VideoCard from '@/components/VideoCard'

const Videos = ({ canonical_link, meta_title, meta_description, meta_keywords, page_content }) => {
    const videos = [
        {
            video_title: "India Champions vs England Champions - Full Match Highlights (3rd July)",
            video_image: "./assets/images/match/ic-ec-03.webp",
            video_url: "https://youtu.be/QWS95Yx4j18?feature=shared"
        },
        {
            video_title: "Australia Champions vs Pakistan Champions - Full Match Highlights (3rd July)",
            video_image: "./assets/images/match/ac-pc-03.webp",
            video_url: "https://youtu.be/ssU2HPNOSEw?feature=shared"
        },
        {
            video_title: "England Champions vs South Africa Champions - Full Match Highlights (4th July)",
            video_image: "./assets/images/match/ec-sac-04.webp",
            video_url: "https://youtu.be/LYVnvT14c24?feature=shared"
        },
        {
            video_title: "West Indies Champions vs Pakistan Champions - Full Match Highlights (4th July)",
            video_image: "./assets/images/match/wic-pc-04.webp",
            video_url: "https://youtu.be/I72n496JzFk?feature=shared"
        },
        {
            video_title: "Australia Champions vs South Africa Champions - Full Match Highlights (5th July)",
            video_image: "./assets/images/match/ac-sac-05.webp",
            video_url: "https://youtu.be/-smZkpFRwmI?feature=shared"
        },
        {
            video_title: "India Champions vs West Indies Champions - Full Match Highlights (5th July)",
            video_image: "./assets/images/match/ic-wic-05.webp",
            video_url: "https://youtu.be/T8bJexwKEWw?feature=shared"
        },
        {
            video_title: "Australia Champions vs England Champions - Full Match Highlights (6th July)",
            video_image: "./assets/images/match/ac-ec-06.webp",
            video_url: "https://youtu.be/AU4N2nTTygI?feature=shared"
        },
        {
            video_title: "India Champions vs Pakistan Champions - Full Match Highlights (6th July)",
            video_image: "./assets/images/match/ic-pc-06.webp",
            video_url: "https://youtu.be/-TdMtpEjFDw?feature=shared"
        },
        {
            video_title: "West Indies Champions vs South Africa Champions - Full Match Highlights (7th July)",
            video_image: "./assets/images/match/wic-sac-07.webp",
            video_url: "https://youtu.be/RsKyi0JYgFw?feature=shared"
        },
        {
            video_title: "England Champions vs Pakistan Champions - Full Match Highlights (7th July)",
            video_image: "./assets/images/match/ec-pc-07.webp",
            video_url: "https://youtu.be/-JIIelAG1M4?feature=shared"
        },
        {
            video_title: "India Champions vs Australia Champions - Full Match Highlights (8th July)",
            video_image: "./assets/images/match/ic-ac-08.webp",
            video_url: "https://youtu.be/fXE-b6aZELk?feature=shared"
        },
        {
            video_title: "England Champions vs West Indies Champions - Full Match Highlights (9th July)",
            video_image: "./assets/images/match/ec-wic-09.webp",
            video_url: "https://youtu.be/DJUTsaur7BY?feature=shared"
        },
        {
            video_title: "Pakistan Champions vs South Africa Champions - Full Match Highlights (9th July)",
            video_image: "./assets/images/match/pc-sac-09.webp",
            video_url: "https://youtu.be/r40t_rxznWA?feature=shared"
        },
        {
            video_title: "India Champions vs South Africa Champions - Full Match Highlights (10th July)",
            video_image: "./assets/images/match/ic-sac-10.webp",
            video_url: "https://youtu.be/BggptQa3Sz0?feature=shared"
        },
        {
            video_title: "West Indies Champions vs Australia Champions - Full Match Highlights (10th July)",
            video_image: "./assets/images/match/wic-ac-10.webp",
            video_url: "https://youtu.be/2lHWxbo8iU4?feature=shared"
        },
        {
            video_title: "Pakistan Champions vs West Indies Champions - Semi-Final Highlights (12th July)",
            video_image: "./assets/images/match/pc-wic-12.webp",
            video_url: "https://youtu.be/y-UKoRso2O4?feature=shared"
        },
        {
            video_title: "Australia Champions vs India Champions - Semi-Final Highlights (12th July)",
            video_image: "./assets/images/match/ac-ic-12.webp",
            video_url: "https://youtu.be/76NJfPIxIss?feature=shared"
        },
        {
            video_title: "Pakistan Champions vs India Champions - Final Highlights (13th July)",
            video_image: "./assets/images/match/pc-ic-13.webp",
            video_url: "https://youtu.be/CraJy_hGPSk?feature=shared"
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
                    <div className="news-container">
                        <div className="news-header-container">
                            <ul>
                                <li>Homepage &gt;</li>
                                <li>News &gt;</li>
                                <li>Videos</li>
                            </ul>
                            <div className="page-headers">
                                <div>WCL Cricket Highlights</div>
                            </div>
                        </div>
                        <div className="news-grid">
                            {videos.map((video, index) => (
                                <VideoCard
                                    key={index}
                                    title={video.video_title}
                                    image={video.video_image}
                                    url={video.video_url}
                                    type="Video"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Footer pagecontent={page_content} />
            </div>

            <style jsx>{`
                .news-container {
                    width: 100%;
                    max-width: 1280px;
                    padding: 0 20px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 100px;
                    margin-top: 80px;
                }

                .news-header-container {
                    width: 100%;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .news-header-container ul {
                    display: flex;
                    gap: 5px;
                    list-style: none;
                }

                .news-header-container ul li {
                    color: #ABB1CB;
                    font-family: "Poppins Regular";
                    font-size: 14px;
                    text-transform: uppercase;
                }

                .page-headers div {
                    color: #ffffff;
                    font-family: "Poppins Semibold";
                    font-weight: 500;
                    font-size: 30px;
                    letter-spacing: -0.04em;
                    text-transform: uppercase;
                }

                .news-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 15px;
                }

                @media screen and (max-width: 768px) {
                    .news-grid {
                        grid-template-columns: repeat(1, 1fr);
                    }
                }
            `}</style>
        </>
    );
};

export async function getServerSideProps({ req }) {
    return {
        props: {
            canonical_link: `https://${req.headers.host}${req.url}`,
            meta_title: "WCL Cricket Highlights 2025 | World Championship of Legends Cricket Highlights - WCL T20",
            meta_description: "Explore WCL Cricket Highlights 2025! Enjoy World Championship of Legends cricket highlights with top stars at Edgbaston and Northampton. Watch now!",
            meta_keywords: "WCL Cricket Highlights 2025, World Championship of Legends Cricket Highlights, Edgbaston, Northampton, WCL T20",
            page_content: `
              <h1>World Championship Of Legends Cricket Highlights 2025 – WCL T20</h1>
              <p>Immerse yourself in the action with our official World Championship of Legends Cricket highlights and video library. The Videos page is a one-stop destination for all WCL Cricket Highlights 2025, bringing the tournament’s excitement directly to fans. Whether you missed a live match or want to relive an epic moment, the World Championship of Legends Cricket Highlights section has you covered with high-quality footage from every game. Watch condensed match highlights capturing every boundary and wicket, last-over thrillers that will get your heart racing, and standout performances by your favourite legends.</p>
              <p>Our WCL video collection goes beyond just highlights. You can find full-match replays featuring legendary cricketers, allowing you to experience entire games of the <span class="link" href="/">World Championship of Legends Cricket</span> at your convenience. Dive into exclusive content such as player interviews, where cricket legends reflect on their performances and share insights. Enjoy behind-the-scenes videos that give a glimpse into team locker rooms, training sessions, and the camaraderie that defines this legends league.</p>
              <p>From the electrifying opening ceremony to the final winning moments, all World Championship of Legends Cricket highlights of the 2025 season will be available for you to watch and share. This WCL Cricket Highlights 2025 library is continually updated after each match, so fans can follow the tournament’s narrative through dynamic visual content. Sit back and let the legends entertain you once again with every six, wicket, and diving catch captured on video.</p>
            `
        }
    }
}

export default Videos