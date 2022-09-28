import {
  ContainerOptions,
  ContainerTitle,
} from "../../../../Styles/Documentary";
import FolderHeaders from "../../Traditional/HeadersTraditional/FolderHeaders";
import CabinetTitles from "../../Traditional/HeadersTraditional/CabinetTitles";
import { useDispatch, useSelector } from "react-redux";


const ActionsFolder = () => {
  const dispatch = useDispatch();
  const { actionCore } = useSelector((store) => store);
  const { FoldersCabinet } = actionCore;

  return (
    <>
      <ContainerOptions>
        <FolderHeaders />
      </ContainerOptions>

      {FoldersCabinet != "" && (
        <ContainerTitle>
          <CabinetTitles />
        </ContainerTitle>
      )}
    </>
  );
};

export default ActionsFolder;
