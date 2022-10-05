import { useState, useEffect } from "react";
import {
  ElementName,
  GridElemmentContainer,
  NumberOfElementChild,
  ContainerIconCabinet,
  ContainerIcon,
} from "../../../../../Styles/Documentary/Modern/GridElement";
import { useDispatch, useSelector } from "react-redux";
import ElementIcon from "../../../../../Styles/Documentary/Modern/GridContentIcon/Icons";
import { getIndexCabinetGetAllConfigFilter } from "../../../../../Store/Core";
import {
  setSelectedCabinetCore,
  setFilterFoldersCore,
  setSelectedCabinetCoreNotSelected,
  setSaveElementBreak,
} from "../../../../../Store/ActionCore";
import { SelectedIndexConfig } from "../../../../../Store/ModalConfig";
import {
  setOpenModalCabinetUpdate,
  setOpenModalCabinetDelete,
  getNameGlobalChange,
} from "../../../../../Store/ModalCore";
import {
  getTypeFileByCabinetNoSelected,
  getTypeFileByCabinet,
} from "../../../../../Store/ConfigDocumentary";

import { Options } from "./Icons";
import "./CabinetDropdown.css";
import CabinetUpdate from "../../ModalesCore/CabinetUpdate";
import CabinetDelete from "../../ModalesCore/CabinetDelete";

const Gridgroup = ({ element, name, description, groupId, id, fileTypes, path }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { sesion } = useSelector((store) => store);
  const { RolSesion } = sesion;

  const Envio = (index, name) => {
    setShowMenu(false);
    dispatch(setSelectedCabinetCore(index));
    dispatch(setFilterFoldersCore(index));
    dispatch(getNameGlobalChange(name));
  };

  const Enrutamiento = (path) => {
    console.log(path);
    dispatch(setSaveElementBreak(path));
  }

  const dropdownCabinet = (index) => {
    setShowMenu(!showMenu);
    const collection = document.getElementsByClassName("dropdown");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.display = "none";
      if (id === index) {
        setShowMenu(!showMenu);
        document.getElementById(index).style.display = "flex";
      }
    }
  };

  const AbrirModalActualizarCabinet = (id) => {
    dispatch(getTypeFileByCabinet(id));
    dispatch(setOpenModalCabinetUpdate());
  };

  const AbrirModalEliminarCabinet = () => {
    dispatch(setOpenModalCabinetDelete());
  };

  const AbrilModalIndexCreated = (index) => {
    dispatch(SelectedIndexConfig());
    dispatch(setSelectedCabinetCoreNotSelected(index));
  };

  const AbrilModalIndexCabinetFilter = (id) => {
    dispatch(getIndexCabinetGetAllConfigFilter(id));
  };

  return (
    <GridElemmentContainer id={id} onDoubleClick={() => {Envio(id, name), Enrutamiento(id)}}>
      {showMenu && (
        <div className="dropdown">
          <div className="dropdown-content">
            <div
              className="dropdown-item"
              onClick={() => {
                AbrilModalIndexCreated(id), AbrilModalIndexCabinetFilter(name);
              }}
            >
              Configurar
            </div>
            <hr></hr>
            <div
              className="dropdown-item"
              onClick={() => AbrirModalActualizarCabinet(id)}
            >
              Renombrar
            </div>
            <CabinetUpdate
              id={id}
              name={name}
              description={description}
              groupId={groupId}
              fileTypes={fileTypes}
            />
            <hr></hr>
            <div
              className="dropdown-item"
              onClick={() => AbrirModalEliminarCabinet()}
            >
              eliminar
            </div>
            <CabinetDelete id={id} name={name} />
          </div>
        </div>
      )}

      {RolSesion[2] == "Administrator" && (
        <ContainerIcon onClick={() => dropdownCabinet(id)}>
          <Options x={20} y={20} fill={"#F68A20"} />
        </ContainerIcon>
      )}

      {RolSesion[2] == "Writer" && (
        <ContainerIcon onClick={() => dropdownCabinet(id)}>
          <Options x={20} y={20} fill={"#F68A20"} />
        </ContainerIcon>
      )}

      {RolSesion[2] == "Administrator" ? (
        <ElementIcon element={element} />
      ) : (
        <></>
      )}

      {RolSesion[2] == "Writer" ? <ElementIcon element={element} /> : <></>}

      {RolSesion[2] == "Reader" ? <ElementIcon element={element} /> : <></>}

      {/* <NumberOfElementChild>3 carpetas</NumberOfElementChild> */}
      <ElementName>{name}</ElementName>
    </GridElemmentContainer>
  );
};

export default Gridgroup;
