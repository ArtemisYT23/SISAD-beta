import { useState, useEffect } from "react";
import { DocumentContainer } from "../../../../../Styles/Documentary";
import { setOpenMenuContextGroup } from "../../../../../Store/ModalCore";
import { useDispatch, useSelector } from "react-redux";
import Gridgroup from "../../../Modern/GridsContent/Gridgroup";
import GroupMenu from "../../MenuContext/GroupMenu";
import GridDefaultGroup from "../../../Modern/GridsContent/GridDefaultGroup";
import toast, { Toaster } from "react-hot-toast";

const GroupContainer = () => {
  const dispatch = useDispatch();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const { core, modalCore, viewCore, actionCore, sesion } = useSelector(
    (store) => store
  );
  const { cabinets } = core;
  const { GroupsCabinet } = actionCore;
  const { selected, selectedView } = viewCore;
  const { ContextGroup } = modalCore;
  const { RolSesion } = sesion;

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
      {RolSesion[2] == "Administrator" && ContextGroup ? (
        <GroupMenu x={x} y={y} />
      ) : (
        <></>
      )}

      {RolSesion[2] == "Writer" && ContextGroup ? (
        <GroupMenu x={x} y={y} />
      ) : (
        <></>
      )}

      {selected === "group" && selectedView != "list" ? (
        GroupsCabinet.map(({ id, name, description, groupId }, index) => (
          <Gridgroup
            key={index}
            id={id}
            name={name}
            element="cabinet"
            description={description}
            groupId={groupId}
          />
        ))
      ) : (
        <></>
      )}

      {selected === "group" && GroupsCabinet == "" ? (
        <GridDefaultGroup />
      ) : (
        <></>
      )}

      {selected === "" && selectedView != "list" ? (
        cabinets.map(({ id, name, description, path }, index) => (
          <Gridgroup
            key={index}
            id={id}
            name={name}
            description={description}
            path={path}
            element="cabinet"
          />
        ))
      ) : (
        <></>
      )}

      <Toaster
        position="bottom-right"
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

export default GroupContainer;
