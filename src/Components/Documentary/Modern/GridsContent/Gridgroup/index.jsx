import { useState, useEffect } from "react";
import {
  ElementName,
  GridElemmentContainer,
  NumberOfElementChild,
  ContainerIcon,
} from "../../../../../Styles/Documentary/Modern/GridElement";
import { useDispatch, useSelector } from "react-redux";
import ElementIcon from "../../../../../Styles/Documentary/Modern/GridContentIcon/Icons";
import {
  getIndexCabinetGetAllConfigFilter,
} from "../../../../../Store/Core";
import {
  setSelectedCabinetCore,
  setFilterFoldersCore,
  setSelectedCabinetCoreNotSelected,
} from "../../../../../Store/ActionCore";
import { SelectedIndexConfig } from "../../../../../Store/ModalConfig";
import {
  setOpenModalCabinetUpdate,
  setOpenModalCabinetDelete, 
  getNameGlobalChange,
} from "../../../../../Store/ModalCore";
import { getTypeFileByCabinetNoSelected, getTypeFileByCabinet } from "../../../../../Store/ConfigDocumentary";

import { Options } from "./Icons";
import "./CabinetDropdown.css";
import CabinetUpdate from "../../ModalesCore/CabinetUpdate";
import CabinetDelete from "../../ModalesCore/CabinetDelete";

const Gridgroup = ({ element, name, description, groupId, id, fileTypes }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const envio = (index, name) => {
    setShowMenu(false);
    dispatch(setSelectedCabinetCore(index));
    dispatch(setFilterFoldersCore(index));
    dispatch(getNameGlobalChange(name));
  };

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

  const AbrilModalIndexCabinetFilter = (name) => {
    dispatch(getIndexCabinetGetAllConfigFilter(name));
  };

  return (
    <GridElemmentContainer id={id} onDoubleClick={() => envio(id, name)}>
      {showMenu && (
        <div className="dropdown">
          <div className="dropdown-content">
            <div className="dropdown-item" onClick={() => {AbrilModalIndexCreated(id), AbrilModalIndexCabinetFilter(name)}}>Configurar</div>
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
            <div className="dropdown-item" onClick={() =>AbrirModalEliminarCabinet()}>eliminar</div>
            <CabinetDelete id={id} name={name} />
          </div>
        </div>
      )}

      <ContainerIcon onClick={() => dropdownCabinet(id)}>
        <Options x={20} y={20} fill={"#F68A20"} />
      </ContainerIcon>
      <ElementIcon element={element} />
      <NumberOfElementChild>3 carpetas</NumberOfElementChild>
      <ElementName>{name}</ElementName>
    </GridElemmentContainer>
  );
};

export default Gridgroup;
