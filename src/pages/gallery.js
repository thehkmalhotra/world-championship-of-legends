import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import React from 'react'

const Gallery = ({ canonical_link, meta_title, meta_description, meta_keywords }) => {
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
          <div className="gallery-container">
            <div className="gallery-header-container">
              <ul>
                <li>Homepage &gt;</li>
                <li>Gallery</li>
              </ul>
              <div className="page-headers">
                <h1>WCL Cricket Gallery 2025</h1>
              </div>
            </div>
            <div className="gallery-grid">
              {Array.from({ length: 91 }, (_, i) => (
                <img key={i} src={`/assets/images/gallery/gallery-image-${i + 1}.webp`} alt={`Gallery Image ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <style jsx>{`
        .gallery-container {
            width: 100%;
            max-width: 1280px;
            padding: 0 20px;
            margin: auto;
            display: flex;
            flex-direction: column;
            gap: 100px;
            margin-top: 80px;
        }

        .gallery-header-container {
            width: max-content;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .gallery-header-container ul {
            display: flex;
            gap: 5px;
            list-style: none;
        }

        .gallery-header-container ul li {
            color: #ABB1CB;
            font-family: "Poppins Regular";
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
            font-family: "Poppins Bold";
            font-weight: 500;
            font-size: 45px;
            letter-spacing: .02em;
            text-transform: uppercase;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        @media screen and (max-width: 1023px) {
            .gallery-grid {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        .gallery-grid img {
            width: 100%;
            height: 320px;
            object-fit: cover;
            border-radius: 20px;
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      canonical_link: `https://${req.headers.host}${req.url}`,
      meta_title: "WCL Cricket Gallery 2025 | World Championship Photos - WCL T20",
      meta_description: "Browse the WCL Cricket Gallery 2025! Stunning World Championship photos of legends like Yuvraj Singh at Edgbaston. See now!",
      meta_keywords: "WCL Cricket Gallery 2025, World Championship Photos, Edgbaston, Northampton, WCL T20"
    }
  }
}

export default Gallery