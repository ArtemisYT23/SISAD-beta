import { useState } from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalDeleteFile } from "../../../../../Store/ModalDocumentary";
import { setDeleteFileDocumentary } from "../../../../../Store/Core";
import "../../../../../Styles/Documentary/ModalStyle/modalDelete.css";

const useStyless = makeStyles((theme) => ({
  FileDelete: {
    position: "absolute",
    width: "400px",
    backgroundColor: "white",
    border: "2px solid white",
    outline: "none",
    boxShadow: theme.shadows[2],
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  textfield: {
    width: "100%",
  },
  container: {
    textAlign: "center",
  },
}));

const FileUploaderDelete = ({ id, name, documentId }) => {
  const [file, setFile] = useState({
    id,
  });
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalDocumentary } = useSelector((store) => store);
  const { FileDelete } = modalDocumentary; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    OpenModalDeleteFile();
    dispatch(setDeleteFileDocumentary(id, documentId ,file));
  };

  const deleteFile = (
    <div className={styless.FileDelete}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Eliminar el Archivo {name}</h2>
        </div>
        <div className="container-d" align="right">
          <button type="submit" className="btn-eliminar">
            Eliminar
          </button>
          <button
            className="btn-cancel"
            onClick={() => OpenModalDeleteFile()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalDeleteFile = () => {
    dispatch(setOpenModalDeleteFile());
  };

  return (
    <div className={styless.container}>
      <Modal open={FileDelete} onClose={OpenModalDeleteFile}>
        {deleteFile}
      </Modal>
    </div>
  );
};

export default FileUploaderDelete;
