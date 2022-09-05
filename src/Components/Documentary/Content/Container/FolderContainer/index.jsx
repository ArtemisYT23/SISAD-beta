import { useState } from "react";
import { DocumentContainer } from "../../../../../Styles/Documentary";
import { setOpenMenuContextDocument } from "../../../../../Store/ModalCore";
import { useDispatch, useSelector } from "react-redux";
import Gridfolder from "../../../Modern/GridsContent/Gridfolder";
import GridDefaultDocument from "../../../Modern/GridsContent/GridDefaultDocument";
import DocumentMenu from "../../MenuContext/DocumentMenu";
import toast, { Toaster } from "react-hot-toast";

const FolderContainer = () => {
  const dispatch = useDispatch();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const { core, documentary, modalCore } = useSelector((store) => store);
  const { DocumentFolder } = documentary;
  const { SelectedCabinet, SelectedFolder, selected, selectedView } = core;
  const { ContextDocument } = modalCore;

  const handleClick = (e) => {
    dispatch(setOpenMenuContextDocument());
  };

  const contextMenuRightClick = (e) => {
    e.preventDefault();
    setX(e.clientX - 50);
    setY(e.clientY - 50);
    ContextDocument;
  };

  return (
    <DocumentContainer
      onContextMenu={(e) => {
        contextMenuRightClick(e), handleClick(e);
      }}
    >
      {ContextDocument ? (
        <DocumentMenu x={x} y={y} folderId={SelectedFolder.id} />
      ) : (
        <></>
      )}

      {selected === "folder" && selectedView === "grid" ? (
        DocumentFolder.map(({ id, folderId }, index) => (
          <Gridfolder
            key={index}
            id={id}
            folderId={folderId}
            element="document"
            cabinetId={SelectedCabinet?.id}
          />
        ))
      ) : (
        <></>
      )}

      {selected === "folder" && DocumentFolder == "" ? (
        <GridDefaultDocument
          id={SelectedFolder.id}
          cabinetId={SelectedCabinet?.id}
        />
      ) : (
        <></>
      )}

      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          duration: 4000,
          style: {
            background: "#F68A20",
            color: "#fff",
          },
        }}
      />
    </DocumentContainer>
  );
};

export default FolderContainer;
