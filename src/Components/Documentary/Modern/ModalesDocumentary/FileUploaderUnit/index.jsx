import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  setOpenModalUploaderUnirFile,
} from "../../../../../Store/ModalDocumentary";
import { StyleDragArea } from "../../../../../Styles/Documentary/DragAreaFile";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";
import "../../../../../Styles/Documentary/DragAreaFile/ModalUpload.css";
import {
  setGetNameFileDocu,
  setGetDescriptionFileDocu,
  setGetFileFileDocu,
  sendFileDocumentaryDocu,
  setGetFileTypeFileDocu,
} from "../../../../../Store/Upload";
import { useState, useEffect } from "react";
import {
  setCloseMenuContextualDocument,
  setCloseMenuContextOptionMeta,
  setCloseMenuContextFile,
} from "../../../../../Store/ModalCore";
import {
  getTypeFileByFolder,
} from "../../../../../Store/ConfigDocumentary";

const useStyless = makeStyles((theme) => ({
    FileUploadUnit: {
    position: "absolute",
    width: "500px",
    height: "75%",
    backgroundColor: "white",
    border: "2px solid white",
    boxShadow: theme.shadows[2],
    padding: "16px 32px 24px",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  textfield: {
    width: "100%",
  },
  container: {
    textAlign: "center",
  },
}));

const FileUploaderCreated = ({ documentId }) => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalDocumentary, uploader, configDocument, documentary, core } =
    useSelector((store) => store);
  const { FileUploadUnit } = modalDocumentary;
  const { FilesFolders, TypeFile } = configDocument;
  const { MetaFolderSelected } = documentary;
  const { SelectedFolder } = core;
  const { NameFile } = uploader;

  const [identify, setIdentify] = useState({
    id: uuidv4(),
  });

  const setFile = (e) => {
    const file = e.target.files[0];
    dispatch(setGetFileFileDocu(file));
  };

  const handleChange = (e) => {
    const FileType = e.target.value;
    dispatch(setGetFileTypeFileDocu(FileType));
  };

  //traer archivos por carpeta
  const handleFolder = (id) => {
    dispatch(getTypeFileByFolder(id));
  };

  const SaveFileDocumentary = (e) => {
    e.preventDefault();
    const formFile = new FormData();
    identify.id && formFile.append("Id", identify.id);
    uploader.Name && formFile.append("Name", uploader.Name);
    uploader.Description &&
      formFile.append("Description", uploader.Description);
    uploader.File && formFile.append("File", uploader.File);
    uploader.FileTypeId && formFile.append("FileTypeId", uploader.FileTypeId);
    uploader.DocumentId && formFile.append("DocumentId", uploader.DocumentId);
    dispatch(
      sendFileDocumentaryDocu(formFile, uploader.DocumentId, MetaFolderSelected)
    );
    dispatch(setCloseMenuContextualDocument(false));
    dispatch(setCloseMenuContextOptionMeta(false));
    OpenModalUploaderDocu();
    dispatch(setCloseMenuContextFile(false));
    setIdentify({
      id: uuidv4(),
    });
  };

  const Uploader = (
    <div className={styless.FileUploadUnit}>
      <form onSubmit={SaveFileDocumentary}>
        <h1 className="titles">Subir Archivos {NameFile}</h1>
        <TextField
          type="text"
          className={styless.textfield}
          label="Nombre"
          onBlur={(e) => dispatch(setGetNameFileDocu(e.target.value))}
        />

        <br />

        <TextField
          type="text"
          className={styless.textfield}
          label="Descripcion"
          onBlur={(e) => dispatch(setGetDescriptionFileDocu(e.target.value))}
        />
        <br />
        <br />

        <div className="ContentFile">
          <br />
          <StyleDragArea>
            <div className="image-upload-wrap">
              <input
                type="file"
                className="file-upload-input"
                accept=".pdf, .doc, .rar, .txt"
                onInput={(e) => setFile(e)}
              />
            </div>
          </StyleDragArea>
        </div>
        <div className="ContainerFluid">
          <button className="can" onClick={() => OpenModalUploaderDocu()}>
            CANCEL
          </button>
          <button className="enviar">EMPEZAR A CARGAR</button>
        </div>
      </form>
    </div>
  );

  const OpenModalUploaderDocu = () => {
    dispatch(setCloseMenuContextualDocument(false));
    dispatch(setCloseMenuContextFile(false));
    dispatch(setOpenModalUploaderUnirFile());
  };

  return (
    <Modal open={FileUploadUnit} onClose={OpenModalUploaderDocu}>
      {Uploader}
    </Modal>
  );
};

export default FileUploaderCreated;