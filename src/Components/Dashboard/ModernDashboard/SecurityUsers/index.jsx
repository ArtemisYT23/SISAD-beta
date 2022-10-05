import { SecurityPanelUser } from "../../../../Styles/Dashboard/ContentDashboard/PanelGestionSecurity";
import {
  UserHeaderContainer,
  ContainerTextInfo,
  TitlePanel,
  SubTitlePanel,
  ContainerAvatar,
  Avatar,
} from "../../../../Styles/Dashboard/ContentDashboard/PanelConfigUser";
import avatar from "../../../Managment/ContentManagment/HeaderManagment/avatar.png";
import infoSecurity from "../../../../../assets/images/infoSecurity.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserListSecurity } from "../../../../Store/SecurityLogin";
import "./Security.css";
import {
  EditElement,
  DeleteElement,
} from "../../../../Styles/Managment/Modern/ElementList/Icons";
import UserCreated from "../ModalesSecurityCreated/UserCreated";
import UserUpdate from "../ModalesSecurityCreated/UserUpdate";
import UserDelete from "../ModalesSecurityCreated/UserDelete";
import {
  setOpenModalCreatedUser,
  setOpenModalUpdateUser,
  setOpenModalDeleteUser,
} from "../../../../Store/ModalSecurity";
import { setUserSelectionSecurity } from "../../../../Store/CreatedUserNew";
import "../../../Documentary/Modern/GridsContent/Gridgroup/CabinetDropdown.css";
import { useNavigate } from "react-router-dom";
import { setClearTockenInvalidate } from "../../../../Store/SecurityLogin";
import {
  setCloseModalLoginCore,
  setCloseModalContextGlobal,
  CloseSesionCore,
} from "../../../../Store/ModalCore";
import { setCleanerMemoryDataCore } from "../../../../Store/Core";
import { setClearDataMemoryDocu } from "../../../../Store/Documentary";
import { setClearMemoryDataViewCore } from "../../../../Store/ViewCore";
import { OptionsIcon } from "../../../../Components/Documentary/Content/Header/Icons";
import { SearchFilter } from "./Icons";

const SecurityUsers = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [term, setTerm] = useState("");
  const { sesion } = useSelector((store) => store);
  const { UserList, RolSesion } = sesion;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUserListSecurity());
  }, []);

  useEffect(() => {
    setTableData(UserList);
  }, [UserList]);

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

  const OpenCreatedUser = () => {
    dispatch(setOpenModalCreatedUser());
  };

  const UpdateUserRow = (id) => {
    dispatch(setUserSelectionSecurity(id));
    dispatch(setOpenModalUpdateUser());
  };

  const DeleteUserRow = (id) => {
    dispatch(setUserSelectionSecurity(id));
    dispatch(setOpenModalDeleteUser());
  };

  const changeStateDrop = () => {
    if (showMenu == true) {
      setShowMenu(false);
    }
  };

  function searchingTerm(term) {
    return function (x) {
      return x.userName.includes(term) || !term;
    };
  }

  return (
    <SecurityPanelUser onClick={() => changeStateDrop()}>
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
      <br />
      <UserHeaderContainer>
        <br />
        <ContainerTextInfo>
          <TitlePanel>Gestion de Seguridad</TitlePanel>
          <SubTitlePanel>
            Listado de Usuarios existentes y preferencias de perfiles sisad
            cloud
          </SubTitlePanel>
        </ContainerTextInfo>
        <ContainerAvatar>
          <div className="Container-Name">
            <TitlePanel>{RolSesion[2]}</TitlePanel>
            <SubTitlePanel>{RolSesion[1]}</SubTitlePanel>
          </div>
        </ContainerAvatar>
        <ContainerAvatar>
          <Avatar src={avatar} />
        </ContainerAvatar>
        <ContainerAvatar onClick={() => ActiveMenu()}>
          <OptionsIcon />
        </ContainerAvatar>
      </UserHeaderContainer>
      <div className="Container-HeaderSecurity">
        <div className="ContainerAgg">
          <button className="ButtonNew" onClick={() => OpenCreatedUser()}>
            Nuevo Usuario
          </button>
        </div>

        {tableData && (
          <div className="ContainerSearchUser">
            <input
              placeholder=" Buscar Usuario"
              className="SearchUser"
              onChange={(e) => setTerm(e.target.value)}
            />
            <button className="InputSearch">
              <SearchFilter x={22} y={22} />
            </button>
          </div>
        )}
      </div>
      <div className="ContainerTableUser">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Email</th>
              <th>Perfil</th>
              <th>Empresa</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tableData ? (
              tableData.filter(searchingTerm(term)).map((use, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{use.userName}</td>
                  <td>{use.email}</td>
                  <td>{use.profileName}</td>
                  <td>{use.businessName}</td>
                  <td>
                    <input type="checkbox" checked={use.opeationalState} />
                    <span>Activo</span>
                  </td>
                  <td>
                    <div className="CeldaIconContainer">
                      <div
                        className="IconButton"
                        onClick={() => UpdateUserRow(use.id)}
                      >
                        <EditElement />
                      </div>
                      <div
                        className="IconButton"
                        onClick={() => DeleteUserRow(use.id)}
                      >
                        <DeleteElement />
                      </div>

                      <UserCreated />
                      <UserUpdate />
                      <UserDelete />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </SecurityPanelUser>
  );
};

export default SecurityUsers;
