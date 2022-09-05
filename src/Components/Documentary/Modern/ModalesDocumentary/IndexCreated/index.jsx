import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { setOpenModalConfigCreated } from "../../../../../Store/ModalConfig";
import {
  getTypeDataConfig,
  getListDataConfig,
} from "../../../../../Store/ConfigDocumentary";
import {
  setIndexCabinetCreatedConfig,
  setIndexbyCabinetCore
} from "../../../../../Store/Core";
import "../../../../../Styles/Documentary/ModalStyle/modalIndex.css";

const useStyless = makeStyles((theme) => ({
  IndexCreated: {
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

const IndexCreated = ({ nameCabinet, cabinetId }) => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalConfig, configDocument, core } = useSelector((store) => store);
  const { IndexCreated } = modalConfig;
  const { TypeData, ListData } = configDocument;
  const { cabinets, IndexByCabinet } = core;

  useEffect(() => {
    TypeData.length === 0 && dispatch(getTypeDataConfig());
    ListData.length === 0 && dispatch(getListDataConfig());
  }, []);

  const [newConfig, setNewConfig] = useState({
    id: uuidv4(),
    name: "",
    description: "",
    cabinetName: nameCabinet,
    dataTypeName: "",
    listName: null,
    required: false,
    unique: false,
    minValue: 0,
    maxValue: 0,
    xmlReference: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewConfig({ ...newConfig, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newConfig);
    dispatch(setIndexCabinetCreatedConfig(newConfig, nameCabinet));
    OpenModalIndexCreated();
    setNewConfig({
      id: uuidv4(),
      name: "",
      description: "",
      cabinetName: nameCabinet,
      dataTypeName: "",
      listName: null,
      required: false,
      unique: false,
      minValue: 0,
      maxValue: 0,
      xmlReference: null
    });
  };

  const handleChangeIndex = (index) => {
    dispatch(setIndexbyCabinetCore(index));
  };

  const bodyIndex = (
    <div className={styless.IndexCreated}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-Modal">GABINETE {nameCabinet}</h2>
        </div>
        <br />

        <TextField
          value={newConfig.name}
          name="name"
          onChange={handleChange}
          required={true}
          label="nombre del índice"
          className={styless.textfield}
        />
        <br />

        <TextField
          value={newConfig.description}
          name="description"
          onChange={handleChange}
          required={true}
          label="Descripción"
          className={styless.textfield}
        />
        <br />
        <br />
        <label className="Name">Tipo de Dato: </label>

        <select
          className="Selected"
          name="dataTypeName"
          label="Tipo de dato"
          onChange={(e) => handleChange(e)}
        >
          <option value="null" selected>
            Seleccione un Tipo
          </option>
          {TypeData ? (
            TypeData.map(({ id, name }, index) => (
              <option className="Options" value={name}>
                {name}
              </option>
            ))
          ) : (
            <></>
          )}
        </select>
        <br />
        {newConfig.dataTypeName == "LIST" && (
          <select
            className="Selected"
            name="listName"
            onChange={(e) => handleChange(e)}
          >
            <option hidden>Seleccione Una Lista</option>
            {ListData ? (
              ListData.map(({ id, name }, index) => (
                <option className="Options" value={name}>
                  {name}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>
        )}

       {newConfig.dataTypeName != "LIST" && newConfig.dataTypeName != "DATE" && newConfig.dataTypeName != "TIME" && newConfig.dataTypeName != "DATETIME" && newConfig.dataTypeName != "IDENTITY" && newConfig.dataTypeName != "BOOLEAN" && newConfig.dataTypeName != "IMAGE" ? (
        <TextField
          value={newConfig.minValue}
          name="minValue"
          onChange={handleChange}
          required={true}
          type="Number"
          InputProps={{ inputProps: { min: 1, max: 140 } }}
          label="Minimo"
          className={styless.textfield}
        />
        ):<></>}

        {newConfig.dataTypeName != "LIST" && newConfig.dataTypeName != "DATE" && newConfig.dataTypeName != "TIME" && newConfig.dataTypeName != "DATETIME" && newConfig.dataTypeName != "IDENTITY" && newConfig.dataTypeName != "BOOLEAN" && newConfig.dataTypeName != "IMAGE" ? (
        <TextField
          value={newConfig.maxValue}
          name="maxValue"
          onChange={handleChange}
          required={true}
          type="Number"
          InputProps={{ inputProps: { min: 1, max: 140 } }}
          label="Maximo"
          className={styless.textfield}
        />
        ):<></>}
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
          <select className="Selected" name="xmlReference" onChange={(e) => handleChange(e)}>
            <option hidden>Seleccione uno</option>
            {IndexByCabinet ? (
              IndexByCabinet.map(({ id, name }, index) => (
                <option key={index} className="Options" value={name}>
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
            onClick={() => OpenModalIndexCreated()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalIndexCreated = () => {
    dispatch(setOpenModalConfigCreated());
  };

  return (
    <div className={styless.container}>
      <Modal open={IndexCreated} onClose={OpenModalIndexCreated}>
        {bodyIndex}
      </Modal>
    </div>
  );
};

export default IndexCreated;
