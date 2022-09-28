import {
  PanelPermision,
  PanelFirstSelection,
  PanelSecondSelection,
  ContainerCabinet,
  PanelThirstCabinet,
} from "../../../../Styles/Dashboard/ContentDashboard/PanelConfigPermision";
import PanelFirstUser from "./PanelFirstUser";
import ItemCabinets from "../ItemCabinets";
import PanelThirstUser from "./PanelThirstUser";
import { useDispatch, useSelector } from "react-redux";

const FolderPermision = () => {

  const { core } = useSelector((store) => store);
  const { cabinets } = core;

  return (
    <PanelPermision>
      <PanelFirstSelection>
        <PanelFirstUser />
      </PanelFirstSelection>

      <PanelSecondSelection>
        <ContainerCabinet>
          {cabinets.map((app, index) => (
            <ItemCabinets id={app.id} name={app.name} element={"cabinet"}/>
          ))}
        </ContainerCabinet>
      </PanelSecondSelection>

      <PanelThirstCabinet>
        <PanelThirstUser />
      </PanelThirstCabinet>
    </PanelPermision>
  );
};

export default FolderPermision;
