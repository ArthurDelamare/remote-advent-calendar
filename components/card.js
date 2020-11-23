export default function Card(props) {


  return (
    <div className="container">
      <div className="locked-background forty-five">

      </div>
      <style jsx>
        {
          `
          .container {
            width: ${props.width || '300px'};
            height: ${props.height || '200px'};
          }

          .locked-background {
            background-color: #E74C3C;
            width: 100%;
            height: 100%;
            background: linear-gradient(-135deg, transparent 1.5em, #C0392B 0);
            border-radius: 5px;
            position: relative;
          }

          .locked-background::after {
            content : '';
            position: absolute;
            top: 0;
            right: 0;
            display: inline-block;
          }

          .forty-five::after {
            width: 2.13em;
            height: 2.13em;
            background: linear-gradient(-135deg, transparent 1.5em, #f06254 0);
            border-bottom-left-radius: 5px;
          }
          `
        }
      </style>
    </div>
  );
}