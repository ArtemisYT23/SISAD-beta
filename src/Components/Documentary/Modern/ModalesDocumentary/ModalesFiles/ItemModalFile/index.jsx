import { AggIconFiles, SaveIconFile, DeleteIconFile } from "../../../../TraditionaComponents/TableIndexTraditional/Icons";
import { Link } from "react-router-dom";
import "../../../../../../Styles/Documentary/ModalStyle/modal.css";
import { DeleteFilesViewTraditionalDocu } from "../../../../../../Store/Documentary";
import { useDispatch, useSelector } from "react-redux";


const ItemModalFile = ({ id, name, description, extension, file, index, documentId, fileTypeId}) => {

  const dispatch = useDispatch();

  const OpenDocumentView = (file) => {
    window.open(
      file
    );
  };

  const DeleteDocumentFile = (id, documentId) => {
    dispatch(DeleteFilesViewTraditionalDocu(id, documentId));
  }

  return (
    <tr>
      <td>{index}</td>
      <td>{fileTypeId}</td>
      <td>{description}</td>
      <td>{extension}</td>
      <td>
        <div className="Container-IconFile">
          <div className="Content-IconFile" onClick={(e) => OpenDocumentView(file)}>
            <AggIconFiles x={27} y={25} />
          </div>

          <Link
            className="Content-IconFile"
            to={file}
            target="_blank"
            download
          >
            <SaveIconFile x={21} y={25} />
          </Link>

          <div className="Content-IconFile" onClick={(e) => DeleteDocumentFile(id, documentId)}>
            <DeleteIconFile x={23} y={25} />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ItemModalFile;
