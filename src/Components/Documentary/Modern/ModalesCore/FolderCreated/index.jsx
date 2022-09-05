import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import { CreateFolderNew } from "../../../../../Store/Core";
import {
  setOpenModalFolderCreated,
  setOpenContextFolder,
} from "../../../../../Store/ModalCore";
import { getTypeFileConfig } from "../../../../../Store/ConfigDocumentary";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
  FolderCreated: {
    position: "absolute",
    width: "400px",
    backgroundColor: "white",
    border: "2px solid white",
    boxShadow: theme.shadows[2],
    padding: "16px 32px 24px",
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

const FolderCreated = ({ cabinetId }) => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalCore, configDocument } = useSelector((store) => store);
  const { FolderCreated } = modalCore;
  const { TypeFile } = configDocument;

  useEffect(() => {
    TypeFile.length === 0 && dispatch(getTypeFileConfig());
  }, []);

  const [carpetas, setCarpetas] = useState({
    id: uuidv4(),
    name: "",
    description: "",
    path: "../Root",
    cabinetId,
    folderId: null,
    folderFileTypes: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarpetas({ ...carpetas, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    ObtenerSelected();
    console.log(carpetas);
    OpenModalCreatedFolder();
    dispatch(CreateFolderNew(carpetas, cabinetId));
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
    carpetas.folderFileTypes = SelectedFiles;
  };

  const FolderNew = (
    <div className={styless.FolderCreated}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Crear Carpeta</h2>
        </div>
        <br />
        <TextField
          value={carpetas.name}
          name="name"
          onChange={handleChange}
          required={true}
          label="nombre de la carpeta"
          className={styless.textfield}
        />
        <br />
        <TextField
          value={carpetas.description}
          name="description"
          onChange={handleChange}
          required={true}
          label="descripcion"
          className={styless.textfield}
        />
        <br />
        <h2 className="Title-Archive">Tipo de Archivo</h2>
        <div className="ContainerSelectedChech">
          <div className="ContainerNameCheck">
            {TypeFile ? (
              TypeFile.map(({ id, name }, index) => (
                <div className="NameCeldaCheck">
                  <input
                    className="InputCheck"
                    type="checkbox"
                    name="subject"
                    value={id}
                    id={id}
                  />
                  {name}
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button
            className="btn-cancelar"
            onClick={() => OpenModalCreatedFolder()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalCreatedFolder = () => {
    dispatch(setOpenModalFolderCreated());
    dispatch(setOpenContextFolder());
  };

  return (
    <div className={styless.container}>
      <Modal open={FolderCreated} onClose={OpenModalCreatedFolder}>
        {FolderNew}
      </Modal>
    </div>
  );
};

export default FolderCreated;
