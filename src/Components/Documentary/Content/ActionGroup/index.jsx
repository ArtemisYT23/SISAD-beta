import {
  ActionsContainer,
  ContainerVista,
  ContainerOptions,
  ContainerTitle,
} from "../../../../Styles/Documentary";
import {
  FilterContainer,
} from "../../../../Styles/Documentary/Actions";
import CabinetTitles from "../../Traditional/HeadersTraditional/CabinetTitles";
import GroupHeaders from "../../Traditional/HeadersTraditional/GroupHeaders";
import OptionView from "../OptionView";

const ActionGroup = () => {
  return (
    <>
      <ContainerOptions>
        <GroupHeaders />
      </ContainerOptions>

      <ContainerTitle>
       <CabinetTitles />
      </ContainerTitle>

    </>
  );
};

export default ActionGroup;
