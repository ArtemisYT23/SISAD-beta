import { v4 as uuidv4 } from "uuid";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setOpenModalListElementCreated } from "../../../../../Store/ModalConfig";
import { CreatedElementListConfig } from "../../../../../Store/ConfigDocumentary";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
  ListElementCreated: {
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

const ElementCreated = ({ listId }) => {

  const dispatch = useDispatch();
  const styless = useStyless();
  const { modalConfig } = useSelector((store) => store);
  const { ListElementCreated } = modalConfig;

  const [elemento, setElemento] = useState({
    id: uuidv4(),
    name: "",
    listId,
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setElemento({ ...elemento, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(elemento);
    console.log( listId);
    OpenModalElementListCreated();
    dispatch(CreatedElementListConfig(elemento, listId));
    setElemento({
      id:uuidv4(),
      name: "",
      listId,
    })
  };

  const header = (
    <div className={styless.ListElementCreated}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Crear Nuevo Elemento</h2>
        </div>
        <br />
        <TextField
          value={elemento.name}
          name="name"
          onChange={handleChange}
          required={true}
          label="Nombre"
          className={styless.textfield}
        />
        <br />
        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button className="btn-cancelar" onClick={() => OpenModalElementListCreated()}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const OpenModalElementListCreated = () => {
    dispatch(setOpenModalListElementCreated());
  };

  return (
    <div className={styless.container}>
    <Modal open={ListElementCreated} onClose={OpenModalElementListCreated}>
      {header}
    </Modal>
  </div>
  );
};

export default ElementCreated;
