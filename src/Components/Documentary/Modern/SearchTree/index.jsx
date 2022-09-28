import { SearchContainer, SearchInput } from "../../../../Styles/Documentary/Modern/Search";
import {
  ContainerList,
  UL,
  LI,
} from "../../../../Styles/Documentary/Modern/SearchTree";
import ItemTree from "./ItemTree";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PrimaryItem from "./PrimaryItem";
import { setFilterCabinetsByName } from "../../../../Store/Core";
import { setFilterFoldersByName } from "../../../../Store/Documentary";

const SearchTree = () => {
  const dispatch = useDispatch();
  const { core } = useSelector((store) => store);
  const { cabinets, foldersCore, groups } = core;

  const [Search, setSearch] = useState("");

  const BusquedaGlobal = (name) => {
    setSearch(name);
  };

  const Submit = (e) => {
    e.preventDefault();
    dispatch(setFilterCabinetsByName(Search));
    dispatch(setFilterFoldersByName(Search));
  }

  return (
    <SearchContainer>
      <form onSubmit={Submit}>
        <SearchInput placeholder="Buscar" onChange={(e) => BusquedaGlobal(e.target.value)}/>
      </form>
      <br />
        <ContainerList>
          <UL>
            <LI>Grupos</LI>
            <>
            {groups ? (
              groups.map(({id, name}) =>
             <PrimaryItem id={id}  name={name}/>
             )
            ) : (
              <></>
            )}
            </>
  

          </UL>
          <UL>
          <> 
           <LI>Gabinetes</LI>
            {cabinets ? (
              cabinets.map(({id, name}) =>
              <ItemTree id={id} key={id} name={name}/>
              )
            ) : (
              <></>
            )}
            </>
          </UL>
        </ContainerList>

    </SearchContainer>
  );
};

export default SearchTree;
