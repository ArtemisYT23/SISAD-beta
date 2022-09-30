import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeaderContainer } from "../../../../Styles/Documentary";
import {
  Avatar,
  HeaderUP,
  NameContainer,
  OptionContainer,
  TextName,
  InputName,
  Perfiles,
  TextUser,
} from "../../../../Styles/Documentary/Header";
import { EditIcon, OptionsIcon } from "./Icons";
import avatar from "./avatar.png";
import logo from "./descarga.png";
import { setClearTockenInvalidate } from "../../../../Store/SecurityLogin";
import {
  setCloseModalLoginCore,
  setCloseModalContextGlobal,
  CloseSesionCore,
} from "../../../../Store/ModalCore";
import { setCleanerMemoryDataCore } from "../../../../Store/Core";
import { setClearDataMemoryDocu } from "../../../../Store/Documentary";
import { setClearMemoryDataViewCore } from "../../../../Store/ViewCore";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { modalCore, sesion } = useSelector((store) => store);
  const { NameManagmentSelected } = modalCore;
  const { RolSesion } = sesion;

  const ActiveMenu = () => {
    setShowMenu(!showMenu);
  };

  const CerrarSesion = () => {
    dispatch(setClearTockenInvalidate());
    dispatch(setCloseModalLoginCore(false));
    dispatch(setCloseModalContextGlobal(false));
    dispatch(setCleanerMemoryDataCore());
    dispatch(setClearDataMemoryDocu());
    dispatch(setClearMemoryDataViewCore());
    dispatch(CloseSesionCore());
    navigate("/");
  };
  const changeStateDrop = () => {
    if (showMenu == true) {
      setShowMenu(false);
    } 
  };

  return (
    <HeaderContainer onClick={() => changeStateDrop()}>
      {showMenu && (
        <div className="dropdown">
          <div className="dropdown-content-second">
            <div className="dropdown-item">Configuracion</div>
            <hr></hr>
            <div className="dropdown-item" onClick={() => CerrarSesion()}>
              Cerrar Sesion
            </div>
          </div>
        </div>
      )}
      <HeaderUP>
        <NameContainer>
          {NameManagmentSelected ? (
            <TextName>
              {NameManagmentSelected}
              <EditIcon />
            </TextName>
          ) : (
            <TextName>
              Lista de Datos
              <EditIcon />
            </TextName>
          )}
        </NameContainer>
        <OptionContainer>
          <Perfiles>
            <Avatar src={avatar} />
            <Avatar src={logo} />
          </Perfiles>
          <TextUser>{RolSesion[1]}</TextUser>
          <div onClick={() => ActiveMenu()}>
            <OptionsIcon />
          </div>
        </OptionContainer>
      </HeaderUP>
    </HeaderContainer>
  );
};

export default Header;
