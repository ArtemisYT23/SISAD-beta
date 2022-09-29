import { useState } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { UpdateFolderCore } from "../../../../../Store/Core";
import {
  setOpenModalFolderUpdate,
  setOpenContextEdit,
} from "../../../../../Store/ModalCore";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
  FolderUpdate: {
    position: "absolute",
    with: "400px",
    backgroundColor: "white",
    border: "2px solid white",
    boxShadow: theme.shadows[2],
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflowY: "scroll"
  },
  textfield: {
    width: "100%",
  },
  container: {
    textAlign: "center",
  },
}));

const FolderUpdate = ({ id, name, description, cabinetId }) => {
  const styless = useStyless();
  const dispatch = useDispatch();
  const { modalCore, configDocument } = useSelector((store) => store);
  const { FolderUpdate } = modalCore;
  const { FilesFolders, FilesNoSelected } = configDocument;

  const [folde, setFolder] = useState({
    id,
    name: "",
    description: "",
    path: "../Root",
    cabinetId,
    folderId: null,
    folderFileTypes: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFolder({ ...folde, [name]: value });
    console.log(folde);
  };

  const handleSubmit = async (e) => {
    ObtenerSelected();
    console.log(folde);
    AbrirModalUpdateFolder();
    dispatch(UpdateFolderCore(folde, id, cabinetId));
  };

  const ObtenerSelected = () => {
    const checkboxes = document.querySelectorAll(
      'input[name="subject"]:checked'
    );
    const SelectedFiles = [];
    checkboxes.forEach((checkbox) => {
      SelectedFiles.push(checkbox.value);
    });
    // alert(output);
    folde.folderFileTypes = SelectedFiles;
  };

  const UpdateFolder = (
    <div className={styless.FolderUpdate}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Actualizar {name}</h2>
        </div>

        <TextField
          value={folde.name}
          name="name"
          onChange={handleChange}
          placeholder={name}
          required={true}
          label="nombre de la carpeta"
          className={styless.textfield}
        />
        <br />
        <TextField
          value={folde.description}
          name="description"
          onChange={handleChange}
          placeholder={description}
          autoComplete={false}
          required={true}
          label="descripcion"
          className={styless.textfield}
        />
        <br />
        {FilesFolders != "" ? (
        <h2 className="Title-Archive">Tipo de Archivo Existente</h2>
        ):<h2 className="Title-Archive">No tiene Archivos Configurados</h2>}

        <div className="ContainerSelectedChech">
        {FilesFolders != "" ? (
          <div className="ContainerNameCheck">
            {FilesFolders ? (
              FilesFolders.map(({ fileTypeId, fileTypeName }, index) => (
                <div className="NameCeldaCheck">
                  <input className="InputCheck" type="checkbox" checked />
                  {fileTypeName}
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          ):<></>}
        </div>
        

        <h2 className="Title-Archive">Tipo de Archivo Nuevo</h2>
        <div className="ContainerSelectedChech">
          <div className="ContainerNameCheck">
            {FilesNoSelected ? (
              FilesNoSelected.map(({ fileTypeId, fileTypeName }, index) => (
                <div id={fileTypeId} className="NameCeldaCheck">
                  <input
                    className="InputCheck"
                    type="checkbox"
                    name="subject"
                    value={fileTypeId}
                    id={fileTypeId}
                  />
                  {fileTypeName}
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <br />

        <div align="right">
          <button className="btn-enviar">Actualizar</button>
          <button
            className="btn-cancelar"
            onClick={() => AbrirModalUpdateFolder()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const AbrirModalUpdateFolder = () => {
    dispatch(setOpenModalFolderUpdate());
    dispatch(setOpenContextEdit());
  };

  return (
    <div className={styless.container}>
      <Modal open={FolderUpdate} onClose={AbrirModalUpdateFolder}>
        {UpdateFolder}
      </Modal>
    </div>
  );
};

export default FolderUpdate;
