import {
  ContainerCeldaRegister,
} from "../../../../../Styles/Documentary/Modern/GridElement";
import ElementIcon from "../../../../../Styles/Documentary/Modern/GridContentIcon/Icons";
import { useDispatch } from "react-redux";
import {
  getFileAllDocument,
} from "../../../../../Store/Core";
import { 
  setSelectedSearchMetadataCore,
} from "../../../../../Store/ViewCore";
import {
  setSelectedDocumentDocu,
  AggFolderMetadataSelected,
  getMetadataByFolder,
} from "../../../../../Store/Documentary";
import { setDocumentFileDocu } from "../../../../../Store/Upload";
import { getTypeFileByFolderFolder } from "../../../../../Store/ConfigDocumentary";

const Gridfolder = ({ element, id, folderId, cabinetId, sequentialId }) => {
  const dispatch = useDispatch();

  const DocumentEnter = (id, folderId) => {
    dispatch(getFileAllDocument(id));
    dispatch(setSelectedDocumentDocu(id));
    dispatch(setDocumentFileDocu(id));
    dispatch(setSelectedSearchMetadataCore());
    dispatch(getTypeFileByFolderFolder(folderId));
  };

  const SelectedFolder = (id, cabinetId) => {
    dispatch(AggFolderMetadataSelected(id));
    dispatch(getMetadataByFolder(id, cabinetId));
  };

  const selectDocument = (index) => {
    const collection = document.getElementsByClassName("CeldaDocument");
    for (let i = 0; i < collection.length; i++){
        collection[i].style.backgroundColor = "#fff";
        collection[i].style.color = "#c4c4c4";
        if ( id === index) {
            document.getElementById(index).style.backgroundColor = "#F68A20";
            document.getElementById(index).style.color = "#e9e6e6";
        }
    }
  }

  return (
    <ContainerCeldaRegister id={id} className="CeldaDocument" onClick={() => {DocumentEnter(id, folderId), SelectedFolder(folderId, cabinetId), selectDocument(id)}}>
      <span>registro {sequentialId}</span>
    </ContainerCeldaRegister>

  );
};

export default Gridfolder;
