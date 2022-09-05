import {
  ContainerData,
  GridArea1,
  GridArea2,
  GridArea3,
  ContainerNoProcess,
  Title,
  ButtonProcesar,
} from "../../Styles/Facturation/FacturationProcess";

import ClavesData from "./Content/ProcessFacturation/ClavesData";
import ProcesData from "./Content/ProcessFacturation/ProcesData";
import NoProces from "./Content/ProcessFacturation/NoProces";

const Facturation = () => {
  return (
  <ContainerData>
    <ContainerNoProcess>
        <GridArea1>
            <Title>
                <p>CLAVES DE ACCESO</p>
            </Title>
            <ClavesData />
            <ButtonProcesar>PROCESAR</ButtonProcesar>
        </GridArea1>
        <GridArea2>
            <Title>
                <p>PROCESADOS</p>
            </Title>
            <ProcesData />
        </GridArea2>
    </ContainerNoProcess>
    <GridArea3>
        <Title>
            <p>NO PROCESADOS</p>
        </Title>
        <NoProces />
    </GridArea3>
  </ContainerData>
  );
};

export default Facturation;
