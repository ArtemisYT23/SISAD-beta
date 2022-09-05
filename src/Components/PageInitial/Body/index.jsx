import "../../../Styles/PageInitial/Body/Body.css";
import { Siguiente } from "../../../Styles/PageInitial/Icons/PageInitial/Body";

const Body = () => {
  return (
    <div className="Container">
      <div className="Card">
        <div className="TextTitle">
          <span>¿Se te perdio un documento importante? !NUNCA MÁS!</span>
        </div>
        <br />
        <div className="TextSubtitle">
          <span>
            En CentralFile nos encargamos de respaldar y custodiar tus
            documentos mas importantes. Asi los tienes disponibles cada vez que
            los necesites.
          </span>
        </div>
        <div className="Siguiente">
          <a href="/">Conoce más</a>
          <Siguiente x={30} y={30} fill={"#fff"}/>
        </div>
      </div>
    </div>
  );
};

export default Body;
