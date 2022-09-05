import { useState } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalGroupUpdate } from "../../../../../Store/ModalCore";
import { UpdateGroupNew } from "../../../../../Store/Core";

const useStyless = makeStyles((theme) => ({
    GroupUpdate: {
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

const GroupCreated = ({ id, name, description }) => {
  const dispatch = useDispatch();
  const styless = useStyless();

  const { modalCore } = useSelector((store) => store);
  const { GroupUpdate } = modalCore;

  const [Group, setGroup] = useState({
    id,
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroup({ ...Group, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(UpdateGroupNew(Group, id));
    abrirCerrarModal();
  };

  const GroupForm = (
    <div className={styless.GroupUpdate}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Actualizar Grupo {name}</h2>
        </div>
        <br />
        <TextField
          value={Group.name}
          name="name"
          onChange={handleChange}
          placeholder={name}
          required={true}
          label="nombre del Grupo"
          className={styless.textfield}
        />
        <br />
        <TextField
          value={Group.description}
          name="description"
          onChange={handleChange}
          placeholder={description}
          required={true}
          label="descripción"
          className={styless.textfield}
        />
        <br />
        <br />
        <div align="right">
          <button className="btn-enviar">Crear</button>
          <button className="btn-cancelar" onClick={() => abrirCerrarModal()}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  const abrirCerrarModal = () => {
    dispatch(setOpenModalGroupUpdate());
  };

  return(
    <div className={styless.container}>
    <Modal open={GroupUpdate} onClose={abrirCerrarModal}>
      {GroupForm}
    </Modal>
  </div>
  );
};

export default GroupCreated;
