import { useState } from "react";
import {
  ViewsTypeContainerCabinet,
  NameLabel,
  ContainerIcon,
  Grid,
  Traditional,
} from "../../../../Styles/Documentary/Actions";
import {
  getAllViewListAndTraditional,
  getAllViewGridAndTraditional,
} from "../../../../Store/Core";
import { setCloseDetalleModal } from "../../../../Store/ModalDocumentary";
import { setCloseContextFolder } from "../../../../Store/ModalCore";
import { useDispatch } from "react-redux";
import NavBarIcon from "../Actions/Icons";

const OptionView = () => {
  const dispatch = useDispatch();

  const ChangeOptionViewList = () => {
    dispatch(getAllViewListAndTraditional());
  };

  const ChangeOptionViewGrid = () => {
    dispatch(getAllViewGridAndTraditional());
  };

  const [push, setPush] = useState("GridViewInactive");
  const [pushed, setPushed] = useState("");

  const ActiveGrid = () => {
    setPushed("TraditionalView");
    setPush("GridViewInactive");
    dispatch(setCloseDetalleModal(false));
    dispatch(setCloseContextFolder(false))
  };

  const ActiveTraditional = () => {
    setPush("GridView");
    setPushed("TraditionalViewInactive");
    dispatch(setCloseDetalleModal(false));
    dispatch(setCloseContextFolder(false))
  };

  return (
    <ViewsTypeContainerCabinet>
      <NameLabel>Vista:</NameLabel>
      <ContainerIcon>

        <Grid
          onClick={() => {
            ActiveGrid(), ChangeOptionViewGrid();
          }}
        >
          <NavBarIcon name="gridview" push={push} />
        </Grid>

        <Traditional
          onClick={() => {
            ChangeOptionViewList(), ActiveTraditional();
          }}
        >
          <NavBarIcon name="traditional" pushed={pushed} />
        </Traditional>

      </ContainerIcon>
    </ViewsTypeContainerCabinet>
  );
};

export default OptionView;
