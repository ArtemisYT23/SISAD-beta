import {
  SelectUser,
  ContainerSelection,
  ContainerRecientes,
  UserRecien,
  BoderContent,
  TextRecien,
  TextUser,
} from "../../../../../Styles/Dashboard/ContentDashboard/PanelConfigPermision";
import { getAllUserListSecurity } from "../../../../../Store/SecurityLogin";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PanelFirstUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserListSecurity());
  }, []);

  const { sesion } = useSelector((store) => store);
  const { UserList } = sesion;
  return (
    <>
      <ContainerSelection>
        <select className="Selected">
          <option hidden>Seleccione un Usuario</option>
          {UserList ? (
            UserList.map((use, index) => (
              <option value={use.id}>{use.userName}</option>
            ))
          ) : (
            <></>
          )}
        </select>
        <br />
        <select className="Selected">
          <option value="e4b558f3-bdab-4248-8fd2-357457090347">
            Administrador
          </option>
          <option value="cd9a8535-7747-4008-94a0-3617458c09f4">Writer</option>
          <option value="3b54b36c-2d62-4f65-b03a-50d5adcba4b3">RW</option>
          <option value="b08a660f-dcde-4602-8456-7a44a9ef6904">Reader</option>
        </select>
      </ContainerSelection>
      <ContainerSelection>
        <ContainerRecientes>
          <UserRecien>
            <TextUser>Recientes</TextUser>
          </UserRecien>
          <BoderContent>
            <TextRecien>Lola perez</TextRecien>
            <TextRecien>Elsa Roman</TextRecien>
            <TextRecien>Carlitos Gurumendi</TextRecien>
          </BoderContent>
        </ContainerRecientes>
      </ContainerSelection>
    </>
  );
};

export default PanelFirstUser;
