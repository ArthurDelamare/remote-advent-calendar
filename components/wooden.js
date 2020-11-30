import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Wooden(props) {
  const [card, setCard] = useState(false);
  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
  } 

  useEffect(() => {
    const cardValue = localStorage.getItem("card" + props.number);
      setCard(cardValue === 'true');
  }, []);

  function handleClick() {
    localStorage.setItem("card" + props.number, true);
    setCard(true);
    setShow(!show);
    console.log("clicked : " + show);
  }

  function isAllowed() {
    const boxDate = new Date(2020, 11, props.number);
    const now = new Date();

    return now > boxDate;
  }

  function modal() {

    let title = "Ce n'est pas encore l'heure !"
    let body = "N'essaie pas de tricher, tu sais bien que ce n'est pas le bon jour.";

    if (true) {
      title = props.title;
      body = props.body;
    }

    return(
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Jour {props.number} - {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function componentIfNotOpened() {
    return (
    <div className="container hole" onClick={handleClick}>
      <div className="day">{props.number}</div>

      {modal()}

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

  function componentIfAlreadyOpened() {
    return (
      <div className="container empty" onClick={handleClick}>

        {modal()}

        <style jsx>
          {
            `
              .container {
                cursor: pointer;
                height: 100%;
                width: 100%;
              }

              .empty {
                background-color: #443726;
              }

              .empty:hover {
                background-color: #5E4C35;
              }
            `
          }
        </style>
      </div>
    );
  }

  if(card) {
    return componentIfAlreadyOpened()
  }

  return componentIfNotOpened();
};