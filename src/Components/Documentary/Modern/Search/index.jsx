import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllCabinetsCore,
  getAllGroupsCore,
  setSelectedCabinetCore,
  setFilterFoldersCore,
  getAllFoldersCore,
  setFilterGroupsCore,
  setSelectedFolderCore,
  setSelectedGroupCore,
  setSelectedSearchTreeCore,
  setSelectedSearchMetadataCore,
} from "../../../../Store/Core";

import {
  getAllDocumentDocu,
  setFilterDocumentDocu,
  AggFolderMetadataSelected,
  getMetadataByFolder,
} from "../../../../Store/Documentary";

import {
  SearchContainer,
  SearchInput,
  Titulo,
  Items,
  Icons,
  List,
  Name,
  Rec,
} from "../../../../Styles/Documentary/Modern/Search";
import ItemCelda from "./ItemCelda";
import { setCloseDetalleModal } from "../../../../Store/ModalDocumentary";
import { setCloseContextFolder } from "../../../../Store/ModalCore";

const Search = () => {
  const dispatch = useDispatch();
  const { core, documentary } = useSelector((store) => store);
  const { cabinets, groups, foldersCore, FoldersCabinet } = core;

  const { documents } = documentary;

  useEffect(() => {
    cabinets.length === 0 && dispatch(getAllCabinetsCore());

    groups.length === 0 && dispatch(getAllGroupsCore());

    foldersCore.length === 0 && dispatch(getAllFoldersCore());

    documents.length === 0 && dispatch(getAllDocumentDocu());
  }, []);

  const selectGroup = (index) => {
    dispatch(setSelectedGroupCore(index));
    dispatch(setFilterGroupsCore(index));
    dispatch(setSelectedSearchTreeCore());
    dispatch(setCloseDetalleModal(false));
    dispatch(setCloseContextFolder(false));
  };

  const selectGab = (index) => {
    dispatch(setSelectedCabinetCore(index));
    dispatch(setFilterFoldersCore(index));
    dispatch(setSelectedSearchTreeCore());
    dispatch(setCloseDetalleModal(false));
    dispatch(setCloseContextFolder(false));
  };

  const selectFol = (index, cabinetId) => {
    dispatch(setSelectedFolderCore(index));
    dispatch(setFilterDocumentDocu(index));
    dispatch(setSelectedSearchMetadataCore());
    dispatch(AggFolderMetadataSelected(index));
    dispatch(getMetadataByFolder(index, cabinetId));
    dispatch(setCloseDetalleModal(false));
    dispatch(setCloseContextFolder(false));
  };

  return (
    <SearchContainer>
      {/* <SearchInput placeholder="Buscar" /> */}
      <ul>
        <List className="">
          <Titulo>Grupos</Titulo>
          {groups ? (
            groups.map(({ id, name }) => (
              <div onClick={() => selectGroup(id)}>
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
              <div onClick={() => selectGab(id)}>
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
              <div onClick={() => selectFol(id, cabinetId)}>
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
