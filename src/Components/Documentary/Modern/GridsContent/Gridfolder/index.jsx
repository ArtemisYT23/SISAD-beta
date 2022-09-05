import { useState } from "react";
import {
  ElementNameDoc,
  GridDocContainer,
  NumberOfElementChild,
  Distintivo,
  TypeFile,
} from "../../../../../Styles/Documentary/Modern/GridElement";
import ElementIcon from "../../../../../Styles/Documentary/Modern/GridContentIcon/Icons";
import { useDispatch } from "react-redux";
import { getFileAllDocument, setSelectedSearchMetadataCore } from "../../../../../Store/Core";
import { setSelectedDocumentDocu, AggFolderMetadataSelected, getMetadataByFolder } from "../../../../../Store/Documentary";
import { setDocumentFileDocu } from "../../../../../Store/Upload";

const Gridfolder = ({ element, id, folderId, cabinetId, }) => {
  const dispatch = useDispatch();

  const DocumentEnter = (id) => {
    dispatch(getFileAllDocument(id));
    dispatch(setSelectedDocumentDocu(id));
    dispatch(setDocumentFileDocu(id));
    dispatch(setSelectedSearchMetadataCore());
  };

  const SelectedFolder = (id, cabinetId) => {
    dispatch(AggFolderMetadataSelected(id));
    dispatch(getMetadataByFolder(id, cabinetId));
  }

  return (
    <GridDocContainer onDoubleClick={() => {DocumentEnter(id), SelectedFolder(folderId, cabinetId)}}>
      <ElementIcon element={element} />
      {/* <Distintivo />
      <TypeFile>reg</TypeFile> */}
      <NumberOfElementChild>registro</NumberOfElementChild>
      <ElementNameDoc>documentos</ElementNameDoc>
    </GridDocContainer>
  );
};

export default Gridfolder;
