import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCabinetsCore,
  getIndexAllCabinetConfig,
  getIndexCabinetGetAllConfig,
} from "../../../../../Store/Core";
import {
  setSelectedCabinetCoreNotTraditionalName,
} from "../../../../../Store/ActionCore";
import { setOpenModalConfigCreated } from "../../../../../Store/ModalConfig";
import { SelectedIndexConfig } from "../../../../../Store/ConfigDocumentary";
import {
  ContainerIndex,
  TableRaid,
  TableNumber,
  TH,
  TH1,
  TD1,
  TDnumber,
  Title,
  HeadersContainer,
  TableContainer,
  NewIndex,
  ContainerButton,
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
import IndexCreated from "../../../../../Components/Documentary/Modern/ModalesDocumentary/IndexCreated";
import IndexUpdate from "../../../../Documentary/Modern/ModalesDocumentary/IndexUpdate";
import IndexDelete from "../../../../Documentary/Modern/ModalesDocumentary/IndexDelete";
import toast, { Toaster } from "react-hot-toast";

const IndexConfig = () => {
  const dispatch = useDispatch();
  const { core, configDocument, actionCore } = useSelector((store) => store);
  const {
    cabinets,
    IndexAllCabinet,
    IndexCabinetGetAllName,
  } = core;
  const { SelectedTraditional } = actionCore;
  const { IndexSelected, SelectedCabinet } = configDocument;

  useEffect(() => {
    IndexCabinetGetAllName.length == 0 &&
      dispatch(getIndexCabinetGetAllConfig());
  }, []);

  const [cabin, setCabin] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCabin({ ...cabin, [name]: value });
    handleSubmit(value);
  };

  const handleSubmit = (name) => {
    dispatch(setSelectedCabinetCoreNotTraditionalName(name));
    dispatch(getIndexAllCabinetConfig(name));
  };

  const OpenModalIndexCreatedConfig = (e) => {
    dispatch(setOpenModalConfigCreated());
  };

  const SelectedIndexCabinet = (id) => {
    dispatch(SelectedIndexConfig(id));
  };

  const OpenModalUpdateIndex = () => {
    dispatch(setOpenModalConfigUpdate());
  };

  const OpenModalDeleteIndex = () => {
    dispatch(setOpenModalConfigDelete());
  };

  const SelectedCabinetColor = (index) => {
    console.log("object");
    const collection = document.getElementsByClassName("Celda");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.backgroundColor = "white";
      collection[i].style.color = "#808080";
      if (index === index) {
        document.getElementById(index).style.backgroundColor = "#fc8208";
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
          <TituloSelect name="id" onChange={(e) => handleChange(e)}>
            <option hidden>Seleccion un Gabinete</option>
            {cabinets ? (
              cabinets.map(({ id, name }, index) => (
                <OptionsSelect key={id} value={name}>
                  {name}
                </OptionsSelect>
              ))
            ) : (
              <></>
            )}
          </TituloSelect>
        </ContainerSelect>
      </HeadersContainer>
      <br />
      <TableContainer>
        <TableNumber>
          <tr>
            <TH1>N</TH1>
          </tr>

          {IndexAllCabinet ? (
            IndexAllCabinet.map((Ind, index) => (
              <tr>
                <TDnumber
                  id={Ind.id}
                  className="Celda"
                  onClick={(e) => {
                    SelectedIndexCabinet(Ind.id), SelectedCabinetColor(Ind.id);
                  }}
                >
                  <Title>{index+1}</Title>
                </TDnumber>
              </tr>
            ))
          ) : (
            <></>
          )}
        </TableNumber>

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

      {SelectedTraditional?.id && (
        <IndexCreated
          nameCabinet={SelectedTraditional.name}
          cabinetId={SelectedTraditional.id}
        />
      )}

      {IndexSelected?.cabinetId === SelectedTraditional?.id && (
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
          CabinetName={SelectedTraditional?.name}
        />
      )}

      {IndexSelected?.cabinetId === SelectedTraditional?.id && (
        <IndexDelete
          id={IndexSelected.id}
          name={IndexSelected.name}
          cabinetId={IndexSelected.cabinetId}
          CabinetName={SelectedTraditional?.name}
        />
      )}
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          duration: 4000,
          style: {
            background: "#F68A20",
            color: "#fff",
          },
        }}
      />
    </ContainerIndex>
  );
};

export default IndexConfig;
