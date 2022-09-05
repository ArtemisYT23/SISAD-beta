import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  getTypeDataConfig,
  getListDataConfig,
} from "../../../../../Store/ConfigDocumentary";
import { TextField, Modal } from "@material-ui/core";
import { setOpenModalConfigUpdate } from "../../../../../Store/ModalConfig";
import { setIndexCabinetUpdateConfig, setIndexbyCabinetCore } from "../../../../../Store/Core";
import { makeStyles } from "@material-ui/core/styles";
import "../../../../../Styles/Documentary/ModalStyle/modalIndex.css";

const useStyless = makeStyles((theme) => ({
  IndexUpdate: {
    position: "absolute",
    width: "400px",
    backgroundColor: "white",
    border: "2px solid white",
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

const IndexUpdate = ({
  id,
  name,
  description,
  cabinetId,
  dataTypeId,
  listId,
  position,
  required,
  unique,
  maxValue,
  minValue,
  CabinetName,
}) => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalConfig, configDocument, core } = useSelector((store) => store);
  const { IndexUpdate } = modalConfig;
  const { TypeData, ListData, IndexSelected } = configDocument;
  const { cabinets, IndexByCabinet } = core;

  const [newConfig, setNewConfig] = useState({
    id,
    name: "",
    description: "",
    dataTypeId: "",
    listId,
    position,
    required,
    unique,
    minValue: "",
    maxValue: "",
    xmlReference: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewConfig({ ...newConfig, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newConfig);
    dispatch(setIndexCabinetUpdateConfig(newConfig, newConfig.id, CabinetName));
    OpenModalUpdateIndex();
    
  };

  useEffect(() => {
    TypeData.length === 0 && dispatch(getTypeDataConfig());
    ListData.length === 0 && dispatch(getListDataConfig());
  });

  const handleChangeIndex = (index) => {
    dispatch(setIndexbyCabinetCore(index));
  };

  const bodyIndexUpdate = (
    <div className={styless.IndexUpdate}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-Modal">ACTUALIZAR ÍNDICE {name}</h2>
        </div>
        <br />

        <TextField
          value={newConfig.name}
          name="name"
          placeholder={name}
          onChange={handleChange}
          required={true}
          label="nombre del índice"
          className={styless.textfield}
        />
        <br />

        <TextField
          value={newConfig.description}
          name="description"
          placeholder={description}
          onChange={handleChange}
          required={true}
          label="Descripción"
          className={styless.textfield}
        />
        <br />

        <label className="Name">Tipo de Dato:</label>
        <select
          className="Selected"
          name="dataTypeId"
          label="Tipo de dato"
          onChange={(e) => handleChange(e)}
        >
          <option value="null" selected hidden>
            {dataTypeId}
          </option>
          {TypeData ? (
            TypeData.map(({ id, name }, index) => (
              <option className="Options" value={id}>
                {name}
              </option>
            ))
          ) : (
            <></>
          )}
        </select>
        <br />
        {newConfig.dataTypeId == "6009c757-6c0b-4f5d-96e5-44af7382de6d" && (
          <select
            className="Selected"
            name="listId"
            onChange={(e) => handleChange(e)}
          >
            <option value={null} hidden>
              Seleccione
            </option>
            {ListData ? (
              ListData.map(({ id, name }, index) => (
                <option className="Options" value={id}>
                  {name}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>
        )}

        <br />
        <TextField
          value={newConfig.minValue}
          name="minValue"
          onChange={handleChange}
          required={true}
          placeholder={minValue}
          type="Number"
          InputProps={{ inputProps: { min: 1, max: 100 } }}
          label="Minimo"
          className={styless.textfield}
        />
        <br />

        <TextField
          value={newConfig.maxValue}
          name="maxValue"
          onChange={handleChange}
          required={true}
          placeholder={maxValue}
          type="Number"
          InputProps={{ inputProps: { min: 1, max: 100 } }}
          label="Maximo"
          className={styless.textfield}
        />
        <br />
        <br />
        <label className="Name">Referencia Indice: </label>
        <select className="Selected" onChange={(e) => handleChangeIndex(e.target.value)}>
          <option value={1}>No Aplica</option>
          {cabinets ? (
            cabinets.map(({ id, name }, index) => (
              <option className="Options" value={id}>
                {name}
              </option>
            ))
          ) : (
            <></>
          )}
        </select>

        {IndexByCabinet != "" && <label className="Name">Indice: </label>}

        {IndexByCabinet != "" && (
          <select className="Selected">
            <option hidden>Seleccione uno</option>
            {IndexByCabinet ? (
              IndexByCabinet.map(({ id, name }, index) => (
                <option key={index} className="Options" value={id}>
                  {name}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>
        )}


        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button
            className="btn-cancelar"
            onClick={() => OpenModalUpdateIndex()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalUpdateIndex = () => {
    dispatch(setOpenModalConfigUpdate());
  };

  return (
    <div className={styless.container}>
      <Modal open={IndexUpdate} onClose={OpenModalUpdateIndex}>
        {bodyIndexUpdate}
      </Modal>
    </div>
  );
};

export default IndexUpdate;
