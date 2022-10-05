import { useState, useEffect } from "react";
import {
  ElementName,
  GridElemmentContainer,
  NumberOfElementChild,
  ContainerIcon,
} from "../../../../../Styles/Documentary/Modern/GridElement";
import ElementIcon from "../../../../../Styles/Documentary/Modern/GridContentIcon/Icons";
import { useDispatch, useSelector } from "react-redux";
import { setIndexbyCabinetCore } from "../../../../../Store/Core";
import { setSelectedFolderCore, setSaveElementBreakFolder } from "../../../../../Store/ActionCore";
import { setSelectedSearchMetadataCore } from "../../../../../Store/ViewCore";
import {
  setFilterDocumentDocu,
  AggFolderMetadataSelected,
  getMetadataByFolder,
} from "../../../../../Store/Documentary";
import {
  setCloseContextFolder,
  setOpenModalFolderUpdate,
  setOpenModalFolderDelete,
  getNameGlobalChange,
} from "../../../../../Store/ModalCore";
import {
  getTypeFileByFolderNoSelected,
  getTypeFileByFolderFolder,
} from "../../../../../Store/ConfigDocumentary";
import { Options } from "../../GridsContent/Gridgroup/Icons";
import FolderUpdate from "../../ModalesCore/FolderUpdate";
import FolderDelete from "../../ModalesCore/FolderDelete";

const Gridcabinet = ({ element, name, description, id, cabinetId }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [dataBreak, setDataBreak] = useState([]);
  const { sesion, actionCore } = useSelector((store) => store);
  const { RolSesion } = sesion;
  const { breackcomp } = actionCore;

  useEffect(() => {
    setDataBreak(breackcomp)
  },[RolSesion]);

  const entrar = (index, cabinetId, name) => {
    dispatch(setSelectedFolderCore(index));
    dispatch(setFilterDocumentDocu(index));
    dispatch(setSelectedSearchMetadataCore());
    dispatch(AggFolderMetadataSelected(index));
    dispatch(getMetadataByFolder(index, cabinetId));
    dispatch(setIndexbyCabinetCore(cabinetId));
    dispatch(setCloseContextFolder(false));
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

  const AbrirModalUpdateFolder = (id) => {
    dispatch(getTypeFileByFolderFolder(id));
    dispatch(setOpenModalFolderUpdate());
  };

  const AbrirModalDeleteFolder = () => {
    dispatch(setOpenModalFolderDelete());
  };

  const BreakCompData = (term) => {
    dispatch(setSaveElementBreakFolder(term));
  }

  return (
    <>
      <GridElemmentContainer onDoubleClick={() => { entrar(id, cabinetId, name), BreakCompData(name)}}>
        {showMenu && (
          <div className="dropdown">
            <div className="dropdown-content">
              <div
                className="dropdown-item"
                onClick={() => {
                  AbrirModalUpdateFolder(id);
                }}
              >
                Actualizar
              </div>

              <FolderUpdate
                id={id}
                name={name}
                description={description}
                cabinetId={cabinetId}
              />
              <hr></hr>
              <div
                className="dropdown-item"
                onClick={() => AbrirModalDeleteFolder()}
              >
                Eliminar
              </div>
              <FolderDelete id={id} name={name} cabinetId={cabinetId} />
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

        <ElementIcon element={element} />

        {/* <NumberOfElementChild>3 documentos</NumberOfElementChild> */}
        <ElementName>{name}</ElementName>
      </GridElemmentContainer>
    </>
  );
};

export default Gridcabinet;
