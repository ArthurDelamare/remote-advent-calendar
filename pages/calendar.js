import { useState, useEffect } from "react";
import Card from "../components/card";
import Wooden from "../components/wooden";

function Calendar() {
  const [card, setCard] = useState(false);

  const boxes = [];

  for(let i = 1; i < 26; i++) {
    boxes.push({number: i, box: `box${i}`});
  }

  useEffect(() => {
    const cardValue = localStorage.getItem("card");
    if (cardValue){
      setCard(cardValue);
      console.log(card);
    }
  }, []);

  function handleClick() {
    localStorage.setItem("card", true);
    setCard(true);
  }


  return (
  <div>
    <div className="container">
      <section id="boxes">
      {boxes.map((value, index) => {
        return <div className={value.box} key={index}><Wooden number={value.number}></Wooden></div>
      })}
    </section>
    </div>
    

    <style jsx>
      {
        `
        .container {
          margin: 0 auto;
          width: 60%;
        }

        .card {
          height: 300px;
          width: 150px;
          margin: 10px;
        }

        .box1 {
          grid-area: box1;
          background: rgb(108, 108, 199);
        }

        #boxes {
          display: grid;
          width: 83%;  
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
          /* background: #2e313d; */
          padding: 4px;
          background-color: #DAB891;
        }
        
          .box2 {
            grid-area: box2;
            background: rgb(138, 209, 182);
          }
          .box3 {
            grid-area: box3;
            background: rgb(209, 184, 138);
          }
          .box4 {
            grid-area: box4;
            background: rgb(203, 138, 209);
          }
          .box5 {
            grid-area: box5;
            background: rgb(138, 138, 209);
          }
          .box6 {
            grid-area: box6;
            background: rgb(194, 209, 138);
          }
          .box7 {
            grid-area: box7;
            background: rgb(138, 109, 141);
          }
          .box8 {
            grid-area: box8;
            background: rgb(141, 127, 62);
          }
          .box9 {
            grid-area: box9;
            background: rgb(194, 209, 138);
          }
          .box10 {
            grid-area: box10;
            background: rgb(138, 209, 182);
          }
          .box11 {
            grid-area: box11;
            background: rgb(138, 109, 141);
          }
          .box12 {
            grid-area: box12;
            background: rgb(243, 143, 143);
          }
          .box13 {
            grid-area: box13;
            background: rgb(143, 228, 243);
          }
          .box14 {
            grid-area: box14;
            background: rgb(203, 138, 209);
          }
          .box15 {
            grid-area: box15;
            background: rgb(175, 243, 143);
          }
          .box16 {
            grid-area: box16;
            background: rgb(141, 127, 62);
          }
          .box17 {
            grid-area: box17;
            background: rgb(138, 209, 182);
          }
          .box18 {
            grid-area: box18;
            background: rgb(243, 143, 143);
          }
          .box19 {
            grid-area: box19;
            background: rgb(138, 109, 141);
          }
          .box20 {
            grid-area: box20;
            background: rgb(203, 138, 209);
          }
          .box21 {
            grid-area: box21;
            background: rgb(141, 127, 62);
          }
          .box22 {
            grid-area: box22;
            background: rgb(138, 209, 182);
          }
          .box23 {
            grid-area: box23;
            background: rgb(194, 209, 138);
          }
          .box24 {
            grid-area: box24;
            background: rgb(243, 143, 143);
          }
          .box25 {
            grid-area: box25;
            background: rgb(216, 243, 143);
          }
        `
      }
    </style>
  </div>
  )
}

export default Calendar