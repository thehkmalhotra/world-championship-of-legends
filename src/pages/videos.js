import Header from '@/components/Header'
import React from 'react'
import Footer from '@/components/Footer';
import VideoCard from '@/components/VideoCard';

const Videos = () => {
    const videos = [
        {
            "video_title": "India Champions vs England Champions - Full Match Highlights (3rd July)",
            "video_image": "./assets/images/match/ic-ec-03.webp",
            "video_url": "https://youtu.be/QWS95Yx4j18?feature=shared"
        },
        {
            "video_title": "Australia Champions vs Pakistan Champions - Full Match Highlights (3rd July)",
            "video_image": "./assets/images/match/ac-pc-03.webp",
            "video_url": "https://youtu.be/ssU2HPNOSEw?feature=shared"
        },
        {
            "video_title": "England Champions vs South Africa Champions - Full Match Highlights (4th July)",
            "video_image": "./assets/images/match/ec-sac-04.webp",
            "video_url": "https://youtu.be/LYVnvT14c24?feature=shared"
        },
        {
            "video_title": "West Indies Champions vs Pakistan Champions - Full Match Highlights (4th July)",
            "video_image": "./assets/images/match/wic-pc-04.webp",
            "video_url": "https://youtu.be/I72n496JzFk?feature=shared"
        },
        {
            "video_title": "Australia Champions vs South Africa Champions - Full Match Highlights (5th July)",
            "video_image": "./assets/images/match/ac-sac-05.webp",
            "video_url": "https://youtu.be/-smZkpFRwmI?feature=shared"
        },
        {
            "video_title": "India Champions vs West Indies Champions - Full Match Highlights (5th July)",
            "video_image": "./assets/images/match/ic-wic-05.webp",
            "video_url": "https://youtu.be/T8bJexwKEWw?feature=shared"
        },
        {
            "video_title": "Australia Champions vs England Champions - Full Match Highlights (6th July)",
            "video_image": "./assets/images/match/ac-ec-06.webp",
            "video_url": "https://youtu.be/AU4N2nTTygI?feature=shared"
        },
        {
            "video_title": "India Champions vs Pakistan Champions - Full Match Highlights (6th July)",
            "video_image": "./assets/images/match/ic-pc-06.webp",
            "video_url": "https://youtu.be/-TdMtpEjFDw?feature=shared"
        },
        {
            "video_title": "West Indies Champions vs South Africa Champions - Full Match Highlights (7th July)",
            "video_image": "./assets/images/match/wic-sac-07.webp",
            "video_url": "https://youtu.be/RsKyi0JYgFw?feature=shared"
        },
        {
            "video_title": "England Champions vs Pakistan Champions - Full Match Highlights (7th July)",
            "video_image": "./assets/images/match/ec-pc-07.webp",
            "video_url": "https://youtu.be/-JIIelAG1M4?feature=shared"
        },
        {
            "video_title": "India Champions vs Australia Champions - Full Match Highlights (8th July)",
            "video_image": "./assets/images/match/ic-ac-08.webp",
            "video_url": "https://youtu.be/fXE-b6aZELk?feature=shared"
        },
        {
            "video_title": "England Champions vs West Indies Champions - Full Match Highlights (9th July)",
            "video_image": "./assets/images/match/ec-wic-09.webp",
            "video_url": "https://youtu.be/DJUTsaur7BY?feature=shared"
        },
        {
            "video_title": "Pakistan Champions vs South Africa Champions - Full Match Highlights (9th July)",
            "video_image": "./assets/images/match/pc-sac-09.webp",
            "video_url": "https://youtu.be/r40t_rxznWA?feature=shared"
        },
        {
            "video_title": "India Champions vs South Africa Champions - Full Match Highlights (10th July)",
            "video_image": "./assets/images/match/ic-sac-10.webp",
            "video_url": "https://youtu.be/BggptQa3Sz0?feature=shared"
        },
        {
            "video_title": "West Indies Champions vs Australia Champions - Full Match Highlights (10th July)",
            "video_image": "./assets/images/match/wic-ac-10.webp",
            "video_url": "https://youtu.be/2lHWxbo8iU4?feature=shared"
        },
        {
            "video_title": "Pakistan Champions vs West Indies Champions - Semi-Final Highlights (12th July)",
            "video_image": "./assets/images/match/pc-wic-12.webp",
            "video_url": "https://youtu.be/y-UKoRso2O4?feature=shared"
        },
        {
            "video_title": "Australia Champions vs India Champions - Semi-Final Highlights (12th July)",
            "video_image": "./assets/images/match/ac-ic-12.webp",
            "video_url": "https://youtu.be/76NJfPIxIss?feature=shared"
        },
        {
            "video_title": "Pakistan Champions vs India Champions - Final Highlights (13th July)",
            "video_image": "./assets/images/match/pc-ic-13.webp",
            "video_url": "https://youtu.be/CraJy_hGPSk?feature=shared"
        }
    ];

    return (
        <>
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
                                <h1>Wcl Videos</h1>
                            </div>
                        </div>
                        <div className="news-grid">
                            {
                                videos.map((video, index) => {
                                    return (
                                        <VideoCard title={video.video_title} image={video.video_image} url={video.video_url} type="Video"></VideoCard>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer />
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
                width: max-content;
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
                font-family: "Formula Condensed Regular";
                font-size: 16px;
                letter-spacing: 1px;
                text-transform: uppercase;
            }

            .page-headers {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .page-headers h1 {
                color: #ffffff;
                font-family: "Formula Condensed Bold";
                font-weight: 500;
                font-size: 45px;
                letter-spacing: .02em;
                text-transform: uppercase;
            }

            .container-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .container-header h1 {
                color: #ffffff;
                font-family: "Formula Condensed Bold";
                font-weight: 500;
                font-size: 40px;
                letter-spacing: .02em;
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
    )
}

export default Videos
