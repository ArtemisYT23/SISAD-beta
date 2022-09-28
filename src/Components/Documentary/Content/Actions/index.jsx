import {
  ContainerOptions,
  ContainerTitle,
} from "../../../../Styles/Documentary";
import CabinetHeaders from "../../Traditional/HeadersTraditional/CabinetHeaders";
import CabinetTitles from "../../Traditional/HeadersTraditional/CabinetTitles";

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
