import {
  GridElemmentContainer,
  NumberOfElementChild,
  ElementName,
} from "../../../Styles/Documentary/Modern/GridElement";
import ElementIcon from "../../../Styles/Documentary/Modern/GridContentIcon/Icons";
import { useDispatch } from "react-redux";
import {
  setSelectedCabinetCore,
  setFilterFoldersCore,
} from "../../../Store/Core";
import { useNavigate } from "react-router-dom";

const Cabinets = ({ id, name, element }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const SelectedCabinetCreated = (index) => {
    console.log(index);
    navigate("/documentary");
    dispatch(setSelectedCabinetCore(index));
    dispatch(setFilterFoldersCore(index));
  };

  return (
    <GridElemmentContainer onDoubleClick={(e) => SelectedCabinetCreated(id)}>
      <ElementIcon element={element} />
      <NumberOfElementChild>2 documentos</NumberOfElementChild>
      <ElementName>{name}</ElementName>
    </GridElemmentContainer>
  );
};

export default Cabinets;
