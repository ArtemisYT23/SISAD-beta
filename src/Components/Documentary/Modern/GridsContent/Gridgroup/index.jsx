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
  setSelectedCabinetCore,
  setFilterFoldersCore,
  setSelectedCabinetCoreNotSelected,
  getIndexCabinetGetAllConfigFilter,
} from "../../../../../Store/Core";
import { SelectedIndexConfig } from "../../../../../Store/ModalConfig";
import {
  setOpenMenuContextGroup,
  setOpenContextNewEdit,
  setOpenModalCabinetUpdate,
  setOpenModalCabinetDelete
} from "../../../../../Store/ModalCore";
import CabinetMenu from "../../../Content/MenuContext/CabinetMenu";

import { Options } from "./Icons";
import "./CabinetDropdown.css";
import CabinetUpdate from "../../ModalesCore/CabinetUpdate";
import CabinetDelete from "../../ModalesCore/CabinetDelete";

const Gridgroup = ({ element, name, description, groupId, id }) => {
  // const { modalCore } = useSelector((store) => store);
  // const { instance } = modalCore;
  const dispatch = useDispatch();
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("showMenu", showMenu);
  //   if (instance.length != 0) {
  //     setShowMenu(false);
  //     dispatch(setOpenContextNewEdit());
  //   }
  // }, [showMenu, instance]);

  // const saved = localStorage.getItem("showMenu");

  // const handleClick = (e) => {
  //   showMenu && setShowMenu(false);
  //   dispatch(setOpenMenuContextGroup());
  // };

  // const contextMenuRightClick = (e) => {
  //   console.log(saved);
  //   e.preventDefault();
  //   setX(e.clientX - 50);
  //   setY(e.clientY - 50);
  //   setShowMenu(saved);
  // };

  const envio = (index) => {
    setShowMenu(false);
    dispatch(setSelectedCabinetCore(index));
    dispatch(setFilterFoldersCore(index));
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

  const AbrirModalActualizarCabinet = () => {
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
    <GridElemmentContainer id={id} onDoubleClick={() => envio(id)}>
      {showMenu && (
        <div className="dropdown">
          <div className="dropdown-content">
            <div className="dropdown-item" onClick={() => {AbrilModalIndexCreated(id), AbrilModalIndexCabinetFilter(name)}}>Configurar</div>
            <hr></hr>
            <div
              className="dropdown-item"
              onClick={() => AbrirModalActualizarCabinet()}
            >
              Renombrar
            </div>
            <CabinetUpdate
              id={id}
              name={name}
              description={description}
              groupId={groupId}
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
    // <GridElemmentContainer
    //   onDoubleClick={() => envio(id)}
    //   onContextMenu={(e) => {
    //     contextMenuRightClick(e), handleClick(e);
    //   }}
    // >
    // {showMenu ? <CabinetMenu x={x} y={y} id={id} name={name} description={description} groupId={groupId} /> : <></>}

    //   <ElementIcon element={element} />
    //   <NumberOfElementChild>3 documentos</NumberOfElementChild>
    //   <ElementName>{name}</ElementName>
    // </GridElemmentContainer>
  );
};

export default Gridgroup;
