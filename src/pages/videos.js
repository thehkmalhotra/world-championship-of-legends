import Header from '@/components/Header'
import ArticleCard from '@/components/ArticleCard'
import React from 'react'
import Footer from '@/components/Footer';

const Videos = () => {
    const videos = [
        {
            "video_title": "India Champions vs England Champions - Full Match Highlights (3rd July)",
            "video_image": "https://i.ytimg.com/vi/QWS95Yx4j18/mqdefault.jpg",
            "video_url": "https://youtu.be/QWS95Yx4j18?feature=shared"
        },
        {
            "video_title": "Pakistan Champions vs Australia Champions - Full Match Highlights (3rd July)",
            "video_image": "https://i.ytimg.com/vi/ssU2HPNOSEw/mqdefault.jpg",
            "video_url": "https://youtu.be/ssU2HPNOSEw?feature=shared"
        },
        {
            "video_title": "England Champions vs South Africa Champions - Full Match Highlights (4th July)",
            "video_image": "https://i.ytimg.com/vi/LYVnvT14c24/mqdefault.jpg",
            "video_url": "https://youtu.be/LYVnvT14c24?feature=shared"
        },
        {
            "video_title": "West Indies Champions vs Pakistan Champions - Full Match Highlights (4th July)",
            "video_image": "https://i.ytimg.com/vi/I72n496JzFk/mqdefault.jpg",
            "video_url": "https://youtu.be/I72n496JzFk?feature=shared"
        },
        {
            "video_title": "Australia Champions vs South Africa Champions - Full Match Highlights (5th July)",
            "video_image": "https://i.ytimg.com/vi/-smZkpFRwmI/mqdefault.jpg",
            "video_url": "https://youtu.be/-smZkpFRwmI?feature=shared"
        },
        {
            "video_title": "India Champions vs West Indies Champions - Full Match Highlights (5th July)",
            "video_image": "https://i.ytimg.com/vi/T8bJexwKEWw/mqdefault.jpg",
            "video_url": "https://youtu.be/T8bJexwKEWw?feature=shared"
        },
        {
            "video_title": "Australia Champions vs England Champions - Full Match Highlights (6th July)",
            "video_image": "https://i.ytimg.com/vi/AU4N2nTTygI/mqdefault.jpg",
            "video_url": "https://youtu.be/AU4N2nTTygI?feature=shared"
        },
        {
            "video_title": "India Champions vs Pakistan Champions - Full Match Highlights (6th July)",
            "video_image": "https://i.ytimg.com/vi/-TdMtpEjFDw/mqdefault.jpg",
            "video_url": "https://youtu.be/-TdMtpEjFDw?feature=shared"
        },
        {
            "video_title": "South Africa Champions vs West Indies Champions - Full Match Highlights (7th July)",
            "video_image": "https://i.ytimg.com/vi/RsKyi0JYgFw/mqdefault.jpg",
            "video_url": "https://youtu.be/RsKyi0JYgFw?feature=shared"
        },
        {
            "video_title": "England Champions vs Pakistan Champions - Full Match Highlights (7th July)",
            "video_image": "https://i.ytimg.com/vi/-JIIelAG1M4/mqdefault.jpg",
            "video_url": "https://youtu.be/-JIIelAG1M4?feature=shared"
        },
        {
            "video_title": "Australia Champions vs India Champions - Full Match Highlights (8th July)",
            "video_image": "https://i.ytimg.com/vi/fXE-b6aZELk/mqdefault.jpg",
            "video_url": "https://youtu.be/fXE-b6aZELk?feature=shared"
        },
        {
            "video_title": "West Indies Champions vs England Champions - Full Match Highlights (9th July)",
            "video_image": "https://i.ytimg.com/vi/DJUTsaur7BY/mqdefault.jpg",
            "video_url": "https://youtu.be/DJUTsaur7BY?feature=shared"
        },
        {
            "video_title": "South Africa Champions vs Pakistan Champions - Full Match Highlights (9th July)",
            "video_image": "https://i.ytimg.com/vi/r40t_rxznWA/mqdefault.jpg",
            "video_url": "https://youtu.be/r40t_rxznWA?feature=shared"
        },
        {
            "video_title": "India Champions vs South Africa Champions - Full Match Highlights (10th July)",
            "video_image": "https://i.ytimg.com/vi/BggptQa3Sz0/mqdefault.jpg",
            "video_url": "https://youtu.be/BggptQa3Sz0?feature=shared"
        },
        {
            "video_title": "West Indies Champions vs Australia Champions - Full Match Highlights (10th July)",
            "video_image": "https://i.ytimg.com/vi/2lHWxbo8iU4/mqdefault.jpg",
            "video_url": "https://youtu.be/2lHWxbo8iU4?feature=shared"
        },
        {
            "video_title": "Pakistan Champions vs West Indies Champions - Semi-Final Highlights (12th July)",
            "video_image": "https://i.ytimg.com/vi/y-UKoRso2O4/mqdefault.jpg",
            "video_url": "https://youtu.be/y-UKoRso2O4?feature=shared"
        },
        {
            "video_title": "India Champions vs Australia Champions - Semi-Final Highlights (12th July)",
            "video_image": "https://i.ytimg.com/vi/76NJfPIxIss/mqdefault.jpg",
            "video_url": "https://youtu.be/76NJfPIxIss?feature=shared"
        },
        {
            "video_title": "India Champions vs Pakistan Champions - Final Highlights (13th July)",
            "video_image": "https://i.ytimg.com/vi/CraJy_hGPSk/mqdefault.jpg",
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
                                        <ArticleCard title={video.video_title} image={video.video_image} url={video.video_url} type="Video"></ArticleCard>
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
                grid-template-columns: repeat(4, 1fr);
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
