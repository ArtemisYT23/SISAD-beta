import styled from "styled-components";

export const DocumentaryContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const DocumentaryAsideContainer = styled.div`
  width: 15rem;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: -0.5rem 0 1.5rem -0.5rem rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;
  overflow-y: scroll;
`;

export const DocumentaryContentContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
`;

export const InfoContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: var(--white);
`;

export const HeaderContainer = styled.div`
  height: 4.8rem;
  border-bottom: 1px solid var(--lineColor);
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionsGridContainer = styled.div`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const ContainerVista = styled.div`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerOptions = styled.div`
   align-items: center;
   height: 3.4rem;
   display: flex;
   margin: 0 0 0 .2rem;
   align-items: center;
`;

export const ContainerTitle = styled.div`
   align-items: center;
   height: 3.4rem;
   display: flex;
   margin: 0 0 0 1rem;
   align-items: center;
`;

export const DocumentContainer = styled.div`
  padding-bottom: 2rem; 
  display: flex;
  flex-wrap: wrap;
  /* overflow-y: scroll; */
`;

export const ComponentsAction = styled.div`
  background-color: red;
`;

export const ContainerSearchFiles = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
`;

export const InputSearch = styled.input`
  width: 250px;
  height: 2rem;
  margin: 0 .5rem 0 .8rem;
  outline: none;
`;

export const SpaceLine = styled.div`
  margin: 0 .5rem 0 0;
`;

export const ButtonClearSearch = styled.button`
  width: 25px;
  height: 2rem;
  margin: 0 .2rem 0 0;
  background-color: none;
  color: var(--primaryColor);
`;

export const ContainerSearchCabinet = styled.div`
  width: 100%;
  margin: 0 0 1rem 0;
  /* background-color: red; */
  border: 1px solid #c4c4c4;
  padding: 1rem;
`;

export const ContainerSearchFolder = styled.div`
  width: 100%;
  /* background-color: yellow; */
  margin: 0 0 1rem 0;
  border: 1px solid #c4c4c4;
  padding: 1rem;
`;

export const ContainerFiles = styled.div`
  width: 100%;
  /* background-color: green; */
  border: 1px solid #c4c4c4;
  padding: 1rem;
`;

export const TextTitle = styled.span`
  color: var(--primaryColor);
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ContainerText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  border: 1px solid #c4c4c4;
`;