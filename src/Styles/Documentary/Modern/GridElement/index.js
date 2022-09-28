import styled from "styled-components";

export const GridElemmentContainer = styled.div`
  display: inline-flex;
  width: 10rem;
  height: 10.5rem;
  border-radius: 2rem;
  background-color: rgba(254, 206, 100, 0.35);
  margin: 2rem 0 0 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const GridDocContainer = styled.div`
  display: inline-flex;
  width: 10rem;
  height: 11rem;
  border-radius: 2rem;
  background-color: none;
  margin: 2rem 0 0 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const ContainerDistint = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DistintivoPDF = styled.div`
background: red;
width: 2.8rem;
height: 1.5rem;
border-radius: 0.5rem 0 0.5rem 0;
display: flex;
justify-content: center;
`;

export const TypeFile = styled.span`
    color: white;
    font-weight: 700;
    font-size: 0.95rem;
`;

// export const Distintivo = styled.div`
//   background: #3399BA;
//   width: 2.8rem;
//   height: 1.5rem;
//   border-radius: 0.5rem 0 0.5rem 0;
//   display: flex;
//   margin: 0 2.2rem 0 0; 
//   `;


export const NumberOfElementChild = styled.span` 
  color: var(--lineColor);
  text-align:center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ElementName = styled.h4`
  color: var(--primaryColor);
  font-size: 0.8rem;
  text-align:center;
  overflow: hidden; 
`;

export const ElementNameDoc = styled.h4`
  color: var(--primaryColor);
  font-size: 1rem;
  padding: .2rem;
  text-align:center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

`;

export const ContainerIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;



export const ContainerThreeRegister = styled.div`
  width: 15%;
  height: 470px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const ContainerCeldaRegister = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: .5rem;
    border: 1px solid #F68A20;
    color: #F68A20;
    font-size: .9rem;
    font-weight: bold;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const ContainerCeldaAggDocument = styled.div`
  padding: .5rem;
  display: flex;
  justify-content: center;
  background-color: #F68A20;
  color: #fff;
  font-weight: bold;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const ContainerFilesSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rose;
  width: 85%;
`;

export const InputSearch = styled.input`
  height: 1.8rem;
  margin: .2rem 0 .2rem 0;
  &:focus{
    outline: none;
  }
`;

export const AggButton = styled.span`
  text-align: center;
  font-size: .8rem;
`;