import { useSelector } from "react-redux";
import GroupContainer from "../Container/GroupContainer";
import CabinetContainer from "../Container/CabinetContainer";
import FolderContainer from "../Container/FolderContainer";
import FileContainer from "../Container/FileContainer";
import ConfigCabinet from "../Container/ConfigCabinet";
import AllCabinetContainer from "../Container/AllContainerCabinet";

const ContentGrid = () => {
  const { core, modalConfig } = useSelector((store) => store);
  const { selected, selectedView } = core;
  const { selectedConfig } = modalConfig;

  return (
    <>
      {selected === "" || selected === "group"  ? <GroupContainer /> : <></>}

      {selected === "CabinetAll" && selectedView === "grid" ? <AllCabinetContainer /> : <></>}

      {selected === "cabinet" && selectedView === "grid" ? <CabinetContainer /> : <></>}

      {selected === "folder" && selectedView === "grid" ? <FolderContainer /> : <></>}

      {selected === "files" && selectedView === "grid" ? <FileContainer /> : <></>}

      {selectedConfig === "ConfigCabinet" ? <ConfigCabinet /> : <></>}
    </>
  );
};

export default ContentGrid;
