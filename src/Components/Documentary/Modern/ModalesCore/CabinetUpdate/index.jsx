import { useState, useEffect } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch , useSelector } from "react-redux";
import { UpdateCabinetCore, getAllGroupsCore } from "../../../../../Store/Core";
import { setOpenModalCabinetUpdate, setOpenContextEdit } from "../../../../../Store/ModalCore";
import "../../../../../Styles/Documentary/ModalStyle/modal.css";

const useStyless = makeStyles((theme) => ({
    CabinetUpdate: {
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
    }
  }));

const CabinetUpdate = ({ id, name, description, groupId }) => {

    const styless = useStyless();
    const dispatch = useDispatch();
    const { modalCore, core, actionCore } = useSelector((store) => store);
    const { CabinetUpdate } = modalCore;
    const { groups } = core;
    const { SelectedGroup } = actionCore;

    useEffect(() => {
      groups.length == 0 && dispatch(getAllGroupsCore());
  },[]);

    const [gabi, setGabi] = useState({
        id,
        name: "",
        description: "",
        path: "../Root",
        onDay: false,
        groupId,
      });

      const handleChange = async (e) => {
        const { name, value } = e.target;
        setGabi({ ...gabi, [name]: value });
        console.log(gabi);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        abrirModalUpdateCabinet();
        dispatch(UpdateCabinetCore(gabi, id, groupId));
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
            <label className="NameLabel">Grupos: </label>
            <select name="groupId" className="Selected" onChange={(e) => handleChange(e)}>
                {SelectedGroup && (
                  <option value={groupId}>{SelectedGroup.name}</option>
                )}
              <option className="defaultOption" value="null">Ninguno</option>
              {groups ? (
            groups.map(({ id, name }) => (
              <option key={id} value={id}>{name}</option>
              ))
              ) : (
                <></>
              )}
            </select>
            <br />
            <br />
            <div align="right">
              <button className="btn-enviar">Actualizar</button>
              <button className="btn-cancelar" onClick={() => abrirModalUpdateCabinet()}>
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

    return(
      <div className={styless.container}>
        <Modal open={CabinetUpdate} onClose={abrirModalUpdateCabinet}>
          {Update}
        </Modal>
      </div>
    );
};

export default CabinetUpdate;