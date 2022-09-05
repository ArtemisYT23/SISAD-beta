import {
  ActionsContainer,
  ContainerVista,
  ContainerOptions,
  ContainerTitle,
} from "../../../../Styles/Documentary";
import { FilterContainer } from "../../../../Styles/Documentary/Actions";
import CabinetHeaders from "../../Traditional/HeadersTraditional/CabinetHeaders";
import CabinetTitles from "../../Traditional/HeadersTraditional/CabinetTitles";
import OptionView from "../OptionView";

const ActionsCabinet = () => {
  return (
    <>
      <ContainerOptions>
        <CabinetHeaders />
      </ContainerOptions>

      <ContainerTitle>
        <CabinetTitles />
      </ContainerTitle>
    </>
  );
};

export default ActionsCabinet;
