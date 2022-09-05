import { useDispatch, useSelector } from "react-redux";
import {
  ContainerDefault,
  Title,
  ContainerContent,
} from "../../../../../Styles/Documentary/Modern/GridDefaultfolder";
import { ElementDefaultCabinet } from "../../../../../Styles/Documentary/Modern/GridDefaultfolder/Icons";

const GridDefaultGroup = () => {
  return (
    <ContainerDefault>
      <ContainerContent>
        <ElementDefaultCabinet x={150} y={150} />
        <Title>SIN GABINETES ASIGNADOS</Title>
      </ContainerContent>
    </ContainerDefault>
  );
};

export default GridDefaultGroup;
