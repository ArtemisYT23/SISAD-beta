import { ContainerView } from "../../../../../Styles/Traditional";
import { useSelector } from "react-redux";
import GridDefaultDocument from "../../../../Documentary/Modern/GridsContent/GridDefaultDocument";

const DocumentTraditional = () => {

    const { core, documentary } = useSelector((store) => store);
    const { DocumentFolder } = documentary;
    const { SelectedCabinet, SelectedFolder } = core;

  return (
    <ContainerView>
    
      {DocumentFolder == "" && (
        <GridDefaultDocument
          id={SelectedFolder.id}
          cabinetId={SelectedCabinet.id}
        />
      )}

    </ContainerView>
  );
};

export default DocumentTraditional;
