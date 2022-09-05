import "../../../Styles/PageInitial/infoBody/infoBody.css";
import { CellPhone, Security, Play } from "../../../Styles/PageInitial/Icons/PageInitial/infoBody";
import CentralPage from "../../../../assets/images/CentralPage.png";

const InfoBody = () => {

  const VerVideo = () => {
    window.open('https://youtu.be/WWe10yDU6y8',  'popup', 'top=100, left=75, width=853, height=480, toolbar=NO, resizable=NO, Location=NO, Menubar=NO,  Titlebar=No, Status=NO');
  }

  const style = () => {
    return{
      backgroundImage: `url('${CentralPage}')`,
    }
  }

  return (
    <div className="Container-Infomation">
      <div className="Container-Text-info">
        <div className="Title-info">
          <span>-</span>
          <span>Líderes a nivel nacional</span>
        </div>
        <div className="Subtitle-info">
          <span>La personalización nos define</span>
        </div>
        <div className="Container-Text">
          <span>
            Millones de documentos gestionados de forma personalizada al giro de
            negocio de nuestros clientes. Damos valor a la gestion documental,
            dandole vida a la importancia de cada documento único.
          </span>
        </div>

        <div className="Content-Icon-info">
          <CellPhone x={70} y={80} />
        </div>
        <div className="Context-Text-Icon">
          <span>En la palma</span>
          <span>de tu mano</span>
        </div>

        <div className="Content-Text-Movil">
          <span>
            Con nuestro aplicativo web y móviles, tienes acceso a tus archivos
            en cualquier momento y lugar, tan facil como si fueran físicos.
          </span>
        </div>

        <div className="Content-Icon-info">
          <Security x={70} y={80} />
        </div>

        <div className="Context-Text-Icon">
          <span>Seguridad</span>
          <span>de primer nivel</span>
        </div>

        <div className="Content-Text-Movil">
          <span>
            Los problemas de hacking son cosas del pasado. Duerme tranquilo
            sabiendo que tus documentos están bajo las mejores normas de
            seguridad.
          </span>
        </div>
      </div>
      <div className="Imagen-ref" style={style()}>
        <a onClick={(e) => VerVideo()}className="VideoRef">
            <Play x={50} y={70}/>
        </a>
      </div>
    </div>
  );
};

export default InfoBody;
