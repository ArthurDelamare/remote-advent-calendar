import { useState, useEffect } from "react";
import Card from "../components/card";

function Calendar() {
  const [card, setCard] = useState(false);

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
    <div className="card">
      <Card ></Card>
    </div>
    

    <style jsx>
      {
        `
        .card {
          margin: 10px;
        }
        `
      }
    </style>
  </div>
  )
}

export default Calendar