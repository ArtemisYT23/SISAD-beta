import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { TextField, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenModalUploadUpdateFile } from "../../../../../Store/ModalDocumentary";
import "../../../../../Styles/Documentary/ModalStyle/modalIndex.css";
import {
  setGetIdFileDocu,
  setGetDescriptionFileDocu,
  setGetNameFileDocu,
  setGetFileFileDocu,
  setGetFileTypeFileDocu,
  setDocumentFileDocu,
  updateFileDocumentaryDocu
} from "../../../../../Store/Upload";

const useStyless = makeStyles((theme) => ({
  FileUpdate: {
    position: "absolute",
    width: "600px",
    height: "68%",
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
    width: "90%",
  },
  container: {
    textAlign: "center",
  },
}));

const FileUploaderUpdate = ({
  id,
  name,
  description,
  file,
  fileTypeId,
  documentId,
  fileTypeName,
}) => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalDocumentary, core, configDocument, uploader, documentary } = useSelector((store) => store);
  const { FileUpdate } = modalDocumentary;
  const { MetaFolderSelected } = documentary;
  const { SelectedFile } = core;
  const { FilesFolders } = configDocument;
  const { Name, Description } = uploader;

  useEffect(() => {
    dispatch(setGetIdFileDocu(SelectedFile.id));
    dispatch(setGetNameFileDocu(SelectedFile.name));
    dispatch(setGetDescriptionFileDocu(SelectedFile.description));
    dispatch(setGetFileTypeFileDocu(SelectedFile.fileTypeId));
    dispatch(setDocumentFileDocu(SelectedFile.documentId));
  },[FileUpdate])

  const setFile = (e) => {
    const file = e.target.files[0];
    dispatch(setGetFileFileDocu(file));
  };

  const UpdateFileDocumentary = (e) => {
    e.preventDefault();
    const formFile = new FormData();
    uploader.idSelected && formFile.append("Id", uploader.idSelected);
    uploader.Name && formFile.append("Name", uploader.Name);
    uploader.Description && formFile.append("Description", uploader.Description);
    uploader.File && formFile.append("File", uploader.File);
    uploader.FileTypeId && formFile.append("FileTypeId", uploader.FileTypeId);
    uploader.DocumentId && formFile.append("DocumentId", uploader.DocumentId);
    dispatch(
        updateFileDocumentaryDocu( uploader.idSelected, formFile, uploader.DocumentId, MetaFolderSelected)
    );
    OpenModalUploaderDocu();
  };

  const UpdateFile = (
    <div className={styless.FileUpdate}>
      <h1 className="titles">Actualizar {fileTypeName} </h1>
      <div className="ContentDataMeta">
        <div className="ContainerFileUpdate">
          <form onSubmit={UpdateFileDocumentary}>
            <TextField
              type="text"
              className={styless.textfield}
              label="Nombre"
              value={Name}
              onChange={(e) => dispatch(setGetNameFileDocu(e.target.value))}
            />
            <br />
            <br />
            <TextField
              type="text"
              className={styless.textfield}
              label="Descripcion"
              value={Description}
              onChange={(e) => dispatch(setGetDescriptionFileDocu(e.target.value))}
            />
            <br />
            <br />
            <label className="Name">Tipo de archivo</label>
            <select className="Selected" onChange={(e) => dispatch(setGetFileTypeFileDocu(e.target.value))}>
              <option hidden>{fileTypeName}</option>
              {FilesFolders ? (
                FilesFolders.map(({ fileTypeId, fileTypeName }, index) => (
                  <option key={fileTypeId} value={fileTypeId}>{fileTypeName}</option>
                ))
              ) : (
                <></>
              )}
            </select>
            <br />
            <br />
            <input
              type="file"
              className="file-upload-input"
              accept=".pdf, .doc, .rar, .txt"
              onInput={(e) => setFile(e)}
            />
            <br />
            <br />

            <div className="ContainerFluid">
              <button className="can" onClick={() => OpenModalUploaderDocu()}>
                CANCEL
              </button>
              <button className="enviar">ACTUALIZAR</button>
            </div>
          </form>
        </div>
        <div className="PreviewUpdateFile">
          <iframe className="PreviewUpdate" src={file} frameBorder={10} />
        </div>
      </div>
    </div>
  );

  const OpenModalUploaderDocu = () => {
    dispatch(setOpenModalUploadUpdateFile());
  };

  return (
    <Modal open={FileUpdate} onClose={OpenModalUploaderDocu}>
      {UpdateFile}
    </Modal>
  );
};

export default FileUploaderUpdate;
