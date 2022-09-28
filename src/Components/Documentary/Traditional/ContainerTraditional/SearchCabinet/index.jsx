import { useSelector, useDispatch } from "react-redux";
import { ContainerSearchCab } from "../../../../../Styles/Traditional/SearchCabinet";
import {
  ContainerDescription,
  ContainerIcon,
  ContainerOptions,
  ContainerTitle,
  ContainerTraditional,
  Title,
  TitleCabinet,
} from "../../../../../Styles/Traditional/CabinetTraditional";
import { CabinetTraditional, OptionsTraditional } from "../../../../../Styles/Traditional/CabinetTraditional/Icon";

const SearchCabinet = ({ id, name, description, element }) => {
  return (
    <ContainerSearchCab>
      <ContainerIcon>
         <CabinetTraditional w={24} h={24} /> 
      </ContainerIcon>

      <ContainerTitle>
        <TitleCabinet>{name}</TitleCabinet>
      </ContainerTitle>

      <ContainerDescription>
        <Title>{description}</Title>
      </ContainerDescription>

      <ContainerOptions>
        <OptionsTraditional w={20} h={20} />
      </ContainerOptions>

    </ContainerSearchCab>
  );
};

export default SearchCabinet;
