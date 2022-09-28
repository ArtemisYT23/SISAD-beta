import {
  ContainerIcons,
  CabinetIcons,
  EditContainer,
  DeleteContainer,
} from "../CabinetHeaders/StyleIcons";
import NewCabi from "../../../../../../assets/images/Nuevo.png";
import EditCabi from "../../../../../../assets/images/Editar.png";
import Delete from "../../../../../../assets/images/Delete.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenModalGroupCreated,
  setOpenModalGroupUpdate,
  setOpenModalGroupDelete,
} from "../../../../../Store/ModalCore";
import GroupCreated from "../../../Modern/ModalesCore/GroupCreated";
import GroupUpdate from "../../../Modern/ModalesCore/GroupUpdate";
import GroupDelete from "../../../Modern/ModalesCore/GroupDelete";

const GroupHeaders = () => {
  const dispatch = useDispatch();
  const { actionCore } = useSelector((store) => store);
  const { SelectedGroup } = actionCore;

  const OpenGroupCreated = () => {
    dispatch(setOpenModalGroupCreated());
  };

  const OpenGroupUpdate = () => {
    dispatch(setOpenModalGroupUpdate());
  };

  const OpenGroupDelete = () => {
    dispatch(setOpenModalGroupDelete());
  };

  return (
    <ContainerIcons>
      <CabinetIcons onClick={() => OpenGroupCreated()}>
        <img src={NewCabi} alt="cargando" />
      </CabinetIcons>

      <EditContainer onClick={() => OpenGroupUpdate()}>
        <img src={EditCabi} alt="cargando" />
      </EditContainer>

      <DeleteContainer onClick={() => OpenGroupDelete()}>
        <img src={Delete} alt="cargando" />
      </DeleteContainer>

      <GroupCreated />

      {SelectedGroup && (
        <GroupUpdate
          id={SelectedGroup.id}
          name={SelectedGroup.name}
          description={SelectedGroup.description}
        />
      )}

      {SelectedGroup && (
        <GroupDelete
          id={SelectedGroup.id}
          name={SelectedGroup.name}
        />
      )}
    </ContainerIcons>
  );
};

export default GroupHeaders;
