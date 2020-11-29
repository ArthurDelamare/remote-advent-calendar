import { useState, useEffect } from "react";

export default function Wooden(props) {
  const [card, setCard] = useState(false);

  useEffect(() => {
    const cardValue = localStorage.getItem("card" + props.number);
      setCard(cardValue === 'true');
      console.log(card + " - " + cardValue);
  }, []);

  function handleClick() {
    console.log("clicked");
    localStorage.setItem("card" + props.number, true);
    setCard(true);
  }

  function componentIfAllowed() {
    return (
      <div className="container hole" onClick={handleClick}>
      <div className="day">{props.number}</div>

      <style jsx>
        {
          `
          .container {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            background-color: #DAB891;
            box-shadow: 0px 0px 1px 3px rgba(68,55,38,1);
            position: relative;
          }

          .container:hover {
            box-shadow: 0px 0px 1px 3px #5E4C35;
          }

          .container::after {
            content : '';
            position: absolute;
            top: 0;
            display: inline-block;
          }

          .hole::after {
            width: 3em;
            height: 2em;
            border-bottom-left-radius: 3em;
            border-bottom-right-radius: 3em;
            background: #443726;
          }

          .hole:hover::after {
            background: #5E4C35;
          }

          .day {
            color: white;
            font-size: x-large;
            font-family: 'Mountains of Christmas', cursive;
          }
          `
        }
      </style>
    </div>
    );
  }

  function componentIfNotAllowed() {
    return (
      <div className="container empty">

        <style jsx>
          {
            `
              .container {
                height: 100%;
                width: 100%;
              }

              .empty {
                background-color: #443726;
              }
            `
          }
        </style>
      </div>
    );
  }

  if(card) {
    return componentIfNotAllowed()
  }

  return componentIfAllowed();
};