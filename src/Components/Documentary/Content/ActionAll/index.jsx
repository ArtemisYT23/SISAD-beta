import { ActionsGridContainer } from "../../../../Styles/Documentary";
import { FilterContainer } from "../../../../Styles/Documentary/Actions";
import {
  ActionsContainer,
  ContainerVista,
} from "../../../../Styles/Documentary";
import { useSelector } from "react-redux";
import OptionView from "../OptionView";
import ActionGroup from "../ActionGroup";
import ActionsCabinet from "../Actions";
import ActionsFolder from "../ActionsFolder";

const ActionsAll = () => {
  const { viewCore } = useSelector((store) => store);
  const { selected, selectedView } = viewCore;

  return (
    <ActionsContainer>
      <ContainerVista>
        <FilterContainer />
        <OptionView />
      </ContainerVista>

      {selected === "group" && selectedView === "list" ? (
        <ActionGroup />
      ) : (
        <></>
      )}

      {selected === "GroupMantent" && selectedView === "list" ? (
        <ActionGroup />
      ) : (
        <></>
      )}

      {selected === "CabinetAll" && selectedView === "list" ? (
        <ActionsCabinet />
      ) : (
        <></>
      )}

      {selected === "cabinet" && selectedView === "list" ? (
        <ActionsFolder />
      ) : (
        <></>
      )}
    </ActionsContainer>
  );
};

export default ActionsAll;
