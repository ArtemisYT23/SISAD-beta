import React, { useState } from "react";
import { HeaderContainer } from "../../../../Styles/Documentary";
import { setClearTockenInvalidate } from "../../../../Store/SecurityLogin";
import {
  setCloseModalLoginCore,
  setCloseModalContextGlobal,
  CloseSesionCore,
  getNameGlobalChangeCleaner,
} from "../../../../Store/ModalCore";
import { setCleanerMemoryDataCore } from "../../../../Store/Core";
import { setClearDataMemoryDocu } from "../../../../Store/Documentary";
import {
  setClearMemoryDataViewCore,
  setSelectedNullCore,
  setSelectedSearchNullCore,
} from "../../../../Store/ViewCore";
import { setCloseDetalleModal } from "../../../../Store/ModalDocumentary";
import { setClearElementBreak, setClearElementFolderBreak, setSelectedCabinetCore, setSelectedGroupCore, setClearElementGroupBreak } from "../../../../Store/ActionCore";
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
  LineBreack,
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
  const { modalCore, sesion, actionCore, viewCore } = useSelector((store) => store);
  const { NameGlobalSelected } = modalCore;
  const { RolSesion, DataUser } = sesion;
  const { breackcompGroup, breackcomp, breackcompFolder } = actionCore;
  const { selectedView } = viewCore;

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

  const RouteInitial = () => {
    dispatch(setSelectedNullCore());
    dispatch(setClearElementBreak());
    dispatch(setClearElementFolderBreak());
    dispatch(setClearElementGroupBreak());
    dispatch(setSelectedSearchNullCore());
    dispatch(setCloseDetalleModal(false));
    dispatch(getNameGlobalChangeCleaner());
  };

  const RouteGroup = (index) => {

    dispatch(setSelectedGroupCore(index));
    dispatch(setClearElementBreak());
    dispatch(setClearElementFolderBreak());
  }

  const RouteCabinet = (index) => {
    dispatch(setSelectedCabinetCore(index));
    dispatch(setClearElementFolderBreak());
  };

  const RouteFolder = () => {
    console.log("Prueba a ruta de carpeta");
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
            <Avatar src={DataUser?.photoUrl} />
            <Avatar src={logo} />
          </Perfiles>
          <TextUser>{RolSesion[1]}</TextUser>
          <div onClick={() => ActiveMenu()}>
            <OptionsIcon />
          </div>
        </OptionContainer>
      </HeaderUP>
      {selectedView == "grid" && (
      <HeaderDOWN>
        <LineBreack onClick={() => RouteInitial()}>.../</LineBreack>
        {breackcompGroup != null && (
          <LineBreack onClick={() => RouteGroup(breackcompGroup?.id)}>{breackcompGroup?.name}<label>/</label></LineBreack>
        )}
        {breackcomp && (
          <LineBreack onClick={() => RouteCabinet(breackcomp?.id)}>{breackcomp?.name}</LineBreack>
        )}
        {breackcompFolder != null && (
          <LineBreack onClick={() => RouteFolder()}>
            <label>/</label>
            {breackcompFolder}
          </LineBreack>
        )}
        {/* <Log>Se creó una carpeta: hace 1 hora</Log> */}
      </HeaderDOWN>
      )}
    </HeaderContainer>
  );
};

export default Header;
