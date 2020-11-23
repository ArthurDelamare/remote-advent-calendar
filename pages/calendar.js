import { useState, useEffect } from "react";

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
    <div>value: {card.toString()}</div>
    <button onClick={handleClick}>click me</button>
  </div>
  )
}

export default Calendar