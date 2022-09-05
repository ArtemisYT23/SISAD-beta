import { useState } from "react";
import Central from "../../../../assets/images/logoCF.png";
import CentralNav from "../../../../assets/images/CentralNav.png";
import { MenuNav, Email, Maps } from "../../../Styles/PageInitial/Icons/PageInitial/Navbar";
import "../../../Styles/PageInitial/Navbar/Nav.css";
import { useDispatch } from "react-redux";
import { setOpenModalLoginCore } from "../../../Store/ModalCore";
import ModalLogin from "../ModalLogin";
import FondoCentral from "../../../../assets/images/fondoCentral.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const [Active, setActive] = useState(false);

  const OpenModalLogin = (e) => {
    dispatch(setOpenModalLoginCore());
  };

  const style = () => {
    return{
      backgroundImage: `url('${FondoCentral}')`,
    }
  }

  return (
    <>
    <div className="FatherContent" style={style()}>
      <div className="ContainerHeader">
        <div className="hijo">
          <img src={Central} />
        </div>
        <div className="hijo" onClick={(e) => setActive(!Active)}>
          <MenuNav x={30} y={30} />
        </div>
        <div className="hijoNav">
          <img src={CentralNav} />
        </div>
      </div>

      <div className="ContainerNavFlex">
        <nav className="Na">
          <a className="Item" href="/">
            Conócenos
          </a>
        </nav>
        <nav className="Na">
          <a className="Item" href="/">
            Servicios
          </a>
        </nav>
        <nav className="Na">
          <a className="Item" href="/">
            Menu
          </a>
        </nav>
        <nav className="Na">
          <div className="Item" onClick={(e) => OpenModalLogin()}>
            Iniciar Sesión
          </div>
        </nav>
      </div>

      {Active && (
        <div className="ContainerNav">
          <nav className="Na">
            <a className="Item" href="/">
              Conócenos
            </a>
          </nav>
          <nav className="Na">
            <a className="Item" href="/">
              Servicios
            </a>
          </nav>
          <nav className="Na">
            <a className="Item" href="/">
              Menu
            </a>
          </nav>
          <nav className="Na">
            <div className="Item" onClick={(e) => OpenModalLogin()}>
              Iniciar Sesión
            </div>
          </nav>
        </div>
      )}

      <div className="Content">
        <div className="Banner">
          <span>SUS ALIADOS</span>
          <span> EN GESTIÓN</span>
          <span>DOCUMENTAL</span>
        </div>
        <div className="ContentBanner">
          <div className="InfoContent">
            <div className="ContentText">
              <Email x={40} y={40} />
            </div>
            <div className="IconSMS">
              <div>Conversemos</div>
              <div>news@centralfile.com.ec</div>
              <div>Teléfono: 0939183139</div>
            </div>
          </div>
          <div className="InfoContent">
            <div className="ContentText">
              <Maps x={40} y={40} />
            </div>
            <div className="IconSMS">
              <div>Dirección</div>
              <div>Km. 25 Vía Perimetral Lot. </div>
              <div>Inmaconsa Solar 1 y 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalLogin />
    </>
  );
};

export default Navbar;
