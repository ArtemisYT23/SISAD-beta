import "../../../Styles/PageInitial/Scrool/Scrool.css";
import { Obrero } from "../../../Styles/PageInitial/Icons/PageInitial/Scrool";
import { Siguiente } from "../../../Styles/PageInitial/Icons/PageInitial/Body";

const  Scrool = () => {
  return (
   <div className="Container-Scrool"> 
    <div className="ContentIcon">
        <Obrero x={110} y={110} /> 
    </div>

    <div className="ContentTitle">
        <span>Servicios Cloud y Aplicativos</span>
    </div>

    <div className="ContentSubtitle">
        <span>Aplicativos web y móviles para que puedas a tus documentos en cualquier momento.</span>
    </div>

    <div className="ContentLink">
        <a href="/">Conoce más</a>
        <Siguiente x={30} y={30} fill={"#F68A20"}/>
    </div>
   </div>
  );
};

export default Scrool;
