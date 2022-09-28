import { AggIconFiles, SaveIconFile, DeleteIconFile } from "../../../../TraditionaComponents/TableIndexTraditional/Icons";
import "../../../../../../Styles/Documentary/ModalStyle/modal.css";
import { DeleteFilesViewTraditionalDocu, getFilesUnitbyIdDocu } from "../../../../../../Store/Documentary";
import { useDispatch, useSelector } from "react-redux";


const ItemModalFile = ({ id, name, description, extension, file, index, documentId, fileTypeId, fileTypeName}) => {

  const dispatch = useDispatch();

  const OpenDocumentView = (file) => {
    window.open(
      file
    );
  };

  const DeleteDocumentFile = (id, documentId) => {
    dispatch(DeleteFilesViewTraditionalDocu(id, documentId));
  };

  const DownloadFileById = (index) => {
    dispatch(getFilesUnitbyIdDocu(index))
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{fileTypeName}</td>
      <td>{description}</td>
      <td>{extension}</td>
      <td>
        <div className="Container-IconFile">
          <div className="Content-IconFile" onClick={(e) => OpenDocumentView(file)}>
            <AggIconFiles x={27} y={25} />
          </div>

          <div className="Content-IconFile" onClick={(e) => DownloadFileById(id)}>
            <SaveIconFile x={21} y={25} />
          </div>

          <div className="Content-IconFile" onClick={(e) => DeleteDocumentFile(id, documentId)}>
            <DeleteIconFile x={23} y={25} />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ItemModalFile;
