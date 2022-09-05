import {
  ActionsContainer,
  ContainerVista,
  ContainerOptions,
  ContainerTitle,
} from "../../../../Styles/Documentary";
import {
  FilterContainer,
} from "../../../../Styles/Documentary/Actions";
import FolderHeaders from "../../Traditional/HeadersTraditional/FolderHeaders";
import CabinetTitles from "../../Traditional/HeadersTraditional/CabinetTitles";
import { useDispatch, useSelector } from "react-redux";
import OptionView from "../OptionView";

const ActionsFolder = () => {
  const dispatch = useDispatch();
  const { core } = useSelector((store) => store);
  const { selected, FoldersCabinet } = core;

  return (
    <>
    {/* <ActionsContainer>
      <ContainerVista>
        <FilterContainer />
        <OptionView />
      </ContainerVista> */}

      <ContainerOptions>
        <FolderHeaders />
      </ContainerOptions>

      {FoldersCabinet != "" && (
        <ContainerTitle>
          <CabinetTitles />
        </ContainerTitle>
      )}
    {/* </ActionsContainer> */}
    </>
  );
};

export default ActionsFolder;
