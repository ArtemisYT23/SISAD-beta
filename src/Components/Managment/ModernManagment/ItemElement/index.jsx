import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Element,
  ElementTitle,
  ElemTitle,
} from "../../../../Styles/Managment/Modern/ItemElement";
import {
  IconAddList,
  Secuencial,
  ItemCelda,
  IconListElement,
  IconContai,
  IconListContai,
} from "../../../../Styles/Managment/Modern/ElementList";
import {
  EditElement,
  DeleteElement,
} from "../../../../Styles/Managment/Modern/ElementList/Icons";
import { setSelectedElementConfig, CreatedElementListConfig } from "../../../../Store/ConfigDocumentary";
import {
  setOpenModalListElementCreated,
  setOpenModalListElementUpdate,
  setOpenModalListElementDelete,
} from "../../../../Store/ModalConfig";
import ElementUpdate from "../../ModernManagment/ModalConfig/ElementUpdate";
import ElementDelete from "../ModalConfig/ElementDelete";

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

const ItemElement = ({ id, con, nombre, listId }) => {
  const dispatch = useDispatch();
  const styless = useStyless();
  const { configDocument, modalConfig } = useSelector((store) => store);
  const { selectedElement, selectedElementList } = configDocument;
  const { ListElementCreated } = modalConfig;

  const SelectedElementList = (index) => {
    const collection = document.getElementsByClassName("Celda");
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = "white";
        collection[i].style.color = "#c4c4c4";
        if (id === index) {
            document.getElementById(index).style.backgroundColor = "#e9e6e6";
            document.getElementById(index).style.color = " #F68A20";
      }
    }
  }

  const OpenModalCreateElementList = () => {
    dispatch(setOpenModalListElementCreated());
  };

  const OpenModalUpdateElementList = (id) => {
    dispatch(setOpenModalListElementUpdate());
    dispatch(setSelectedElementConfig(id));
  };

  const OpenModalDeleteElementList = (id) => {
    dispatch(setOpenModalListElementDelete());
    dispatch(setSelectedElementConfig(id));
  };

  const [element, setElement] = useState({
    id: uuidv4(),
    name: "",
    listId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setElement({ ...element, [name]: value });
  };

  const handleSubmit = async (e) => {
    OpenModalCreateElementList();
    dispatch(CreatedElementListConfig(element, listId));
  };

  const bodynew = (
    <div className={styless.ListElementCreated}>
      <form onSubmit={handleSubmit}>
        <div align="center">
          <h2 className="titulo-modal">Crear Nuevo Elemento</h2>
        </div>
        <br />
        <TextField
          value={element.name}
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
          <button
            className="btn-cancelar"
            onClick={() => OpenModalCreateElementList()}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <Element id={id} className="Celda" onClick={() => SelectedElementList(id)}>
      <ItemCelda>
        <Secuencial>{con}</Secuencial>
      </ItemCelda>
      <ElemTitle>
        <ElementTitle>{nombre}</ElementTitle>
      </ElemTitle>

      <IconListElement>
        <IconAddList onClick={() => OpenModalUpdateElementList(id)}>
          <EditElement />
        </IconAddList>
      </IconListElement>

      <IconListContai>
        <IconContai onClick={() => OpenModalDeleteElementList(id)}>
          <DeleteElement/>
        </IconContai>
      </IconListContai>

      <div className={styless.container}>
        <Modal open={ListElementCreated} onClose={OpenModalCreateElementList}>
          {bodynew}
        </Modal>
      </div>

      {selectedElement.id == id && (
        <ElementUpdate
          id={selectedElement.id}
          name={selectedElement.name}
          listId={selectedElement.listId}
        />
      )}

      {selectedElement && <ElementDelete id={selectedElement.id} listId={selectedElement.listId}/>}

    </Element>
  );
};

export default ItemElement;
