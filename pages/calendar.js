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
        <img className="img-fluid m-3" style={{ maxWidth: "-webkit-fill-available" }} src="https://www.nautiljon.com/images/anime/00/08/relife_kanketsu-hen_6880.jpg"/>
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
        <img className="img-fluid m-3" style={{ maxWidth: "-webkit-fill-available" }} src="https://www.manga-news.com/public/images/dvd/Toradora-anime.jpg"/>
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
    },
    {
      number: 4,
      box: "box4",
      title: "Mage & Demon Queen",
      body:
      <div>
        <img className="img-fluid m-3" style={{ maxWidth: "-webkit-fill-available" }} src="https://yurireviewsandmore.files.wordpress.com/2020/01/unbenannt-1.png"/>
        <p className="text-justify m-3">A mon tour de te proposer un Webtoon ! C'est une découverte très récente
        et je l'adore. L'environnement de l'histoire est très classique avec une héroïne et une reine des démons,
        une tour des démons avec beaucoup d'étages et l'objectif est d'arriver au dernier étage pour terrasser la reine des démons.
        La grosse différence c'est que l'héroïne ne cherche pas à battre la reine des démons, bien au contraire !
        Son but est de conquérir le coeur de la reine des démons et elle grimpe tous les étages à chaque fois pour lui
        déclarer sa flamme. C'est super marrant à lire ! Je ne vais pas te mentir, je viens de lire 70 scans en une journée !
        Super bonne journée à toi, je t'adore !</p>
          <a className="m-3" href="https://www.webtoons.com/fr/fantasy/mage-and-demon-queen/list?title_no=1827" target="_blank">Clique ici pour voir le Webtoon.</a>
      </div>
    },
    {
      number: 5,
      box: "box5",
      title: "Citation",
      body:
      <div>
        <img className="img-fluid m-3" style={{ maxWidth: "-webkit-fill-available" }} src="https://i.pinimg.com/736x/88/20/6d/88206d67c4659be098117d09791d88f1.jpg"/>
        <p className="text-justify m-3">Jour numéro 5, c'est l'heure d'une citation que moi aussi, j'aime beaucoup.
        Elle symbolise une philosophie de vie qui est nécessaire si nous ne voulons pas nous morfondre continuellement sur
        nos problèmes. L'important est de trouver une solution, de parler, de s'exprimer d'une quelconque façon et d'arriver à progresser.
        Il faut toujours aller de l'avant !</p>
        <p className="text-justify m-3">Bonne journée et bon week-end !</p>
      </div>
    },
    {
      number: 6,
      box: "box6",
      title: "L'Attaque des Titans",
      body:
      <div>
        <img className="img-fluid m-3" style={{ maxWidth: "-webkit-fill-available" }} src="https://global-img.gamergen.com/l-attaque-des-titans-shingeki-no-kyojin-final-season-key-art_0000963504.jpg"/>
        <p className="text-justify m-3">C'est aujourd'hui que sort la saison 4 de L'Attaque des Titans !!! Bien sûr, ce ne sera pas possible
        pour nous de regarder le premier épiosde aujourd'hui car nous ne sommes pas abonnés... Mais, le trailer est accessible et tu peux le voir facilement.
        Je ne vais pas te présenter l'animé car tu le connais déjà bien. Voilà voilà, j'ai trop hâte de le regarder !</p>
        <a className="m-3" href="https://www.youtube.com/watch?v=KnpVhlDoogM" target="_blank">Clique ici pour voir le trailer.</a>
      </div>
    },
    {
      number: 7,
      box: "box7",
      title: "L'exoconférence",
      body:
      <div>
        <img className="img-fluid m-3" style={{ maxWidth: "-webkit-fill-available" }} src="https://statics-media.streamcomplet.nu/films/300x450/AwvzM0AhNZCu1nXdydvd83y0nOF.jpg"/>
        <p className="text-justify m-3">Pour ce septième jour, je te présente l'Exoconférence d'Alexandre Astier.
        C'est une pièce de théâte moderne sur le thème de la science, il y a beaucoup d'humour et c'est super bien joué !!!
        Franchement, j'adore la regarder au moins une fois par an et je me régale à chaque fois. C'est fait par l'acteur principal
        de Kaamelott mais tu n'as sûrement jamais regarder cette série non plus. Bon visionnage !</p>
        <a className="m-3" href="https://wwv.streamcomplet.nu/films/alexandre-astier-lexoconference" target="_blank">Clique ici pour voir l'Exoconférence.</a>
      </div>
    },
    {
      number: 8,
      box: "box8",
      title: "Agents très spéciaux, Code U.N.C.L.E",
      body:
      <div>
        <img className="img-fluid m-3" style={{ maxWidth: "-webkit-fill-available" }} src="https://fr.web.img5.acsta.net/pictures/15/07/30/13/01/266725.jpg"/>
        <p className="text-justify m-3">Petit film d'espionnage car il faut bien un peu d'action. Dans ce film, tu
        retrouveras un mélange classique d'espions américains, russes et britaniques qui se battent pour des enjeux
        internationaux. C'est classique, plaisant et en prime, tu as de beaux et talentueux acteurs/actrices.
        Disponible sur Netflix, que demande le peuple ?</p>
        <a className="m-3" href="https://www.netflix.com/title/80013274" target="_blank">Clique ici pour voir le film.</a>
      </div>
    },
    {
      number: 9,
      box: "box9",
      title: "Fall Guys, 1/2",
      body:
      <div>
        <img className="img-fluid m-3" style={{ maxWidth: "-webkit-fill-available" }} src="https://s1.gaming-cdn.com/images/products/7281/orig/fall-guys-ultimate-knockout-cover.jpg"/>
        <p className="text-justify m-3">Première partie d'un gros cadeau dans le calendrier de l'avent ! Cette case te donne
        un premier jeton pour avoir le jeu "Fall Guys". Il faut deux jetons pour obtenir le code d'accès au jeu (le deuxième jeton arrivera
        dans les prochains jours). Si tu ne connais pas le jeu, c'est un jeu super sympa que tu vas adorer : un mélange de parcours et
        de Battle Royal. Je te laisse regarder quelques vidéos sur YouTube pour en savoir un peu plus. Bonne journée !!!</p>
      </div>
    },
    {
      number: 10,
      box: "box10",
      title: "Epic music",
      body:
      <div>
        <img className="img-fluid m-3" style={{ maxWidth: "-webkit-fill-available" }} src="https://i1.sndcdn.com/artworks-000490273053-rhassk-t500x500.jpg"/>
        <p className="text-justify m-3">Aujourd'hui, un condensé de musiques épiques pour se donner un giga boost de motivation.
        La vidéo date un peu mais c'est encore la meilleure à ce jour : musique épique et cinématique du début à la fin. Enjoy !</p>
        <a className="m-3" href="https://www.youtube.com/watch?v=WU7SGn0MeP0" target="_blank">Clique ici pour écouter la musique et voir les cinématiques.</a>
      </div>
    },
    {
      number: 11,
      box: "box11",
      title: "Honest Men",
      body:
      <div>
        <img className="img-fluid m-3" style={{ maxWidth: "-webkit-fill-available" }} src="https://img.discogs.com/4wGfPcA_bGn9PIchFGENEBNtyXk=/600x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-3357820-1449582380-6974.jpeg.jpg"/>
        <p className="text-justify m-3">Janet Devlin est une artiste que j'apprécie beaucoup, elle fait majoritairement des covers
        mais, des créations se sont récemment ajoutées à son répertoire et Honest Men en fait partie. Je te laisse écouter et je peux
        te recommander d'autres de ses chansons si tu aimes. Bonne journée !</p>
        <a className="m-3" href="https://www.youtube.com/watch?v=w79qlLPsaPk&list=LL&index=36" target="_blank">Clique ici pour écouter la musique.</a>
      </div>
    }
  ];

  for(let i = 12; i < 26; i++) {
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