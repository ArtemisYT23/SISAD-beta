import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenMenuContextOptionMeta } from "../../../../../Store/ModalCore";
import "../../../../../Styles/Traditional/MetaConsult/TableIndex.css";
import Dropdown from "../Dropdown";

const ContextMenuMeta = ({name}) => {
  const dispatch = useDispatch();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const { modalCore } = useSelector((store) => store);
  const { ContextOptionMeta } = modalCore;

  const handleClick = (e) => {
    dispatch(setOpenMenuContextOptionMeta());
  };

  const contextMenuRightClick = (e) => {
    e.preventDefault();
    setX(e.clientX - 50);
    setY(e.clientY - 50);
    ContextOptionMeta;
  };

  return (
    <div className="ContainerBusqueda">
      <div
        className="buttonBusqueda"
        onContextMenu={(e) => {
          contextMenuRightClick(e), handleClick(e);
        }}
      >
        {ContextOptionMeta ? <Dropdown x={x} y={y} /> : <></>}{name}
      </div>
      <input className="Busqueda" />
    </div>
  );
};

export default ContextMenuMeta;
