import { useSelector } from "react-redux";
import { NotIndexContent } from "../../../../../Styles/Documentary/Modern/IndexDefaultStyles/Icons";
import {
  DefaultIndex,
  ContentColumn,
  TitleIndex,
  ContainerButton,
  ButtonNewIndex,
} from "../../../../../Styles/Documentary/Modern/IndexDefaultStyles";
import { useDispatch } from "react-redux";
import IndexCreated from "../../ModalesDocumentary/IndexCreated";
import { setOpenModalConfigCreated } from "../../../../../Store/ModalConfig";
import toast, { Toaster } from "react-hot-toast";

const IndexDefault = () => {
  const dispatch = useDispatch();
  const { actionCore } = useSelector((store) => store);
  const { SelectedCabinet } = actionCore;

  const OpenConfigModalIndex = () => {
    dispatch(setOpenModalConfigCreated());
  };

  return (
    <DefaultIndex>
      <ContentColumn>
        <NotIndexContent />
        <TitleIndex>Sin Índices</TitleIndex>

        <ContainerButton>
          <ButtonNewIndex onClick={() => OpenConfigModalIndex()}>
            Nuevo Indice
          </ButtonNewIndex>
        </ContainerButton>

        <IndexCreated
          nameCabinet={SelectedCabinet.name}
          cabinetId={SelectedCabinet.id}
        />
      </ContentColumn>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "",
          duration: 4000,
          style: {
            background: "#F68A20",
            color: "#fff",
          },
        }}
      />
    </DefaultIndex>
  );
};

export default IndexDefault;
