import {
  GridElemmentContainer,
  NumberOfElementChild,
  ElementName,
} from "../../../../Styles/Documentary/Modern/GridElement";
import ElementIcon from "../../../../Styles/Documentary/Modern/GridContentIcon/Icons";
import { setFilterFoldersCore } from "../../../../Store/ActionCore";
import { getNameGlobalChange } from "../../../../Store/ModalCore";
import { useDispatch } from "react-redux";

const ItemCabinets = ({ id, name, element }) => {

  const dispatch = useDispatch();

  const handleClick = (index, name) => {
    dispatch(setFilterFoldersCore(index));
    dispatch(getNameGlobalChange(name));
  }

  return (
    <GridElemmentContainer onClick={() => handleClick(id, name)}>
        <ElementIcon element={element}/>
        <NumberOfElementChild>Carpetas</NumberOfElementChild>
        <ElementName>{name}</ElementName>
   </GridElemmentContainer>
 );
};

export default ItemCabinets;
