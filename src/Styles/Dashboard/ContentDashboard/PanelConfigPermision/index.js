import styled from "styled-components";

export const PanelConfigPermis = styled.div`
  padding: 1rem 0 0 0;
  display: flex;
  width: 100%;
  height: 90%;
  justify-content: center;
  z-index: -1;
`;

export const PanelPermision = styled.div`
  width: 100%;
  display: flex;
`;

export const PanelFirstSelection = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const PanelSecondSelection = styled.div`
    /* background-color: yellow; */
    width: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ContainerSelection = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SelectUser = styled.select`
    width: 200px;
    height: 40px;
    margin: 0 0 .5rem 0;
`;

export const ContainerRecientes = styled.div`
    width: 90%;
    height: 90%;
`;

export const UserRecien = styled.div`
    border: 1px solid #F68A20;
    background-color: #F68A20;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BoderContent = styled.div`
    border: 1px solid #F68A20;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 220px;
    overflow-y: scroll;
`;

export const TextRecien = styled.span`
    margin: .3rem; 
`;  

export const TextUser = styled.div`
    color: #fff;
`;

export const ContainerFolder = styled.div`
    width: 100%;
    height: 470px;
`;

export const HeaderCabinet = styled.div`
    width: 100%;
    height: 2.5rem;
    background-color: #F68A20;
    color: #fff;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const BodyContainer = styled.div`
    width: 100%;
    height: 430px;
    display: flex;
    flex-direction: column;
    font-size: .9rem;
    color: #5d5b5b;
    padding: .1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        background-color: #fff;
        width: 10px;
    }
`;
export const CeldaCheck = styled.div`
    display: flex;
`;

export const FooterContainer = styled.div`
    width: 100%;
    height: 1.8rem;
`;

export const ButtonSave = styled.button`
    background-color: var(--primaryColor);
    color: #fff;
    border: none;
    width: 100%;
    height: 2rem;
    margin: .2rem;
`;

export const PanelThirstCabinet = styled.div`
    /* background-color: yellow; */
    width: 25%;
`;

export const ContainerCabinet = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    overflow-y: scroll;
    &::-webkit-scrollbar {
        background-color: #fff;
        width: 10px;
    }
`;