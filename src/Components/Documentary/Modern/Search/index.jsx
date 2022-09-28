import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllCabinetsCore,
  getAllGroupsCore,
  getAllFoldersCore,
  setFileCleanerAllDocument,
  setFilterCabinetsByName,
} from "../../../../Store/Core";

import {
  setSelectedCabinetCore,
  setFilterFoldersCore,
  setSelectedFolderCore,
  setFilterGroupsCore,
  setSelectedGroupCore,
} from "../../../../Store/ActionCore"

import {
  setSelectedSearchTreeCore,
  setSelectedSearchMetadataCore,
} from "../../../../Store/ViewCore";

import {
  getAllDocumentDocu,
  setFilterDocumentDocu,
  AggFolderMetadataSelected,
  getMetadataByFolder,
  setFilterFoldersByName
} from "../../../../Store/Documentary";
import { 
  setFilterFileByName
} from "../../../../Store/ConfigDocumentary";

import {
  SearchContainer,
  SearchInput,
  Titulo,
  List,
  Rec,
} from "../../../../Styles/Documentary/Modern/Search";
import ItemCelda from "./ItemCelda";
import { setCloseDetalleModal } from "../../../../Store/ModalDocumentary";
import { setCloseContextFolder, getNameGlobalChange } from "../../../../Store/ModalCore";
import { useState } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const { core, actionCore , documentary } = useSelector((store) => store);
  const { cabinets, groups, foldersCore } = core;
  const { FoldersCabinet } = actionCore;
  const { documents } = documentary;

  useEffect(() => {
    
     groups.length === 0 && dispatch(getAllGroupsCore());

    documents.length === 0 && dispatch(getAllDocumentDocu());
  }, []);

  const selectGroup = (index, name) => {
    dispatch(setSelectedGroupCore(index));
    dispatch(setFilterGroupsCore(index));
    dispatch(setSelectedSearchTreeCore());
    dispatch(setCloseDetalleModal(false));
    dispatch(setCloseContextFolder(false));
    dispatch(getNameGlobalChange(name));
  };

  const selectGab = (index, name) => {
    dispatch(setSelectedCabinetCore(index));
    dispatch(setFilterFoldersCore(index));
    dispatch(setSelectedSearchTreeCore());
    dispatch(setCloseDetalleModal(false));
    dispatch(setCloseContextFolder(false));
    dispatch(getNameGlobalChange(name));
  };

  const selectFol = (index, cabinetId, name) => {
    dispatch(setSelectedFolderCore(index));
    dispatch(setFilterDocumentDocu(index));
    dispatch(setSelectedSearchMetadataCore());
    dispatch(AggFolderMetadataSelected(index));
    dispatch(getMetadataByFolder(index, cabinetId));
    dispatch(setCloseDetalleModal(false));
    dispatch(setCloseContextFolder(false));
    dispatch(getNameGlobalChange(name));
    dispatch(setFileCleanerAllDocument());
  };

  const [Search, setSearch] = useState("");

  const BusquedaGlobal = (name) => {
    setSearch(name);
  };

  const Submit = (e) => {
    e.preventDefault();
    dispatch(setFilterCabinetsByName(Search));
    dispatch(setFilterFoldersByName(Search));
    dispatch(setFilterFileByName(Search));
  }

  return (
    <SearchContainer>
      <form onSubmit={Submit}>
      <SearchInput placeholder="Buscar" onChange={(e) => BusquedaGlobal(e.target.value)}/>
      </form>
      <ul>
        <List className="">
          <Titulo>Grupos</Titulo>
          {groups ? (
            groups.map(({ id, name }) => (
              <div onClick={() => selectGroup(id, name)}>
                <ItemCelda
                  key={id}
                  index={id}
                  id={id}
                  name={name}
                  element="group"
                />
              </div>
            ))
          ) : (
            <></>
          )}
        </List>
        <List>
          <Rec />
        </List>
        <List>
          <Titulo>Gabinetes</Titulo>
          {cabinets ? (
            cabinets.map(({ id, name }) => (
              <div onClick={() => selectGab(id, name)}>
                <ItemCelda
                  key={id}
                  index={id}
                  id={id}
                  name={name}
                  element="cabinet"
                />
              </div>
            ))
          ) : (
            <></>
          )}
        </List>
        <List>
          <Rec />
        </List>
        <List>
          <Titulo>Carpetas</Titulo>
          {FoldersCabinet ? (
            FoldersCabinet.map(({ id, name, cabinetId }) => (
              <div onClick={() => selectFol(id, cabinetId, name)}>
                <ItemCelda
                  key={id}
                  index={id}
                  id={id}
                  name={name}
                  element="folder"
                />
              </div>
            ))
          ) : (
            <></>
          )}
        </List>
      </ul>
    </SearchContainer>
  );
};

export default Search;
