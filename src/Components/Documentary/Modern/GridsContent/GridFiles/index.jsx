import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ElementNameDoc,
  GridDocContainer,
  NumberOfElementChild,
  DistintivoPDF,
  TypeFile,
  ContainerIcon,
  ContainerDistint,
} from "../../../../../Styles/Documentary/Modern/GridElement";
import ElementIcon from "../../../../../Styles/Documentary/Modern/GridContentIcon/Icons";
import {
  setOpenDetalleModal,
  setCloseDetalleModal,
  setOpenModalDeleteFile,
} from "../../../../../Store/ModalDocumentary";
import {
  setSelectedFileDocumentary,
  getIndexAllCabinetConfigNotSelect,
  setSelectedUrlFileCore,
} from "../../../../../Store/Core";
import { Options } from "../Gridgroup/Icons";
import { getMetadataByDocumentDocu } from "../../../../../Store/Documentary";
import FileUploaderDelete from "../../ModalesDocumentary/FileUploaderDelete";

const GridFiles = ({
  element,
  id,
  extension,
  name,
  description,
  fileTypeId,
  documentId,
  file,
  fileTypeName,
}) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { actionCore, sesion } = useSelector((store) => store);
  const { SelectedCabinet } = actionCore;
  const { RolSesion } = sesion;

  const EntrarDetalle = (id, cabinetId, documentId, file) => {
    dispatch(setCloseDetalleModal(true));
    dispatch(setSelectedUrlFileCore(file));
    dispatch(setSelectedFileDocumentary(id));
    dispatch(getMetadataByDocumentDocu(cabinetId, documentId));
    dispatch(getIndexAllCabinetConfigNotSelect(cabinetId));
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

  const DeleteFile = () => {
    dispatch(setOpenModalDeleteFile());
  };

  return (
    <>
      <GridDocContainer
        onClick={() => EntrarDetalle(id, SelectedCabinet?.id, documentId, file)}
      >
        {showMenu && (
          <div className="dropdown">
            <div className="dropdown-content">
              <div className="dropdown-item" onClick={() => DeleteFile()}>
                Eliminar
              </div>
            </div>
            <FileUploaderDelete id={id} name={name} documentId={documentId} />
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

        <ContainerDistint>
          <DistintivoPDF>
            <TypeFile>{extension}</TypeFile>
          </DistintivoPDF>
        </ContainerDistint>

        <NumberOfElementChild>{fileTypeName}</NumberOfElementChild>

        <ElementNameDoc>{name}</ElementNameDoc>
      </GridDocContainer>
    </>
  );
};

export default GridFiles;
