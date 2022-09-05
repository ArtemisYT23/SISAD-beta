import { useSelector } from "react-redux";
import GroupTraditional from "./ContentTraditional/GroupTraditional";
import DocumentConsult from "./ContentTraditional/DocumentConsult";
import FolderTraditional from "../Traditional/ContentTraditional/FoldeTraditional";
import CabinetTraditional from "../Traditional/ContentTraditional/CabinetTraditional";
import GroupMantentTraditional from "./ContentTraditional/GroupMantentTraditional";

const DocumentaryTraditional = () => {
  const { core } = useSelector((store) => store);
  const { selected, selectedSearch, selectedView } = core;

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

      {selected === "folder" && selectedView === "list" && selectedSearch === "TraditionalTree" ? (
        <DocumentConsult />
      ) : (
        <></>
      )}
    </>
  );
};

export default DocumentaryTraditional;
