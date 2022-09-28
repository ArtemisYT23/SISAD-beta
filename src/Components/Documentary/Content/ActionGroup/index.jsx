import {
  ContainerOptions,
  ContainerTitle,
} from "../../../../Styles/Documentary";

import CabinetTitles from "../../Traditional/HeadersTraditional/CabinetTitles";
import GroupHeaders from "../../Traditional/HeadersTraditional/GroupHeaders";

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
