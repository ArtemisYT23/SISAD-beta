import styled from "styled-components";

export const ResumenContainer = styled.div`
  width: 100%;
  position: sticky;
  display: flex;
  justify-content: center;
`;

export const ContainerResumen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: .5rem 0 0 0;
  height: 80%;
  /* @media (max-width: 650px) {
    width: 590px;
    flex-direction: column;
  } */
`;

export const ContainerProcess = styled.div`
    display: flex;
    width: 90%;
    height: 40%;
    border: 1px solid #c4c4c4;
    box-shadow: 2px 1px 5px 1px #c4c4c4;
    margin: .5rem 0 .9rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerDataProcess = styled.div`
    background-color: #ebebeb;
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
`;

export const ContainerTitleProcess = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const TitleProcessContent = styled.div`
    background-color: #d8d1d1;
    width: 85%;
    height: 1.7rem;
    margin: .9rem 0 0 0;
    color: var(--primaryColor);
    font-weight: bold;
    font-size: 1.1rem;
`;

export const DataProcessSuccess = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerDataResumen = styled.div`
    display: flex;
`;

export const TextProcess = styled.div`
    background-color: #d8d1d1;
    width: 90%;
    height: 2rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: .9rem 0 .9rem 0;
    color: var(--primaryColor);
    font-weight: bold;
    font-size: 1.1rem;
`;

export const NumberProcess = styled.div`
    background-color: #d8d1d1;
    width: 90%;
    height: 2rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    /* color: var(--primaryColor); */
    color: #656565;
    font-weight: bold;
    font-size: 1.1rem;
`;

export const DataProcessError = styled.div`
    background-color: #ebebeb;
    width: 50%;
`;

export const ContainerCabinet = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 60%;
    border: 1px solid #c4c4c4;
`;

export const ContainerText = styled.div`
    display: flex;
    width: 90%;
`;

export const TitleText = styled.div`
    color: var(--primaryColor);
    font-weight: bold;
    font-size: 1.5rem;
`;

export const CabinetsContent = styled.div`
    display: flex;
    width: 95%;
    justify-content: center;
    align-items: center;
`;


