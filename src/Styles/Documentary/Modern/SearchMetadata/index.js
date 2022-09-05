import styled from "styled-components";

export const ContainerTitle = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border-bottom: 1px solid var(--lineColor); */
    margin: .5rem 0 0 0;
`;

export const ContainerList = styled.div`
    list-style: none;
    padding: 0.8rem 0 0 0;
`;
export const CabinetFilterFolder = styled.select`
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--primaryColor);
    text-decoration: none;
    text-align: center;
    border: 1px solid var(--primaryColor);
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:focus{
        outline: none;
    }
`;

export const TituloSelect = styled.select`
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--primaryColor);
    text-decoration: none;
    text-align: center;
    border: 1px solid var(--primaryColor);
    width: 100%;
    height: 100%;
    -webkit-appearance: none; -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    &:focus{
        outline: none;
    }
`;

export const OptionsSelect = styled.option`
    font-weight: bold;
    color:var(--primaryColor);
`;

export const ContainerIdentify = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
`;

export const IdentifyName = styled.span`
    color: var(--primaryColor);
    font-weight: bold;
    text-align: center;
`;