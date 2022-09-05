import "../../../Styles/PageInitial/Footer/Footer.css";
import { Check } from "../../../Styles/PageInitial/Icons/PageInitial/Footer";
import FooterImage from "../../../../assets/images/Footer.png";

export const Footer = () => {
  const style = () => {
    return {
      backgroundImage: `url('${FooterImage}')`,
    };
  };

  return (
    <div className="Footer-Content" style={style()}>
      <div className="Content-Footer-text">
        <div className="Title-Content-footer">
          <span>-- </span>
          <span> Hora de optimizar procesos</span>
        </div>
        <div className="Subtitle-footer">
          <span>
            ¿Sabias que puedes pasar hasta 100 horas al año buscando documentos?
          </span>
        </div>
        <div className="Check-footer">
          <Check x={40} y={30} />
          <span> Te ayudamos a volverte mas eficiente</span>
        </div>
        <div className="Check-footer">
          <Check x={40} y={30} />
          <span> Consultoria en gestión de archivos</span>
        </div>
        <div className="Check-footer">
          <Check x={40} y={30} />
          <span> Servicios In House y de MailRoom</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
