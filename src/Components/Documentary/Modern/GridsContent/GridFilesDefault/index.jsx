import { useSelector } from "react-redux";
import { ContainerDefault, Title, ContainerContent, ContainerNew, ButtonNew } from "../../../../../Styles/Documentary/Modern/GridDefaultfolder";
import { ElementDefaultDocuments } from "../../../../../Styles/Documentary/Modern/GridDefaultfolder/Icons";

const GridFilesDefault = () => {
    return(
        <ContainerDefault>
            <ElementDefaultDocuments />
            <Title>Sin Archivos Cargados</Title>
        </ContainerDefault>
    );
};

export default GridFilesDefault;