import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedNullCore,
  setSelectedSearchNullCore,
} from "../../Store/ViewCore";
import {
  NavBarContainer,
  LogoContainer,
  NavLinkContainer,
  NavLinkName,
} from "../../Styles/NavBar";
import NavBarIcon from "./Icons";
import logotipo from "../../../assets/images/CentralFile.png";
import isotipo from "../../../assets/images/icon.png";
import { setCloseDetalleModal } from "../../Store/ModalDocumentary";
import { getNameGlobalChangeCleaner } from "../../Store/ModalCore";
import { setClearElementBreak, setClearElementFolderBreak, setClearElementGroupBreak } from "../../Store/ActionCore";
import {
  getUserSesionSecurity,
  getUserInformationSecurity,
} from "../../Store/SecurityLogin";

const NavBar = () => {
  const { sesion } = useSelector((store) => store);
  const { RolSesion } = sesion;

  useEffect(() => {
    if (RolSesion != "") {
      dispatch(getUserSesionSecurity(RolSesion[0]));
      dispatch(getUserInformationSecurity(RolSesion[0]));
    }
  }, [RolSesion]);

  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);

  const [dashboard, setDashboard] = useState("#c4c4c4");
  const [configData, setConfigData] = useState("#c4c4c4");
  const [documentary, setDocumentary] = useState("#F68A20");

  const ActiveDash = () => {
    dispatch(setCloseDetalleModal(false));
    setDashboard("#F68A20");
    setConfigData("#c4c4c4");
    setDocumentary("#c4c4c4");
  };

  const ActiveManag = () => {
    dispatch(setCloseDetalleModal(false));
    setDashboard("#c4c4c4");
    setConfigData("#F68A20");
    setDocumentary("#c4c4c4");
  };

  const ActiveDocu = () => {
    dispatch(setSelectedNullCore());
    dispatch(setClearElementBreak());
    dispatch(setClearElementFolderBreak());
    dispatch(setClearElementGroupBreak());
    dispatch(setSelectedSearchNullCore());
    dispatch(setCloseDetalleModal(false));
    dispatch(getNameGlobalChangeCleaner());
    setDashboard("#c4c4c4");
    setConfigData("#c4c4c4");
    setDocumentary("#F68A20");
  };

  return (
    <NavBarContainer isActive={isActive}>
      <LogoContainer
        logo={!isActive ? isotipo : logotipo}
        onClick={() => setIsActive(!isActive)}
      />

      <NavLinkContainer to="dashboard" onClick={() => ActiveDash()}>
        <NavBarIcon name={"dashboard"} dashboard={dashboard} />
        {isActive ? <NavLinkName>Dashboard</NavLinkName> : <></>}
      </NavLinkContainer>

      {RolSesion[2] == "Administrator" && (
        <NavLinkContainer to="managment" onClick={() => ActiveManag()}>
          <NavBarIcon name="managment" configData={configData} />
          {isActive ? <NavLinkName>Administración</NavLinkName> : <></>}
        </NavLinkContainer>
      )}

      {RolSesion[2] == "Writer" && (
        <NavLinkContainer to="managment" onClick={() => ActiveManag()}>
          <NavBarIcon name="managment" configData={configData} />
          {isActive ? <NavLinkName>Administración</NavLinkName> : <></>}
        </NavLinkContainer>
      )}

      <NavLinkContainer to="documentary" onClick={() => ActiveDocu()}>
        <NavBarIcon name="documentary" documentary={documentary} />
        {isActive ? <NavLinkName>Gestión Documental</NavLinkName> : <></>}
      </NavLinkContainer>

      {/* <NavLinkContainer to="facturation" onClick={() => ActiveFacturation()}>
            <NavBarIcon name="facturation"/>
            {isActive ? <NavLinkName>Facturación</NavLinkName> : <></>}
          </NavLinkContainer>

          <NavLinkContainer to="resumen" onClick={() => ResumenFacturation()}> 
            <NavBarIcon name="resumen"/>
            {isActive ? <NavLinkName>Facturación Resumen</NavLinkName> : <></>}
          </NavLinkContainer> */}
    </NavBarContainer>
  );
};

export default NavBar;
