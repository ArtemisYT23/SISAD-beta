import { useState, useEffect } from "react";
import {
  ElementName,
  GridElemmentContainer,
  NumberOfElementChild,
  ContainerIcon,
} from "../../../../../Styles/Documentary/Modern/GridElement";
import ElementIcon from "../../../../../Styles/Documentary/Modern/GridContentIcon/Icons";
import OptionFolderMenu from "../../../Content/MenuContext/OptionFolderMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedFolderCore,
  setSelectedSearchMetadataCore,
  setIndexbyCabinetCore,
} from "../../../../../Store/Core";
import {
  setFilterDocumentDocu,
  AggFolderMetadataSelected,
  getMetadataByFolder,
} from "../../../../../Store/Documentary";
import {
  setOpenContextFolder,
  setOpenContextNewEdit,
  setCloseContextFolder,
  setOpenModalFolderUpdate,
  setOpenModalFolderDelete
} from "../../../../../Store/ModalCore";
import { getTypeFileByFolderNoSelected } from "../../../../../Store/ConfigDocumentary";
import { Options } from "../../GridsContent/Gridgroup/Icons";
import FolderUpdate from "../../ModalesCore/FolderUpdate";
import FolderDelete from "../../ModalesCore/FolderDelete";

const Gridcabinet = ({ element, name, description, id, cabinetId }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("showFolder", showFolder);
  //   if (instance.length != 0) {
  //     setShowFolder(false);
  //     dispatch(setOpenContextNewEdit());
  //   }
  // }, [instance, showFolder]);

  // const save = localStorage.getItem("showFolder");

  // const handleClick = (e) => {
  //   showFolder && setShowFolder(false);
  //   dispatch(setOpenContextFolder());
  // };

  // const contextMenuRightClick = (e) => {
  //   e.preventDefault();
  //   setX(e.clientX - 50);
  //   setY(e.clientY - 50);
  //   setShowFolder(save);
  // };

  const entrar = (index, cabinetId) => {
    dispatch(setSelectedFolderCore(index));
    dispatch(setFilterDocumentDocu(index));
    dispatch(setSelectedSearchMetadataCore());
    dispatch(AggFolderMetadataSelected(index));
    dispatch(getMetadataByFolder(index, cabinetId));
    dispatch(setIndexbyCabinetCore(cabinetId));
    dispatch(setCloseContextFolder(false));
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
    dispatch(setOpenModalFolderUpdate());
    dispatch(getTypeFileByFolderNoSelected(id));
  };

  const AbrirModalDeleteFolder = () => {
    dispatch(setOpenModalFolderDelete());
  };

  return (
    <>
      <GridElemmentContainer
        onDoubleClick={() => entrar(id, cabinetId)}
        // onContextMenu={(e) => {
        //   contextMenuRightClick(e), handleClick(e);
        // }}
      >
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

        {/* {showFolder ? (
          <OptionFolderMenu
            x={x}
            y={y}
            id={id}
            name={name}
            description={description}
            cabinetId={cabinetId}
          />
        ) : (
          <></>
        )} */}
        <ContainerIcon onClick={() => dropdownCabinet(id)}>
          <Options x={20} y={20} fill={"#F68A20"} />
        </ContainerIcon>
        <ElementIcon element={element} />
        <NumberOfElementChild>3 documentos</NumberOfElementChild>
        <ElementName>{name}</ElementName>
      </GridElemmentContainer>
    </>
  );
};

export default Gridcabinet;
