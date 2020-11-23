export default function Wooden() {

  return (
    <div className="container hole">


      <style jsx>
        {
          `
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 400px;
            width: 200px;
            background-color: #DAB891;
            box-shadow: 0px 0px 1px 3px rgba(68,55,38,1);
            position: relative;
          }

          .container::after {
            content : '';
            position: absolute;
            top: 0;
            display: inline-block;
          }

          .hole::after {
            width: 5em;
            height: 3em;
            border-bottom-left-radius: 3em;
            border-bottom-right-radius: 3em;
            background: #443726;
          }
          `
        }
      </style>
    </div>
  );
};