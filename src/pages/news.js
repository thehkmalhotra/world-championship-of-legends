import ArticleCard from '@/components/ArticleCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

const News = () => {
    const news = [
        {
            "news_title": "Cricket Legends to Illuminate Edgbaston in Prestigious ECB-Sanctioned T20 Extravaganza | Republic World",
            "news_image": "https://img.republicworld.com/rimages/Untitleddesign31-170637096365516_9.webp",
            "news_url": "https://www.republicworld.com/sports/cricket/cricket-legends-to-illuminate-edgbaston-in-prestigious-ecb-sanctioned-t20-extravaganza/"
        },
        {
            "news_title": "Yuvraj Singh to feature in World Championship of Legends | More sports News - Times of India",
            "news_image": "https://static.toiimg.com/thumb/msid-107198065,width-1070,height-580,imgsize-46906,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "news_url": "https://timesofindia.indiatimes.com/sports/more-sports/others/yuvraj-singh-to-feature-in-world-championship-of-legends/articleshow/107198063.cms"
        },
        {
            "news_title": "Yuvraj, Raina, Lee to be part of ECB-sanctioned T20 tournament | Crickit",
            "news_image": "https://www.hindustantimes.com/ht-img/img/2024/02/01/1600x900/_ed6c2494-f8d0-11ea-b206-fe77f4f0660e_1706782830040.jpg",
            "news_url": "https://www.hindustantimes.com/cricket/yuvraj-singh-shahid-afridi-kevin-pietersen-to-be-part-of-ecb-sanctioned-t20-tournament-101706521517282.html"
        },
        {
            "news_title": "Brett Lee and Yuvraj Singh to play in Ajay Devgn's Grand T20 cricket extravaganza in Birmingham | Republic World",
            "news_image": "https://img.republicworld.com/rimages/Addaheading-2024-02-01T134907.826-170677572069416_9.webp",
            "news_url": "https://www.republicworld.com/sports/cricket/brett-lee-and-yuvraj-singh-to-play-in-ajay-devgn-s-grand-t20-cricket-extravaganza-in-birmingham"
        },
        {
            "news_title": "Ajay Devgan made strategic investment in WCL Dubai - Emirates 7 TV",
            "news_image": "https://emirates7.tv/wp-content/uploads/2024/02/WCL-683x1024.webp",
            "news_url": "https://emirates7.tv/ajay-devgan-made-strategic-investment-in-wcl-dubai/"
        },
        {
            "news_title": "Ajay Devgn expresses his love for cricket as he invests in World Championship of Legends",
            "news_image": "https://dubainewsweek.com/wp-content/uploads/2024/02/Ajay-Devgn-Image.webp",
            "news_url": "https://dubainewsweek.com/ajay-devgn-cricket-world-championship-of-legends/"
        },
        {
            "news_title": "World Champions of Legends tournament attracts big stars - News | Khaleej Times",
            "news_image": "https://image.khaleejtimes.com/?uuid=02384262-e973-5b86-94ed-527552b49159&function=fit&type=preview&source=false&q=75&maxsize=1500&scaleup=0",
            "news_url": "https://www.khaleejtimes.com/sports/cricket/world-champions-of-legends-tournament-attracts-big-stars"
        },
        {
            "news_title": "Bollywood star Ajay Devgan invests in World Championship Of Legends to be held in England",
            "news_image": "https://uaenews4u.com/wp-content/uploads/2024/02/04-1.jpg?w=763&h=1&crop=1",
            "news_url": "https://uaenews4u.com/2024/02/02/bollywood-star-ajay-devgan-invests-in-world-championship-of-legends-to-be-held-in-england/"
        },
        {
            "news_title": "Bollywood star Ajay Dev Gan invests in World Championship Of Legends to be held in England | UAE News 24/7",
            "news_image": "https://uaenews247.com/wp-content/uploads/2024/02/04-2.jpg",
            "news_url": "https://uaenews247.com/2024/02/02/bollywood-star-ajay-devgan-invests-in-world-championship-of-legends-to-be-held-in-england/"
        },
        {
            "news_title": "Former England Captains Kevin Pietersen & Ian Bell to be a part of World Championship of Legends | Republic World",
            "news_image": "https://img.republicworld.com/rimages/239947-170204342825816_9.webp",
            "news_url": "https://www.republicworld.com/sports/cricket/former-england-captains-kevin-pietersen-ian-bell-to-be-a-part-of-world-championship-of-legends/"
        },
        {
            "news_title": "World Championship of Legends: Veterans to represent their country in fresh format",
            "news_image": "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240418101816.jpg",
            "news_url": "https://aninews.in/news/sports/cricket/world-championship-of-legends-veterans-to-represent-their-country-in-fresh-format20240418160550/"
        },
        {
            "news_title": "Tim Paine, Brett Lee, and Shaun Marsh back in action in World Championship of Legends | Republic World",
            "news_image": "https://img.republicworld.com/rimages/whatsappimage2024-04-08at5.16.01pm_16:9-171260244851216_9.webp",
            "news_url": "https://www.republicworld.com/sports/cricket/tim-paine-brett-lee-and-shaun-marsh-back-in-action-in-world-championship-of-legends/"
        },
        {
            "news_title": "World Championship of Legends unveils action-packed schedule including India-Pakistan encounter",
            "news_image": "https://media.crictracker.com/media/attachments/1690384163599_White-Cricket-ball.jpeg",
            "news_url": "https://www.crictracker.com/cricket-news/world-championship-of-legends-unveils-action-packed-schedule-including-india-pakistan-encounter/"
        },
        {
            "news_title": "Yuvraj, Raina, Lee to be part of ECB-sanctioned T20 tournament | Crickit",
            "news_image": "https://www.hindustantimes.com/ht-img/img/2024/02/01/1600x900/_ed6c2494-f8d0-11ea-b206-fe77f4f0660e_1706782830040.jpg",
            "news_url": "https://www.hindustantimes.com/cricket/yuvraj-singh-shahid-afridi-kevin-pietersen-to-be-part-of-ecb-sanctioned-t20-tournament-101706521517282.html"
        },
        {
            "news_title": "Ajay Devgn joins forces with WCL: T20 Cricket Tournament in July, UK : Bollywood News - Bollywood Hungama",
            "news_image": "https://media5.bollywoodhungama.in/wp-content/uploads/2024/02/Ajay_Devgn_WCP.jpeg",
            "news_url": "https://www.bollywoodhungama.com/news/bollywood/ajay-devgn-joins-forces-wcl-t20-cricket-tournament-july-uk/"
        },
        {
            "news_title": "Yuvraj Singh, Shahid Afridi, and Kevin Pietersen to illuminate Edgbaston in prestigious ECB-Sanctioned T20 extravaganza - SportsTak",
            "news_image": "https://cf-img-a-in.tosshub.com/lingo/stak/images/story/202401/20240127t083158773z944260.jpg",
            "news_url": "https://m.thesportstak.com/cricket-news/yuvraj-singh-shahid-afridi-and-kevin-pietersen-to-illuminate-edgbaston-in-prestigious-ecb-sanctioned-t20-extravaganza"
        },
        {
            "news_title": "How World Championship Of Legends Will Change Legends Cricket Forever",
            "news_image": "https://media.assettype.com/outlookindia/import/uploadimage/library/16_9/16_9_5/IMAGE_1656995552.webp?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
            "news_url": "https://www.outlookindia.com/sports/cricket/world-championship-of-legends-encouraging-veterans-to-represent-their-country-in-a-fresh-format"
        },
        {
            "news_title": "World Championship of Legends will change Legends Cricket forever | More sports News - Times of India",
            "news_image": "https://static.toiimg.com/thumb/msid-109410743,width-1070,height-580,imgsize-53208,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "news_url": "https://timesofindia.indiatimes.com/sports/more-sports/world-championship-of-legends-will-change-legends-cricket-forever/articleshow/109410733.cms"
        },
        {
            "news_title": "World cricket legends to hit Edgbaston this July - Edgbaston",
            "news_image": "https://assets.edgbaston.com/wp-content/uploads/2024/04/Pietersen-Kallis-WCL.jpg",
            "news_url": "https://edgbaston.com/news/world-cricket-legends-to-hit-edgbaston-this-july/"
        },
        {
            "news_title": "World Championship of Legends to Bring Back the ‘Classic Bowl Out’ Format In its Inaugural Season | Republic World",
            "news_image": "https://img.republicworld.com/all_images/team3-1719256521631-16_9.webp",
            "news_url": "https://www.republicworld.com/sports/cricket/world-championship-of-legends-to-bring-back-the-classic-bowl-out-format-in-its-inaugural-season"
        },
        {
            "news_title": "Chris Gayle to lead West Indies Champions in World Championship of Legends 2024",
            "news_image": "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240611091703.jpg",
            "news_url": "https://www.aninews.in/news/sports/cricket/chris-gayle-to-lead-west-indies-champions-in-world-championship-of-legends-202420240611144717"
        },
        {
            "news_title": "World Championship of Legends 2024: Which teams have qualified for the semifinals of legends league? | Sporting News India",
            "news_image": "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2024-07/GettyImages-1204966731.jpg?h=a375be57&itok=2FxpCENO",
            "news_url": "https://www.sportingnews.com/in/cricket/news/world-championship-legends-2024-which-teams-have-qualified-semifinals-legends-league/755743ffcde8fa4d9c4f44e8"
        },
        {
            "news_title": "World Championship of Legends SCORE: India Champions beat England, Pakistan Champions beat Australia in Birmingham - India Today",
            "news_image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/yuvraj-singh-and-harbhajan-041010730-16x9_0.jpg?VersionId=NPEA8gVGIvm1SJ.1lkPRSr4PWvfD4UpZ",
            "news_url": "https://www.indiatoday.in/sports/cricket/story/world-championship-of-legends-results-score-india-vs-england-pakistan-vs-australia-birmingham-2562167-2024-07-04"
        },
        {
            "news_title": "India Champions beat Pakistan Champions to clinch 2024 World Championship of Legends title | Cricket News - Times of India",
            "news_image": "https://static.toiimg.com/thumb/msid-111719698,width-1070,height-580,imgsize-53214,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "news_url": "http://toi.in/G0StYa"
        },
        {
            "news_title": "WCL Became 2nd most Watched franchise cricket Globally | Republic World",
            "news_image": "https://img.republicworld.com/all_images/wcl-became-2nd-most-watched-franchise-cricket-globally-1722441487813-16_9.webp",
            "news_url": "https://www.republicworld.com/sports/wcl-became-2nd-most-watched-franchise-cricket-globally"
        },
        {
            "news_title": "World Championship of Legends Strengthens Player Eligibility Requirements for Upcoming Season | Republic World",
            "news_image": "https://img.republicworld.com/all_images/wcl-owners-1724934410678-16_9.webp",
            "news_url": "https://www.republicworld.com/sports/cricket/world-championship-of-legends-strengthens-player-eligibility-requirements-for-upcoming-season"
        },
        {
            "news_title": "Irfan Pathan, Ajay Devgan Announces Season 2 Of World Championship Of Legends",
            "news_image": "https://static.toiimg.com/thumb/msid-114976074,width-400,resizemode-4/114976074.jpg",
            "news_url": "https://timesofindia.indiatimes.com/sports/off-the-field/irfan-pathan-ajay-devgan-announces-season-2-of-world-championship-of-legends/amp_articleshow/114976087.cms"
        },
        {
            "news_title": "World Championship of Legends Season 2 announced: Defending champions India to face Pakistan in July",
            "news_image": "https://cf-img-a-in.tosshub.com/lingo/stak/images/story/202412/676a68e4f037f-flags-representing-india-and-pakistan-on-the-field-245509449-16x9.jpg?size=1200:800",
            "news_url": "https://thesportstak.com/cricket/story/world-championship-of-legends-season-2-announced-defending-champions-india-to-face-pakistan-in-july-3152209-2024-12-24"
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
                                <li>Articles</li>
                            </ul>
                            <div className="page-headers">
                                <h1>WCL News</h1>
                            </div>
                        </div>
                        <div className="news-grid">
                            {
                                news.reverse().map((article, index) => {
                                    return (
                                        <ArticleCard title={article.news_title} image={article.news_image} url={article.news_url} type="Article " key={index}></ArticleCard>
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

export default News;