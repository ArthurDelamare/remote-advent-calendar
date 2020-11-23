import { useState, useEffect } from "react";
import Card from "../components/card";
import Wooden from "../components/wooden";

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
      <Wooden></Wooden>
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