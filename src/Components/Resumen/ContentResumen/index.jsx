import {
  ContainerResumen,
  ContainerProcess,
  ContainerCabinet,
  ContainerDataProcess,
  DataProcessSuccess,
  DataProcessError,
  TextProcess,
  NumberProcess,
  ContainerText,
  TitleText,
  CabinetsContent,
  ContainerTitleProcess,
  ContainerDataResumen,
  TitleProcessContent
} from "../../../Styles/Resumen";
import Cabinets from "../Cabinets";

const ContentResumen = () => {

    const cabinets = [
        {
          id: "c33a3fd3-ecdf-486e-a0c7-25f474db76c4",
          name: "FACTURA",
          description: "Facturación",
          path: "../Root",
          numOfIndex: 0,
          onDay: false,
          groupId: "4fcc5144-772f-4d5e-90af-2cb5b54dfad9",
        },
        {
          id: "3a8942d4-ec5f-498c-af6e-d98aeff68cdc",
          name: "RETENCIONES",
          description: "retenciones",
          path: "../Root",
          numOfIndex: 0,
          onDay: false,
          groupId: null,
        },
        {
          id: "82d32965-cd62-42ad-a725-5afe33aca13f",
          name: "NOTA DE VENTA",
          description: "nota de venta",
          path: "../Root",
          numOfIndex: 0,
          onDay: false,
          groupId: null,
        },
        {
            id: "0b3149e0-1d98-4630-9536-910a8e4d8c43",
            name: "LIQUIDACIÓN",
            description: "liquidacion",
            path: "../Root",
            numOfIndex: 0,
            onDay: false,
            groupId: null,
        }
      ];

  return (
    <ContainerResumen>
      <ContainerProcess>
        <ContainerDataProcess>
          <ContainerTitleProcess>
            <TitleProcessContent>
            Resumen de Procesamiento de claves
            </TitleProcessContent>
            </ContainerTitleProcess>

          <ContainerDataResumen>
          <DataProcessSuccess>
            <TextProcess>Documentos Procesados</TextProcess>
            <NumberProcess>76</NumberProcess>
          </DataProcessSuccess>

          <DataProcessError>
            <TextProcess>Documentos No Procesados</TextProcess>
            <NumberProcess>5</NumberProcess>
          </DataProcessError>
          </ContainerDataResumen>

        </ContainerDataProcess>
      </ContainerProcess>

      <ContainerCabinet>
        <ContainerText>
          <TitleText>Ir Hacia...</TitleText>
        </ContainerText>
        <CabinetsContent>
        {cabinets ? (
          cabinets.map(({ id, name, description }, index) => (
            <Cabinets key={index} element="cabinet" id={id} name={name} description={description}/>
          ))
        ) : (
          <h1>Sin Datos</h1>
        )}
        </CabinetsContent>
      </ContainerCabinet>
    </ContainerResumen>
  );
};

export default ContentResumen;
