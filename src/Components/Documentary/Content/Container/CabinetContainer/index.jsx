import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DocumentContainer } from "../../../../../Styles/Documentary";
import { setOpenContextFolder } from "../../../../../Store/ModalCore";
import Gridcabinet from "../../../Modern/GridsContent/Gridcabinet";
import GridDefaultFolder from "../../../Modern/GridsContent/GridDefaultFolder";
import FolderMenu from "../../MenuContext/FolderMenu";
import toast, { Toaster } from "react-hot-toast";

const CabinetContainer = () => {
  const dispatch = useDispatch();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const { modalCore, actionCore, viewCore, sesion } = useSelector(
    (store) => store
  );
  const { FoldersCabinet, SelectedCabinet } = actionCore;
  const { selected, selectedView } = viewCore;
  const { ContextFolder } = modalCore;
  const { RolSesion } = sesion;

  const handleClick = (e) => {
    dispatch(setOpenContextFolder());
  };

  const contextMenuRightClick = (e) => {
    e.preventDefault();
    setX(e.clientX - 50);
    setY(e.clientY - 50);
    ContextFolder;
  };

  return (
    <DocumentContainer
      onContextMenu={(e) => {
        contextMenuRightClick(e), handleClick(e);
      }}
    >
      {RolSesion[2] == "Administrator" && ContextFolder ? (
        <FolderMenu x={x} y={y} cabinetId={SelectedCabinet.id} />
      ) : (
        <></>
      )}

      {RolSesion[2] == "Writer" && ContextFolder ? (
        <FolderMenu x={x} y={y} cabinetId={SelectedCabinet.id} />
      ) : (
        <></>
      )}

      {selected === "cabinet" && selectedView != "list" ? (
        FoldersCabinet.map(({ id, name, description, cabinetId }, index) => (
          <Gridcabinet
            key={index}
            id={id}
            cabinetId={cabinetId}
            name={name}
            description={description}
            element="folder"
          />
        ))
      ) : (
        <></>
      )}

      {selected === "cabinet" && FoldersCabinet == "" ? (
        <GridDefaultFolder />
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

export default CabinetContainer;
