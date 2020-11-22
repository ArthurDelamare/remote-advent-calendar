import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="mainwrap" className="col-md-8 col-md-offset-2 text-center">
          <img id="xmasimg" src="https://dl.dropboxusercontent.com/s/5uqou2o4ya9agh1/bell-120px.png"/>
          <div id="sleeps" className="sleep-number">-</div>
          <div id="text" className="sleep-text">Nuits avant Noël</div>
        </div>
      </main>

      <style jsx>{`
        body {
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
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
