import React from "react";
import { DocumentaryAsideContainer } from "../../../Styles/Documentary";
import { useDispatch, useSelector } from "react-redux";
import Search from "../Modern/Search";
import ContainerSearch from "../Traditional/ContainerSearch";

const DocumentaryAside = () => {

  const { viewCore } = useSelector((store) => store);
  const { selectedView } = viewCore;

  return (
    <DocumentaryAsideContainer>
      {selectedView === "" || selectedView === "grid" ? <Search /> : <></>}
      
      {selectedView === "list" ? <ContainerSearch /> : <></>}

    </DocumentaryAsideContainer>
  );
};

export default DocumentaryAside;
