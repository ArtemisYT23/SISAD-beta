import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  setOpenModalUploadFile,
  setOpenModalMetadataCreated,
} from "../../../../../Store/ModalDocumentary";
import { setDocumentFileDocu } from "../../../../../Store/Upload";
import {
  setOpenMenuContextFile,
  setOpenMenuContextDocument,
} from "../../../../../Store/ModalCore";
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
  getTypeFileConfig,
  getTypeFileByFolder,
} from "../../../../../Store/ConfigDocumentary";

const useStyless = makeStyles((theme) => ({
  FileUpload: {
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
  const { FileUpload } = modalDocumentary;
  const { FilesFolders, TypeFile } = configDocument;
  const { MetaFolderSelected } = documentary;
  const { SelectedFolder } = core;

  const [identify, setIdentify] = useState({
    id: uuidv4(),
  });

  // useEffect(()=> {
  //   FilesFolders.length == 0 && dispatch(getTypeFileConfig());
  // },[FilesFolders])

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
    // dispatch(setOpenModalMetadataCreated());
    // dispatch(setOpenMenuContextDocument());
    OpenModalUploaderDocu();
    dispatch(setCloseMenuContextFile(false));
    setIdentify({
      id: uuidv4(),
    });
  };

  const Uploader = (
    <div className={styless.FileUpload}>
      <form onSubmit={SaveFileDocumentary}>
        <h1 className="titles">Subir Archivos</h1>
        <TextField
          type="text"
          className={styless.textfield}
          // required={true}
          label="Nombre"
          onBlur={(e) => dispatch(setGetNameFileDocu(e.target.value))}
        />

        <br />

        <TextField
          type="text"
          className={styless.textfield}
          // required={true}
          label="Descripcion"
          onBlur={(e) => dispatch(setGetDescriptionFileDocu(e.target.value))}
        />
        <br />
        <br />

        <div className="ContentFile">
          <label>Tipo de Archivo: </label>

          <select
            onClick={() => handleFolder(SelectedFolder?.id)}
            onChange={(e) => handleChange(e)}
          >
            {FilesFolders == "" && (
              <>
                <option
                  className="defaultOption"
                  value={null}
                  hidden
                  selected="selected"
                >
                  Seleccione Un Tipo
                </option>
                {TypeFile ? (
                  TypeFile.map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))
                ) : (
                  <></>
                )}
              </>
            )}

            {FilesFolders != "" && (
              <>
                <option
                  className="defaultOption"
                  value={null}
                  hidden
                  selected="selected"
                >
                  Seleccione Un Tipo
                </option>
                {FilesFolders ? (
                  FilesFolders.map(({ fileTypeId, fileTypeName }) => (
                    <option key={fileTypeId} value={fileTypeId}>
                      {fileTypeName}
                    </option>
                  ))
                ) : (
                  <></>
                )}
              </>
            )}
          </select>
          <br />
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
    dispatch(setOpenModalUploadFile());
  };

  return (
    <Modal open={FileUpload} onClose={OpenModalUploaderDocu}>
      {Uploader}
    </Modal>
  );
};

export default FileUploaderCreated;
