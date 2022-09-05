import { ContainerClaves } from "../../../../../Styles/Facturation/ContainerFacturation";
import CeldaText from "./CeldaText";

const ClavesData = () => {
  const ClavesAcceso = [
    "20-07-2022-09-22-15-112.txt",
    "20-07-2022-09-22-15-112.txt",
    "20-07-2022-09-22-15-112.txt",
    "20-07-2022-09-22-15-112.txt",
    "20-07-2022-09-22-15-112.txt",
    "20-07-2022-09-22-15-112.txt",
    "20-07-2022-09-22-15-112.txt",
    "20-07-2022-09-22-15-112.txt",
    "20-07-2022-09-22-15-112.txt",
    "20-07-2022-09-22-15-112.txt",
    "20-07-2022-09-22-15-112.txt",
    "20-07-2022-09-22-15-112.txt",
  ];

  return (
    <ContainerClaves>
      {ClavesAcceso ? (
        ClavesAcceso.map((datos, index) => (
          <CeldaText key={index} id={index} name={datos}/>
        ))
      ) : (
        <></>
      )}
    </ContainerClaves>
  );
};

export default ClavesData;
