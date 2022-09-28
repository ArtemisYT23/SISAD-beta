import { SecurityPanelUser } from "../../../../Styles/Dashboard/ContentDashboard/PanelGestionSecurity";
import {
  UserHeaderContainer,
  ContainerTextInfo,
  TitlePanel,
  SubTitlePanel,
  ContainerAvatar,
  AvatarInfo,
  Avatar,
} from "../../../../Styles/Dashboard/ContentDashboard/PanelConfigUser";
import avatar from "../../../Managment/ContentManagment/HeaderManagment/avatar.png";
import infoSecurity from "../../../../../assets/images/infoSecurity.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserListSecurity } from "../../../../Store/SecurityLogin";
import "./Security.css";
import {
  AddElement,
  EditElement,
  DeleteElement,
} from "../../../../Styles/Managment/Modern/ElementList/Icons";
import UserCreated from "../ModalesSecurityCreated/UserCreated";
import UserUpdate from "../ModalesSecurityCreated/UserUpdate";
import UserDelete from "../ModalesSecurityCreated/UserDelete";
import { setOpenModalCreatedUser, setOpenModalUpdateUser, setOpenModalDeleteUser } from "../../../../Store/ModalSecurity";
import { setUserSelectionSecurity } from "../../../../Store/CreatedUserNew";

const SecurityUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserListSecurity());
  }, []);

  const { sesion } = useSelector((store) => store);
  const { UserList } = sesion;

  const OpenCreatedUser = () => {
    dispatch(setOpenModalCreatedUser());
  }

  const UpdateUserRow = (id) => {
    dispatch(setUserSelectionSecurity(id));
    dispatch(setOpenModalUpdateUser());
  }

  const DeleteUserRow = (id) => {
    dispatch(setUserSelectionSecurity(id));
    dispatch(setOpenModalDeleteUser());
  }

  return (
    <SecurityPanelUser>
      <br />
      <UserHeaderContainer>
        <br />
        <ContainerTextInfo>
          <TitlePanel>Gestion de Seguridad</TitlePanel>
          <SubTitlePanel>
            Listado de Usuarios existentes y preferencias de servicios sisad
            cloud
          </SubTitlePanel>
        </ContainerTextInfo>
        <ContainerAvatar>
          <AvatarInfo src={infoSecurity} />
        </ContainerAvatar>
        <ContainerAvatar>
          <Avatar src={avatar} />
        </ContainerAvatar>
      </UserHeaderContainer>
      <div className="ContainerAgg">
        <button className="ButtonNew" onClick={() => OpenCreatedUser()}>Nuevo Usuario</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>email</th>
            <th>Profile</th>
            <th>Business</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {UserList ? (
            UserList.map((use, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{use.userName}</td>
                <td>{use.email}</td>
                <td>{use.profileId}</td>
                <td>{use.businessId}</td>
                <td>
                  <input type="checkbox" checked={use.opeationalState} />
                  <span>Activo</span>
                </td>
                <td>
                  <div className="CeldaIconContainer">
                    <div className="IconButton" onClick={() => UpdateUserRow(use.id)}>
                      <EditElement />
                    </div>
                    <div className="IconButton" onClick={() => DeleteUserRow(use.id)}>
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

      
    </SecurityPanelUser>
  );
};

export default SecurityUsers;
