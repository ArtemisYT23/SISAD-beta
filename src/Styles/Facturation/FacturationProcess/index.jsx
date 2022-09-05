import styled from "styled-components";

export const ContainerData = styled.div`
  display: flex;
  @media (max-width: 650px) {
    width: 590px;
    flex-direction: column;
  }
`;

export const ContainerNoProcess = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const GridArea1 = styled.div`
    height: 50%;
    border: 1px solid var(--lineColor);
    margin: 1rem;
`;

export const ButtonProcesar = styled.button`
    border: none;
    background-color: var(--primaryColorTransparent);
    color: var(--white);
    font-weight: bold;
    width: 600px;
    height: 1.4rem;
    border-radius: 4px 4px 4px 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.4rem;
    &:hover{
        background-color: var(--primaColor);
    }
    @media (max-width: 650px) {
    width: 97%;
  }
`;

export const GridArea2 = styled.div`
    height: 50%;
    border: 1px solid var(--lineColor);
    margin: 1rem;
`;

export const Title = styled.div`
    width: 100%;
    height: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primaryColor);
    /* background-color: var(--lineColor); */
    font-weight: bold;
    /* color: var(--primaColor); */
    color: var(--white);
`;

export const GridArea3 = styled.div`
    /* background-color: pink; */
    width: 100%;
    height: 83vh;
    margin-top: 1rem;
    border: 1px solid var(--lineColor);
    @media (max-width: 650px) {
    width: 97%;
  }
`;

