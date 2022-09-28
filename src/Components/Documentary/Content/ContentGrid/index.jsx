import { useSelector } from "react-redux";
import GroupContainer from "../Container/GroupContainer";
import CabinetContainer from "../Container/CabinetContainer";
import FolderContainer from "../Container/FolderContainer";
import FileContainer from "../Container/FileContainer";
import ConfigCabinet from "../Container/ConfigCabinet";
import SearchContainer from "../Container/SearchContainer";
import AllCabinetContainer from "../Container/AllContainerCabinet";

const ContentGrid = () => {
  const { modalConfig, viewCore } = useSelector((store) => store);
  const { selected, selectedView } = viewCore;
  const { selectedConfig } = modalConfig;

  return (
    <>
      {selected === "" || selected === "group"  ? <GroupContainer /> : <></>}

      {selected === "CabinetAll" && selectedView === "grid" ? <AllCabinetContainer /> : <></>}

      {selected === "cabinet" && selectedView === "grid" ? <CabinetContainer /> : <></>}

      {selected === "folder" && selectedView === "grid" ? <FolderContainer /> : <></>}

      {selected === "search" && selectedView === "grid" ? <SearchContainer /> : <></>}

      {selectedConfig === "ConfigCabinet" ? <ConfigCabinet /> : <></>}
    </>
  );
};

export default ContentGrid;
