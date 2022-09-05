import styled from "styled-components";

export const ContainerCeld = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--lineColor);
    margin: 0.5rem;
    width: 600px;
    height: 170px;
    overflow-y: scroll;
    @media (max-width: 650px) {
    width: 97%;
  }
`;