import { useSelector } from "react-redux";
import GroupTraditional from "./ContentTraditional/GroupTraditional";
import DocumentConsult from "./ContentTraditional/DocumentConsult";
import FolderTraditional from "../Traditional/ContentTraditional/FoldeTraditional";
import CabinetTraditional from "../Traditional/ContentTraditional/CabinetTraditional";
import GroupMantentTraditional from "./ContentTraditional/GroupMantentTraditional";
import SearchTraditionalContainer from "./ContentTraditional/SearchTraditionalContainer";

const DocumentaryTraditional = () => {
  const { viewCore } = useSelector((store) => store);
  const { selected, selectedSearch, selectedView } = viewCore;

  return (
    <>
      {selected === "" || selectedSearch === "MetadataSearch" ? (
        <DocumentConsult />
      ) : (
        <></>
      )}

      {selected === "CabinetAll" && selectedView === "list" ? (
        <CabinetTraditional />
      ) : (
        <></>
      )}

      {selected === "GroupMantent" && selectedView === "list" ? (
        <GroupMantentTraditional />
      ) : (
        <></>
      )}

      {selected === "group" && selectedView === "list" ? (
        <GroupTraditional />
      ) : (
        <></>
      )}

      {selected === "cabinet" && selectedView === "list" ? (
        <FolderTraditional />
      ) : (
        <></>
      )}

      {selected === "folder" &&
      selectedView === "list" &&
      selectedSearch === "TraditionalTree" ? (
        <DocumentConsult />
      ) : (
        <></>
      )}

      {selected === "search" &&
      selectedView === "list" &&
      selectedSearch === "TraditionalTree" ? (
        <SearchTraditionalContainer />
      ) : (
        <></>
      )}
    </>
  );
};

export default DocumentaryTraditional;
