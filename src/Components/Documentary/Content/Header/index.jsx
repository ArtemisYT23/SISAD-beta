import React, { useState } from "react";
import { HeaderContainer } from "../../../../Styles/Documentary";
import { setClearTockenInvalidate } from "../../../../Store/SecurityLogin";
import { setCloseModalLoginCore, setCloseModalContextGlobal } from "../../../../Store/ModalCore";
import {
  Avatar,
  HeaderDOWN,
  HeaderUP,
  NameContainer,
  OptionContainer,
  Route,
  TextName,
  Log,
  Perfiles,
  TextUser,
} from "../../../../Styles/Documentary/Header";
import { EditIcon, OptionsIcon } from "./Icons";
import avatar from "./avatar.png";
import logo from "./descarga.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { modalCore } = useSelector((store) => store);
  const { NameGlobalSelected } = modalCore;

  const ActiveMenu = () => {
    setShowMenu(!showMenu);
  };

  const CerrarSesion = () => {
    dispatch(setClearTockenInvalidate());
    dispatch(setCloseModalLoginCore(false));
    dispatch(setCloseModalContextGlobal(false));
    navigate("/");
  };

  return (
    <HeaderContainer>
      {showMenu && (
        <div className="dropdown">
          <div className="dropdown-content-second">
            <div className="dropdown-item">Configuracion</div>
            <hr></hr>
            <div className="dropdown-item" onClick={() => CerrarSesion()}>Cerrar Sesion</div>
          </div>
        </div>
      )}
      <HeaderUP>
        <NameContainer>
          {NameGlobalSelected ? (
            <TextName>
              {NameGlobalSelected}
              <EditIcon />
            </TextName>
          ) : (
            <TextName>
              SISAD CLOUD
              <EditIcon />
            </TextName>
          )}
        </NameContainer>
        <OptionContainer>
          <Perfiles>
            <Avatar src={avatar} />
            <Avatar src={logo} />
          </Perfiles>
          <TextUser>ASALAZAR</TextUser>
          <div onClick={() => ActiveMenu()}>
            <OptionsIcon />
          </div>
        </OptionContainer>
      </HeaderUP>
      <HeaderDOWN>
        <form>
          <Route placeholder="... / Contratos" label="... / Contratos" />
        </form>
        <Log>Se creó una carpeta: hace 1 hora</Log>
      </HeaderDOWN>
    </HeaderContainer>
  );
};

export default Header;
