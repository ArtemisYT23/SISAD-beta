import { useState } from "react";
import {
  UserPanelContainer,
  UserHeaderContainer,
  ContainerTextInfo,
  ContainerAvatar,
  TitlePanel,
  SubTitlePanel,
  ContainerInfoBody,
  ContainerBodyText,
  ContainerImage,
  TitleBodyText,
  SubTitleBodyText,
  ContainerInforBasic,
  ContainerCeldaChange,
  CeldaText,
  CeldaChangeAvatar,
  AvatarChange,
  ContainerTitleInfoBasic,
  Avatar,
  AvatarInfo,
  CeldaChangeText,
  AvatarChangeText,
  AvatarIcon,
} from "../../../../Styles/Dashboard/ContentDashboard/PanelConfigUser";
import avatar from "../../../Managment/ContentManagment/HeaderManagment/avatar.png";
import infoSecurity from "../../../../../assets/images/infoSecurity.png";
import iconFlechaDerecha from "../../../../../assets/images/iconFlechaDerecha.png";
import CentralSecurity from "../../../../../assets/images/CentralSecurity.png";
import ChangeCorreo from "../ModalesSecurityUser/ChangeCorreo";
import ChangeTelefono from "../ModalesSecurityUser/ChangeTelefono";
import NombreUser from "../ModalesSecurityUser/NombreUser";
import CompañiaUser from "../ModalesSecurityUser/CompañiaUser";
import ChangeFoto from "../ModalesSecurityUser/ChangeFoto";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenModalCorreoSecurity,
  setOpenModalNombreSecurity,
  setOpenModalTelefonoSecurity,
  setOpenModalCompañiaSecurity,
  setOpenModalFotoSecurity,
} from "../../../../Store/ModalSecurity";
import { OptionsIcon } from "../../../Documentary/Content/Header/Icons";
import { setClearTockenInvalidate } from "../../../../Store/SecurityLogin";
import {
  setCloseModalLoginCore,
  setCloseModalContextGlobal,
  CloseSesionCore
} from "../../../../Store/ModalCore";
import { setCleanerMemoryDataCore } from "../../../../Store/Core";
import { setClearDataMemoryDocu } from "../../../../Store/Documentary";
import { setClearMemoryDataViewCore } from "../../../../Store/ViewCore";
import { useNavigate } from "react-router-dom"; 

const UserPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { sesion } = useSelector((store) => store);
  const { RolSesion, SesionUser, DataUser } = sesion;

  const ActiveMenu = () => {
    setShowMenu(!showMenu);
  };

  const CerrarSesion = () => {
    dispatch(setClearTockenInvalidate());
    dispatch(setCloseModalLoginCore(false));
    dispatch(setCloseModalContextGlobal(false));
    dispatch(setClearDataMemoryDocu());
    dispatch(setCleanerMemoryDataCore());
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
    <UserPanelContainer onClick={() => changeStateDrop()}>
      {showMenu && (
        <div className="dropdown-Security">
          <div className="dropdown-content-security">
            <div className="dropdown-item">Configuracion</div>
            <hr></hr>
            <div className="dropdown-item" onClick={() => CerrarSesion()}>
              Cerrar Sesion
            </div>
          </div>
        </div>
      )}
      <UserHeaderContainer>
        <ContainerTextInfo>
          <TitlePanel>Panel de usuario</TitlePanel>
          <SubTitlePanel>
            Informacion del usuario y preferencias de servicios sisad cloud
          </SubTitlePanel>
        </ContainerTextInfo>
        <ContainerAvatar>
          <AvatarInfo src={infoSecurity} />
        </ContainerAvatar>
        <ContainerAvatar>
          {DataUser && (<Avatar src={DataUser?.photoUrl} />)}
        </ContainerAvatar>
        <ContainerAvatar onClick={() => ActiveMenu()}>
          <OptionsIcon />
        </ContainerAvatar>
      </UserHeaderContainer>
      <ContainerInfoBody>
        <ContainerBodyText>
          <TitleBodyText>
            Tu informacion de perfil en los servicios de Sisad Cloud
          </TitleBodyText>
          <SubTitleBodyText>
            Encontraras tu informacion de perfil y las opciones para
            administrarla.
          </SubTitleBodyText>
          <SubTitleBodyText>
            Puedes Acceder rapido y sencillamente desde el menu de seguridad,
          </SubTitleBodyText>
          <SubTitleBodyText>
            otras personas no podran ver tus perfiles
          </SubTitleBodyText>
        </ContainerBodyText>
        <ContainerImage>
          <img src={CentralSecurity} />
        </ContainerImage>
      </ContainerInfoBody>

      <ContainerInforBasic>
        <ContainerTitleInfoBasic>
          <TitleBodyText>Informacion Basica</TitleBodyText>
        </ContainerTitleInfoBasic>
        <ContainerCeldaChange
          onClick={() => dispatch(setOpenModalFotoSecurity())}
        >
          <CeldaText>
            <SubTitleBodyText>Foto</SubTitleBodyText>
          </CeldaText>
          <CeldaChangeAvatar>
            Agregar una foto para personalizar tu cuenta
          </CeldaChangeAvatar>
          <AvatarChange>
          {DataUser && (<Avatar src={DataUser?.photoUrl} />)}
          </AvatarChange>
        </ContainerCeldaChange>
        <ContainerCeldaChange
          onClick={() => dispatch(setOpenModalNombreSecurity())}
        >
          <CeldaText>
            <SubTitleBodyText>Nombre</SubTitleBodyText>
          </CeldaText>
          {DataUser && <CeldaChangeText>{DataUser?.fullName}</CeldaChangeText>}
          <AvatarChangeText>
            <AvatarIcon src={iconFlechaDerecha} />
          </AvatarChangeText>
        </ContainerCeldaChange>
        <ContainerCeldaChange
          onClick={() => dispatch(setOpenModalCompañiaSecurity())}
        >
          <CeldaText>
            <SubTitleBodyText>Compañia</SubTitleBodyText>
          </CeldaText>
          {DataUser && <CeldaChangeText>{DataUser?.company}</CeldaChangeText>}
          <AvatarChangeText>
            <AvatarIcon src={iconFlechaDerecha} />
          </AvatarChangeText>
        </ContainerCeldaChange>
        <ContainerCeldaChange>
          <CeldaText>
            <SubTitleBodyText>Licencia</SubTitleBodyText>
          </CeldaText>
          <CeldaChangeText>ESTANDAR</CeldaChangeText>
          <AvatarChangeText></AvatarChangeText>
        </ContainerCeldaChange>
      </ContainerInforBasic>

      <ContainerInforBasic>
        <ContainerTitleInfoBasic>
          <TitleBodyText>Informacion de contacto</TitleBodyText>
        </ContainerTitleInfoBasic>

        <ContainerCeldaChange
          onClick={() => dispatch(setOpenModalCorreoSecurity())}
        >
          <CeldaText>
            <SubTitleBodyText>Correo Electronico</SubTitleBodyText>
          </CeldaText>
          {DataUser && <CeldaChangeText>{DataUser?.email}</CeldaChangeText>}
          <AvatarChangeText>
            <AvatarIcon src={iconFlechaDerecha} />
          </AvatarChangeText>
        </ContainerCeldaChange>
        <ContainerCeldaChange
          onClick={() => dispatch(setOpenModalTelefonoSecurity())}
        >
          <CeldaText>
            <SubTitleBodyText>Telefono</SubTitleBodyText>
          </CeldaText>
          <CeldaChangeText>0992051471</CeldaChangeText>
          <AvatarChangeText>
            <AvatarIcon src={iconFlechaDerecha} />
          </AvatarChangeText>
        </ContainerCeldaChange>
      </ContainerInforBasic>

      <ChangeCorreo />
      <NombreUser />
      <ChangeTelefono />
      <CompañiaUser />
      <ChangeFoto />
    </UserPanelContainer>
  );
};

export default UserPanel;
