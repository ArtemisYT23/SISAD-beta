import {
  ActionsContainer,
  ContainerVista,
  ContainerOptions,
} from "../../../../Styles/Documentary";
import {
  FilterContainer,
} from "../../../../Styles/Documentary/Actions";
import MetadataHeaders from "../../Traditional/HeadersTraditional/MetadataHeaders";
import OptionView from "../OptionView";

const ActionMetadata = () => {
  return (
    <ActionsContainer>
      <ContainerVista>
        <FilterContainer />
        <OptionView />
      </ContainerVista>

      <ContainerOptions>
        <MetadataHeaders />
      </ContainerOptions>
    </ActionsContainer>
  );
};

export default ActionMetadata;
