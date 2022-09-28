import { useState } from "react";
import { DocumentContainer } from "../../../../../Styles/Documentary";
import { setOpenMenuContextGroup } from "../../../../../Store/ModalCore";
import { useDispatch, useSelector } from "react-redux";
import Gridgroup from "../../../Modern/GridsContent/Gridgroup";
import GroupMenu from "../../MenuContext/GroupMenu";
import toast, { Toaster } from "react-hot-toast";

const AllCabinetContainer = () => {
  const dispatch = useDispatch();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const { core, modalCore, viewCore } = useSelector((store) => store);
  const { cabinets } = core;
  const { selected, selectedView } = viewCore;
  const { ContextGroup } = modalCore;
  const handleClick = (e) => {
    dispatch(setOpenMenuContextGroup());
  };

  const contextMenuRightClick = (e) => {
    e.preventDefault();
    setX(e.clientX - 50);
    setY(e.clientY - 50);
    ContextGroup;
  };

  return (
    <DocumentContainer
      onContextMenu={(e) => {
        contextMenuRightClick(e), handleClick(e);
      }}
    >

      {ContextGroup ? <GroupMenu x={x} y={y} /> : <></>}

      {selected === "CabinetAll" && selectedView != "list" ? (
        cabinets.map(({ id, name, description }, index) => (
          <Gridgroup
            key={index}
            id={id}
            name={name}
            description={description}
            element="cabinet"
          />
        ))
      ) : (
        <></>
      )}

      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "#F68A20",
            color: "#fff",
          },
        }}
      />
      
    </DocumentContainer>
  );
};

export default AllCabinetContainer;
