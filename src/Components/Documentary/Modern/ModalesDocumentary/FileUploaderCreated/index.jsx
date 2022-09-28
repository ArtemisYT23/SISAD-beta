import { useDispatch, useSelector } from "react-redux";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  setOpenModalUploadFile,
  setOpenModalUploaderUnirFile,
} from "../../../../../Store/ModalDocumentary";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";
import "../../../../../Styles/Documentary/DragAreaFile/ModalUpload.css";
import {
  setGetFileTypeFileDocu,
  setGetNameTypeFileNameDocu,
} from "../../../../../Store/Upload";
import { useState, useEffect } from "react";
import {
  setCloseMenuContextualDocument,
  setCloseMenuContextOptionMeta,
  setCloseMenuContextFile,
} from "../../../../../Store/ModalCore";
import { setOpenModalUploadUpdateFile, setOpenModalDeleteFile } from "../../../../../Store/ModalDocumentary";
import { setSelectedFileDocumentary } from "../../../../../Store/Core";
import { getTypeFileByFolder } from "../../../../../Store/ConfigDocumentary";
import FileUploaderUnit from "../FileUploaderUnit";
import FileUploaderUpdate from "../FilesUpdate";
import {
  EditIconFile,
  DeleteIconFile,
} from "../../../TraditionaComponents/TableIndexTraditional/Icons";
import 
  FileUploaderDelete
 from "../../../Modern/ModalesDocumentary/FileUploaderDelete";

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
  const { SelectedFolder, files, SelectedFile } = core;
  const [input, setInput] = useState({ ids_diets: [] });
  const [cargados, setCargados] = useState(true);
  const [pendiente, setPendientes] = useState(false);

  useEffect(() => {
    const Files = [];
    const idFiless = files.map((ind, i) => Files.push(files[i].fileTypeId));
    setInput({ ...input, ids_diets: Files });
    console.log(input);
  }, [files]);

  function handlerDiets(e) {
    const checked = e.target.checked;
    const value = e.target.value;

    const new_ids_diets = checked
      ? [...input.ids_diets, value]
      : [...input.ids_diets.filter((id) => id !== value)];
    console.log(new_ids_diets);
    //bloquiar que pueda desabilitar y activar check
    // setInput({ ...input, ids_diets: new_ids_diets });
  }

  const ActiveCargados = () => {
    setCargados(true);
    setPendientes(false);
  };

  const ActivePendientes = () => {
    setCargados(false);
    setPendientes(true);
  };

  const OpenModalFile = () => {
    dispatch(setOpenModalUploaderUnirFile());
  };

  const OpenModalUpdateFile = (id) => {
    dispatch(setOpenModalUploadUpdateFile());
    dispatch(setSelectedFileDocumentary(id));
  };

  const OpenModalDeleteFile = (id) => {
    dispatch(setOpenModalDeleteFile());
    dispatch(setSelectedFileDocumentary(id));
  };

  const Uploader = (
    <div className={styless.FileUpload}>
      <div className="headersContainer">
        <button
          className={cargados ? "ButtonChange-on" : "ButtonChange-off"}
          onClick={() => ActiveCargados()}
        >
          Archivos Cargados
        </button>
        <button
          className={pendiente ? "ButtonChange-on" : "ButtonChange-off"}
          onClick={() => ActivePendientes()}
        >
          Archivos Pendientes
        </button>
      </div>
      <div className="ContainerFormData">
        {cargados && (
          <table>
            <th>Tipo</th>
            <th>Tipo de archivo</th>
            <th>Nombre</th>
            <th>Editar</th>
            <th>Eliminar</th>

            {files ? (
              files.map(
                (
                  {
                    id,
                    name,
                    description,
                    file,
                    fileTypeId,
                    documentId,
                    fileTypeName,
                    extension,
                  },
                  index
                ) => (
                  <tr key={id}>
                    <td>
                      <span>{extension}</span>
                    </td>

                    <td>
                      <div className="CeldaFileType">
                        <span>{fileTypeName}</span>
                      </div>
                    </td>
                    <td>
                      <span>{name}</span>
                    </td>
                    <td onClick={() => OpenModalUpdateFile(id)}>
                      <EditIconFile x={25} y={25} />
                    </td>
                    <td onClick={() => OpenModalDeleteFile(id)}>
                      <DeleteIconFile x={25} y={25} />
                    </td>
                  </tr>
                )
              )
            ) : (
              <></>
            )}
          </table>
        )}

        {SelectedFile && (
          <FileUploaderUpdate
            id={SelectedFile?.id}
            name={SelectedFile?.name}
            description={SelectedFile?.description}
            file={SelectedFile?.file}
            fileTypeId={SelectedFile?.fileTypeId}
            documentId={SelectedFile?.documentId}
            fileTypeName={SelectedFile?.fileTypeName}
          />
        )}

        {SelectedFile && (
          <FileUploaderDelete
            id={SelectedFile?.id}
            name={SelectedFile?.name}
            documentId={SelectedFile?.documentId}
          />
        )}

        {pendiente && (
          <table>
            <th>Cargados</th>
            <th>Tipo de documento</th>
            <th>Acciones</th>

            {FilesFolders ? (
              FilesFolders.map(({ fileTypeId, fileTypeName }, index) => (
                <tr>
                  <td>
                    <div className="ContainerCheck">
                      <input
                        type="checkbox"
                        checked={input.ids_diets.includes(fileTypeId)}
                        value={fileTypeId}
                        name={fileTypeName}
                        onChange={handlerDiets}
                      />
                    </div>
                  </td>
                  <td>
                    <span key={fileTypeId}>{fileTypeName}</span>
                  </td>
                  <td>
                    <button
                      className="Agg-File"
                      onClick={() => {
                        OpenModalFile(),
                          dispatch(setGetFileTypeFileDocu(fileTypeId)),
                          dispatch(setGetNameTypeFileNameDocu(fileTypeName));
                      }}
                    >
                      Agregar
                    </button>
                    <FileUploaderUnit />
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </table>
        )}
      </div>
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
