import { useState } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalGroupCreated, setOpenMenuContextGroup } from "../../../../../Store/ModalCore";
import { CreateGroupNew } from "../../../../../Store/Core";

const useStyless = makeStyles((theme) => ({
  GroupCreated: {
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

const GroupCreated = () => {
  const dispatch = useDispatch();
  const styless = useStyless();

  const { modalCore } = useSelector((store) => store);
  const { GroupCreated } = modalCore;

  const [Group, setGroup] = useState({
    id: uuidv4(),
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroup({ ...Group, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Group);
    dispatch(CreateGroupNew(Group));
    abrirCerrarModal();
  };

  const GroupForm = (
    <div className={styless.GroupCreated}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Crear Nuevo Grupo</h2>
        </div>
        <br />
        <TextField
          value={Group.name}
          name="name"
          onChange={handleChange}
          required={true}
          label="nombre del Grupo"
          className={styless.textfield}
        />
        <br />
        <TextField
          value={Group.description}
          name="description"
          onChange={handleChange}
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
    dispatch(setOpenModalGroupCreated());
    dispatch(setOpenMenuContextGroup());
  };

  return(
    <div className={styless.container}>
    <Modal open={GroupCreated} onClose={abrirCerrarModal}>
      {GroupForm}
    </Modal>
  </div>
  );
};

export default GroupCreated;
