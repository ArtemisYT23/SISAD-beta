import styled from "styled-components";

export const ContainerClaves = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--lineColor);
    margin: .4rem;
    width: 600px;
    height: 195px;
    overflow-y: scroll;
    @media (max-width: 650px) {
    width: 97%;
  }
`;


export const Identify = styled.div`
    display: flex;
    width: 5%;
    border: 1px solid var(--lineColor);
    justify-content: center;
    align-items: center;
    color: var(--lineColor);
`;

export const Celda = styled.div`
    border: 1px solid #c4c4c4;
    display: flex;
    align-items: center;
    color: var(--lineColor);
    font-size: 1.1rem;
    width: 95%;
    justify-content: center;
    align-items: center;
    font-family:Georgia, 'Times New Roman', Times, serif;
`;

export const ContainerCelda = styled.div`
    display: flex;
    width: 100%;
`;