import { ActionsContainer, ContainerVista, ContainerOptions} from "../../../../Styles/Documentary";
import { FilterContainer} from "../../../../Styles/Documentary/Actions";
import DocumentHeaders from "../../Traditional/HeadersTraditional/DocumentHeaders";
import OptionView from "../OptionView";

const ActionDocument = () => {
    return(
        <ActionsContainer>
            <ContainerVista>
            <FilterContainer />
            <OptionView />
            </ContainerVista>

            <ContainerOptions>
              <DocumentHeaders />
            </ContainerOptions>

        </ActionsContainer>
    );
}

export default ActionDocument;
