import Head from 'next/head';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

function daysUntilChristmas(date){
  const dayOfTheYear = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
  const numberOfDays = new Date().getFullYear() % 4 === 0 ? 366 : 365;
  
  return numberOfDays - dayOfTheYear - 6;
}

export default function Home() {
  const today = new Date();
  const background = today.getMonth() == 11 ? "christmas-bg" : "notxmas-bg";

  return (
    <div className="container">
      <Head>
        <title>Remote Advent Calendar</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preload"
            href="/fonts/MountainsofChristmas.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>

      <div className="calendar">
        <Link href="/calendar">
          <a>Calendrier</a>
        </Link>
      </div>
      <main>
        <div id="mainwrap" className={`col-md-offset-2 text-center ${background}`}>
          <img id="xmasimg" src="/images/rudolph-120px.png"/>
          <div id="sleeps" className="sleep-number">{daysUntilChristmas(today)}</div>
          <div id="text" className="sleep-text">Nuits avant Noël</div>
        </div>
      </main>

      <style jsx>{`
        .container {
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }

        .calendar {
          position: absolute;
          left: 2%;
          top: 2%;
        }

        .calendar a {
          text-decoration: underline;
          color: white;
        }

        .christmas-bg {
          background: repeating-linear-gradient(
          45deg,
          #2ECC71,
          #2ECC71 10px,
          #27AE60 10px,
          #27AE60 20px
        );
        }
        
        .notxmas-bg {
          background: repeating-linear-gradient(
          45deg,
          #34495E,
          #34495E 10px,
          #2C3E50 10px,
          #2C3E50 20px
        );
        }
        
        #mainwrap {
          padding-top: 10px;
          padding-bottom: 60px;
          text-align: center;
        }
        
        .img-center {
            display: block;
            margin-left: auto;
            margin-right: auto;
         }
        
        .sleep-number {
          font-family: 'Montserrat', sans-serif;
          line-height: 1;
        }
        
        @media (min-width: 768px) {
          .sleep-number {
            font-size: 300px;
          }

          .container {
            width: 750px;
          }
        }

        @media (min-width: 992px) {
          .container {
            width: 970px;
          }
        }
        
        @media (max-width: 767px) {
          .sleep-number {
            font-size: 150px;
          }
        }
        
        @media (max-width: 480px) {
          .sleep-number {
            font-size: 90px;
          }
        }
        
        @media (min-width: 481px) {
          .sleep-text {
            font-size: 80px;
          }
        }
        
        @media (max-width: 480px) {
          .sleep-text {
            font-size: 40px;
          }
        }
        
        @media (max-width: 480px) {
          #xmasimg {
            max-width: 200px;
          }
        }
      `}</style>

      <style jsx global>{`
        @font-face {
          font-family: "Mountains of Christmas";
          src: url('/fonts/MountainsofChristmas.ttf');
          font-display: swap;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: 'Mountains of Christmas', cursive;
          color: #ffffff;
          background: #C0392B;
          background: repeating-linear-gradient(
          45deg,
          #E74C3C,
          #E74C3C 10px,
          #C0392B 10px,
          #C0392B 20px);
        }
      `}</style>
    </div>
  )
}
