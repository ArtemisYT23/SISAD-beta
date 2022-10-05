import { useState, useEffect } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { UpdateCabinetCore, getAllGroupsCore } from "../../../../../Store/Core";
import {
  setOpenModalCabinetUpdate,
  setOpenContextEdit,
} from "../../../../../Store/ModalCore";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
  CabinetUpdate: {
    position: "absolute",
    width: "400px",
    height: "550px",
    backgroundColor: "white",
    border: "2px solid white",
    boxShadow: theme.shadows[2],
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflowY: "scroll",
  },
  textfield: {
    width: "100%",
  },
  container: {
    textAlign: "center",
  },
}));

const CabinetUpdate = ({ id, name, description, groupId }) => {
  const styless = useStyless();
  const dispatch = useDispatch();
  const { modalCore, core, actionCore, configDocument } = useSelector(
    (store) => store
  );
  const { CabinetUpdate } = modalCore;
  const { groups } = core;
  const { SelectedGroup } = actionCore;
  const { FilesCabinets, FilesNoCabinets } = configDocument;

  const [gabi, setGabi] = useState({
    id,
    name: "",
    description: "",
    onDay: false,
    groupId,
    fileType: [],
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setGabi({ ...gabi, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    ObtenerCabinet();
    console.log(gabi);
    abrirModalUpdateCabinet();
    dispatch(UpdateCabinetCore(gabi, id, groupId));
  };

  const ObtenerCabinet = () => {
    const checkboxes = document.querySelectorAll(
      'input[name="fileCabinet"]:checked'
    );
    const SelectedCabinetFiles = [];
    checkboxes.forEach((checkbox) => {
      SelectedCabinetFiles.push(checkbox.value);
    });
    gabi.fileType = SelectedCabinetFiles;
  };

  const Update = (
    <div className={styless.CabinetUpdate}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Gabinete {name}</h2>
        </div>

        <TextField
          value={gabi.name}
          name="name"
          onChange={handleChange}
          required={true}
          placeholder={name}
          label="nombre de la carpeta"
          className={styless.textfield}
        />
        <br />
        <TextField
          value={gabi.description}
          name="description"
          onChange={handleChange}
          placeholder={description}
          required={true}
          label="descripcion"
          className={styless.textfield}
        />
        <br />
        <br />
        {FilesCabinets != "" ? (
          <h2 className="Title-Archive">Tipo de Archivo Existente</h2>
        ) : (
          <h2 className="Title-Archive">No tiene Archivos Existente</h2>
        )}

        <div className="ContainerSelectedChech">
          {FilesCabinets != "" ? (
            <div className="ContainerNameCheck">
              {FilesCabinets ? (
                FilesCabinets.map(({ fileTypeId, fileTypeName }, index) => (
                  <div key={fileTypeId} className="NameCeldaCheck">
                    <input 
                    className="InputCheck" 
                    type="checkbox" 
                    checked={true} />
                    {fileTypeName}
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
        <h2 className="Title-Archive">Tipo de Archivo Nuevo</h2>
        <div className="ContainerSelectedChech">
          <div className="ContainerNameCheck">
            {FilesNoCabinets ? (
              FilesNoCabinets.map(({ fileTypeId, fileTypeName }, index) => (
                <div id={fileTypeId} className="NameCeldaCheck">
                  <input
                    className="InputCheck"
                    type="checkbox"
                    name="fileCabinet"
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
        <br />
        <label className="NameLabel">Grupos: </label>
        <select
          name="groupId"
          className="Selected"
          onChange={(e) => handleChange(e)}
        >
          <option className="defaultOption" hidden>
            Ninguno
          </option>
          {groups ? (
            groups.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))
          ) : (
            <></>
          )}
        </select>
        <br />
        <br />
        <div align="right">
          <button className="btn-enviar">Actualizar</button>
          <button
            className="btn-cancelar"
            onClick={() => abrirModalUpdateCabinet()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const abrirModalUpdateCabinet = () => {
    dispatch(setOpenModalCabinetUpdate());
    dispatch(setOpenContextEdit());
  };

  return (
    <div className={styless.container}>
      <Modal open={CabinetUpdate} onClose={abrirModalUpdateCabinet}>
        {Update}
      </Modal>
    </div>
  );
};

export default CabinetUpdate;
