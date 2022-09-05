import { ContainerView } from "../../../../../Styles/Traditional";
import { useSelector } from "react-redux";
import FolderDefault from "../../../Traditional/ContainerTraditional/FolderDefault";
import GridDefaultFolder from "../../../../Documentary/Modern/GridsContent/GridDefaultFolder";
import toast, { Toaster } from "react-hot-toast";

const FoldeTraditional = () => {
  const { core } = useSelector((store) => store);
  const { FoldersCabinet, selected, selectedView } = core;

  return (
    <ContainerView>
      {selected === "cabinet" && selectedView === "list" ? (
        FoldersCabinet.map(({ id, name, description, cabinetId }) => (
          <FolderDefault
            key={id}
            index={id}
            id={id}
            name={name}
            description={description}
            cabinetId={cabinetId}
            element="folder"
          />
        ))
      ) : (
        <></>
      )}

      {FoldersCabinet == "" && <GridDefaultFolder />}

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
    </ContainerView>
  );
};

export default FoldeTraditional;
