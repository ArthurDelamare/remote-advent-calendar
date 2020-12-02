import dynamic from "next/dynamic";
import Head from "next/head";

import Wooden from "../components/wooden";

const Snow = dynamic(() => import("react-snow-effect"), { ssr: false });

function Calendar() {

  const boxes = [
    {
      number: 1,
      box: "box1",
      title: "ReLIFE",
      body: 
      <div>
        <img className="img-fluid m-3" src="https://cdn.myanimelist.net/images/manga/2/171573.jpg"/>
        <p className="text-justify m-3">C'est le tout début du calendrier de l'avent, profite bien ! 
        Pour commencer, voici un animé bien sympa : ReLIFE. C'est l'histoire d'un garçon de 27 ans et sans 
          emploi du nom de Araka. Il enchaîne les échecs lors de ces entretiens et va rencontrer une entreprise
          lui proposant une seconde vie, une sorte de retour en arrière en prenant un médicament qui lui donne
          l'apparence de ses 17 ans. Ainsi, il va retourner au lycée et tenter de corriger ses erreurs.</p>
        <a className="m-3" href="https://m.adkami.com/anime/1804" target="_blank">Clique ici pour voir l'animé.</a>
      </div>
    },
    {
      number: 2,
      box: "box2",
      title: "Toradora",
      body:
      <div>
        <img className="img-fluid m-3" src="https://cdn.myanimelist.net/images/anime/13/22128.jpg"/>
        <p className="text-justify m-3">Pour le deuxième jour, un deuxième animé ! Ryuuji est un élève japonais qui vient 
          d'entrer en terminale et il a un problème majeur : ses yeux intimidants. A cause de ça, il a
          beaucoup de mal à se faire des amis et encore plus à se trouver une petite amie (et il est même pris
          pour un délinquant)... Je ne peux pas trop te dévoiler l'histoire au risque de te spoil mais, il s'en suit un développement 
          intéressant avec plusieurs personnages et la situation de Ryuuji va évoluer au fil du temps. 
          L'animé est axé romance et tranche de vie, parfait pour se détendre après les cours. 
          Rien qu'en y pensant, je pense le regarder à nouveau !</p>
          <a className="m-3" href="https://m.adkami.com/anime/587" target="_blank">Clique ici pour voir l'animé.</a>
      </div>
    },
    {
      number: 3,
      box: "box3",
      title: "L'ascension",
      body:
      <div>
        <img className="img-fluid m-3" style={{ maxWidth: "-webkit-fill-available" }} src="https://fr.web.img5.acsta.net/pictures/17/01/26/13/22/394590.jpg"/>
        <p className="text-justify m-3">« Pour toi, je pourrais gravir l’Everest !» Ce sont les mots de Samy, un 
        garçon venant de la banlieue du 93, là où le taux de chomage est le plus élevé. Il n'aurait jamais cru
        en prononçant ces mots qu'il aurait réellement besoin de gravir l'Everest - la plus haute montage au monde - 
        pour conquérir le coeur de sa promise. Ce film est un film français qui vient d'apparaître sur Netflix et
        franchement, c'est si mignon que je ne peux que te le recommander. Emouvant et beau, autant par les paysages
        que par cette décision romantique, j'ai adoré ! J'espère que tu aimeras aussi, bon visionnage et surtout,
        bonne journée à toi !!!</p>
          <a className="m-3" href="https://www.netflix.com/title/80194671" target="_blank">Clique ici pour voir le film.</a>
      </div>
    }
  ];

  for(let i = 4; i < 26; i++) {
    boxes.push({number: i, box: `box${i}`});
  }

  return (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
    </Head>

    <Snow />
    <div className="container">
      <section id="boxes">
      {boxes.map((value, index) => {
        return (
          <div className={value.box} key={index}>
            <Wooden number={value.number} title={value.title} body={value.body}></Wooden>
          </div>
          )
      })}
    </section>
    </div>
    
    

    <style jsx>
      {
        `
        .container {
          margin: 10px auto;
          width: 60%;
          background-color: #DAB891;
          padding-top: 1px;
          padding-bottom: 1px;
        }

        #boxes {
          display: grid;
          width: 100%;  
          margin: 2% auto;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(7, 100px);
          grid-gap: 12px;
          grid-template-areas: 
                        "box1 box2 box3 box4 box5"
                        "box1 box7 box8 box4 box5"
                        "box6 box7 box8 box9 box10"
                        "box11 box12 box13 box14 box15"
                        "box11 box17 box18 box19 box20"
                        "box16 box17 box18 box24 box25"
                        "box21 box22 box23 box24 box25"
                        "box21 box22 box23 box24 box25"
                        "box21 box22 box23 box24 box25";
        }
        section {
          padding: 4px;
          background-color: #DAB891;
        }
        
        .box1 {
          grid-area: box1;
        }

        .box2 {
          grid-area: box2;
        }
        .box3 {
          grid-area: box3;
        }
        .box4 {
          grid-area: box4;
        }
        .box5 {
          grid-area: box5;
        }
        .box6 {
          grid-area: box6;
        }
        .box7 {
          grid-area: box7;
        }
        .box8 {
          grid-area: box8;
        }
        .box9 {
          grid-area: box9;
        }
        .box10 {
          grid-area: box10;
        }
        .box11 {
          grid-area: box11;
        }
        .box12 {
          grid-area: box12;
        }
        .box13 {
          grid-area: box13;
        }
        .box14 {
          grid-area: box14;
        }
        .box15 {
          grid-area: box15;
        }
        .box16 {
          grid-area: box16;
        }
        .box17 {
          grid-area: box17;
        }
        .box18 {
          grid-area: box18;
        }
        .box19 {
          grid-area: box19;
        }
        .box20 {
          grid-area: box20;
        }
        .box21 {
          grid-area: box21;
        }
        .box22 {
          grid-area: box22;
        }
        .box23 {
          grid-area: box23;
        }
        .box24 {
          grid-area: box24;
        }
        .box25 {
          grid-area: box25;
        }
        `
      }
    </style>

    <style jsx global>
    {
      `
        body {
          background: #2C3E50;
        }
      `
    }
    </style>
  </div>
  )
}

export default Calendar