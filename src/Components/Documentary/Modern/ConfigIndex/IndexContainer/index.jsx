import { useDispatch, useSelector } from "react-redux";
import { setOpenModalConfigCreated } from "../../../../../Store/ModalConfig";

import {
  ContainerIndex,
  HeadersContainer,
  ContainerButton,
  NewIndex,
  TableContainer,
  TableRaid,
  TH,
  TD1,
  Title,
  ContainerSelect,
  CeldaContainer,
} from "../../../../../Styles/Managment/Modern/IndexConfig";

import {
  TituloSelect,
  OptionsSelect,
} from "../../../../../Styles/Documentary/Modern/SearchMetadata";
import {
  setOpenModalConfigUpdate,
  setOpenModalConfigDelete,
} from "../../../../../Store/ModalConfig";
import { SelectedIndexConfig } from "../../../../../Store/ConfigDocumentary";

import IndexCreated from "../../ModalesDocumentary/IndexCreated";
import IndexUpdate from "../../ModalesDocumentary/IndexUpdate";
import IndexDelete from "../../ModalesDocumentary/IndexDelete";
import toast, { Toaster } from 'react-hot-toast';

const IndexContainer = () => {
  const dispatch = useDispatch();
  const { core, configDocument, actionCore } = useSelector((store) => store);
  const { SelectedCabinet } = actionCore;
  const { IndexAllCabinet } = core;
  const { IndexSelected } = configDocument;

  const OpenModalIndexCreatedConfig = () => {
    dispatch(setOpenModalConfigCreated());
  };

  const OpenModalUpdateIndex = () => {
    dispatch(setOpenModalConfigUpdate());
  };

  const OpenModalDeleteIndex = () => {
    dispatch(setOpenModalConfigDelete());
  };

  const SelectedIndexCabinet = (id) => {
    dispatch(SelectedIndexConfig(id));
  };

  const SelectedCabinetColor = (index) => {
    console.log("object");
    const collection = document.getElementsByClassName("Celda");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.backgroundColor = "white";
      collection[i].style.color = "#808080";
      if (index === index) {
        document.getElementById(index).style.backgroundColor = "#f68b20d1";
        document.getElementById(index).style.color = "#fcfbf9";
      }
    }
  };

  return (
    <ContainerIndex>
      <HeadersContainer>
        <ContainerButton>
          <NewIndex onClick={(e) => OpenModalIndexCreatedConfig()}>
            Nuevo
          </NewIndex>
          <NewIndex onClick={(e) => OpenModalUpdateIndex()}>Editar</NewIndex>
          <NewIndex onClick={(e) => OpenModalDeleteIndex()}>Eliminar</NewIndex>
        </ContainerButton>

        <ContainerSelect>
          <TituloSelect>
            <OptionsSelect>{SelectedCabinet.name}</OptionsSelect>
          </TituloSelect>
        </ContainerSelect>
      </HeadersContainer>
      <br />

      <TableContainer>
        <TableRaid>
          <tr>
            <TH>Nombre</TH>
          </tr>

          {IndexAllCabinet ? (
            IndexAllCabinet.map(({ id, name }) => (
              <tr>
                <TD1
                  id={id}
                  className="Celda"
                  onClick={(e) => {
                    SelectedIndexCabinet(id), SelectedCabinetColor(id);
                  }}
                >
                  <Title>{name}</Title>
                </TD1>
              </tr>
            ))
          ) : (
            <></>
          )}
        </TableRaid>

        <TableRaid>
          <tr>
            <TH>Descripcion</TH>
          </tr>

          {IndexAllCabinet ? (
            IndexAllCabinet.map(({ id, description }) => (
              <tr>
                <TD1
                  id={id}
                  className="Celda"
                  onClick={(e) => {
                    SelectedIndexCabinet(id), SelectedCabinetColor(id);
                  }}
                >
                  <Title>{description}</Title>
                </TD1>
              </tr>
            ))
          ) : (
            <></>
          )}
        </TableRaid>

        <TableRaid>
          <tr>
            <TH>Tipo de dato</TH>
          </tr>

          {IndexAllCabinet ? (
            IndexAllCabinet.map(({ id, dataTypeName }) => (
              <tr>
                <TD1
                  id={id}
                  className="Celda"
                  onClick={(e) => {
                    SelectedIndexCabinet(id), SelectedCabinetColor(id);
                  }}
                >
                  <CeldaContainer>
                    <Title>{dataTypeName}</Title>
                  </CeldaContainer>
                </TD1>
              </tr>
            ))
          ) : (
            <></>
          )}
        </TableRaid>

        <TableRaid>
          <tr>
            <TH>Lista</TH>
          </tr>

          {IndexAllCabinet ? (
            IndexAllCabinet.map(({ id, listName }) => (
              <tr>
                <TD1
                  id={id}
                  className="Celda"
                  onClick={(e) => {
                    SelectedIndexCabinet(id), SelectedCabinetColor(id);
                  }}
                >
                  <Title>{listName}</Title>
                </TD1>
              </tr>
            ))
          ) : (
            <></>
          )}
        </TableRaid>
      </TableContainer>

      {SelectedCabinet && (
        <IndexCreated
          nameCabinet={SelectedCabinet.name}
          cabinetId={SelectedCabinet.id}
        />
      )}

      {IndexSelected?.cabinetId === SelectedCabinet.id && (
        <IndexUpdate
          id={IndexSelected.id}
          name={IndexSelected.name}
          description={IndexSelected.description}
          cabinetId={IndexSelected.cabinetId}
          dataTypeId={IndexSelected.dataTypeId}
          listId={IndexSelected.listId}
          position={IndexSelected.position}
          required={IndexSelected.required}
          unique={IndexSelected.unique}
          maxValue={IndexSelected.maxValue}
          minValue={IndexSelected.minValue}
        />
      )}

      {IndexSelected && (
        <IndexDelete
          id={IndexSelected.id}
          name={IndexSelected.name}
          cabinetId={IndexSelected.cabinetId}
        />
      )}

      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "#F68A20",
            color: "#fff",
          },
        }}
      />
    </ContainerIndex>
  );
};

export default IndexContainer;
