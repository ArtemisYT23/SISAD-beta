import styled from "styled-components";

export const ContainerIndex = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 1rem 0 0 0;
`;

export const HeadersContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`; 

export const ContainerButton = styled.div`
    width: 65%;
    display: flex;
    justify-content: flex-start;
`;

export const ContainerSelect = styled.div`
    width: 35%;
    display: flex;
    justify-content: flex-end;
    border: 1px solid var(--lineColor);
`;

export const NewIndex = styled.button`
    border: none;
    padding: 0.5rem;
    margin: 0 .5rem 0 0;
    width: 20%;
    color: var(--white);
    background-color: var(--primaryColor);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 0.5rem 0.5rem;
    cursor: pointer;
`;

export const NewCabinet = styled.button`
    border: none;
    width: 40%;
    color: var(--white);
    background-color: var(--primaryColor);
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.5rem 0.5rem;
`;

export const TableContainer = styled.div`
    width: 100%;
    display: flex;
    border: 1px solid var(--lineColor);
    overflow: x;
`;

export const TableRaid = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    width: 14rem;
    `;

export const TH = styled.th`
    width: 12rem;
    height: 2.5rem;
    border: 1px solid var(--whiteTrans);
    background-color: var(--primaryColor);
    color: var(--white);
`;


export const TD1 = styled.td`
    display: flex;
    width: 14rem;
    height: 2rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--whiteTrans);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #979797;
`;

export const TD2 = styled.td`
    display: flex;
    width: 100%;
    text-align: center;
    border: 1px solid var(--whiteTrans);
    padding: 8px;
    color: var(--lineColor);
    & :hover{
        color: var(--primaryColor);
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 1rem;
    font-weight: 100;
`;



export const CeldaContainer = styled.div`
    width: 70px;
    overflow: hidden;
`;