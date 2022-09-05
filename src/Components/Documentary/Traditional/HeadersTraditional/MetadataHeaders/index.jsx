import { useState } from "react";
import {
  ContainerIcons,
  CabinetIcons,
  EditContainer,
  DeleteContainer,
  CabinetContainer,
  ContainerFirst,
  ContainerSecond,
  ContainerFilter,
} from "../CabinetHeaders/StyleIcons";
import axios from "axios";
import NewCabi from "../../../../../../assets/images/Nuevo.png";
import EditCabi from "../../../../../../assets/images/Editar.png";
import DeleteCabi from "../../../../../../assets/images/Delete.png";
import CabinetCabi from "../../../../../../assets/images/Cabinet.png";
import FechaMeta from "../../../../../../assets/images/Fecha.png";
import FechaHoy from "../../../../../../assets/images/Hoy.png";
import Excel from "../../../../../../assets/images/ExportExcel.png";

import { useDispatch, useSelector } from "react-redux";
import { ChangeCabinetGetAll } from "../../../../../Store/Core";

const MetadataHeaders = () => {
  const dispatch = useDispatch();
  // const [DownLoadData, setDownLoadData] = useState([]);

  const OpenMetadataCreated = () => {};

  const OpenMetadataUpdate = () => {};

  const OpenMetadataDelete = () => {};

  const OpenCabinetGetAll = () => {
    dispatch(ChangeCabinetGetAll());
  };

  const [Active, setActive] = useState(false);

  const ObtenerFecha = (fecha) => {
    console.log(fecha);
  };

  return (
    <ContainerIcons>
      <ContainerFirst>
        <CabinetIcons onClick={() => OpenMetadataCreated()}>
          <img src={NewCabi} alt="cargando" />
        </CabinetIcons>

        <EditContainer onClick={() => OpenMetadataUpdate()}>
          <img src={EditCabi} alt="cargando" />
        </EditContainer>

        <DeleteContainer onClick={() => OpenMetadataDelete()}>
          <img src={DeleteCabi} alt="cargando" />
        </DeleteContainer>

        <CabinetContainer onClick={() => OpenCabinetGetAll()}>
          <img src={CabinetCabi} alt="cargando" />
        </CabinetContainer>

        {/* <CabinetContainer onClick={() => OpenDownLoadExcel()}>
          <img src={Excel}  alt="cargando" />
        </CabinetContainer> */}
      </ContainerFirst>

      <ContainerSecond>
        {Active && (
          <ContainerFilter>
            <label>desde</label>
            <input type="date" onChange={(e) => ObtenerFecha(e.value)} />
            <label>hasta</label>
            <input type="date" />
          </ContainerFilter>
        )}
        <CabinetContainer onClick={(e) => setActive(!Active)}>
          <img src={FechaMeta} alt="cargando" />
        </CabinetContainer>
        <CabinetContainer>
          <img src={FechaHoy} alt="cargando" />
        </CabinetContainer>
      </ContainerSecond>
    </ContainerIcons>
  );
};

export default MetadataHeaders;
