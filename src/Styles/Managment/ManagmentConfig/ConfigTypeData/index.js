import styled from "styled-components";

export const ContentType = styled.div`
    width: 100%;
`;
export const HeaderCont = styled.div`
    display: flex;
    width: 72%;
    justify-content: space-around;
    padding: 1rem 0 0.8rem 3rem;
`;

export const ContentTitle = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    text-align: center;
    overflow: hidden;
    padding: 0.2rem;
    background-color: var(--primaryColor);
`;

export const ContentIndex = styled.div`
    display: flex;
    width: 10%;
    justify-content: center;
`;

export const ContentName = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
`;

export const TitleCont = styled.h1`
    font-size: 1.1rem;
    color: var(--white);
    font-weight: 600;
`; 

export const ContentSubtitle = styled.div`
    display: flex;
    justify-content: space-around;
    width: 25%;
    align-items: center;
    margin: 0 0.5rem 0 0.4rem;
    background-color: var(--primaryColor);
    overflow: hidden;
`;

export const NewContent = styled.div`
    width: 19%;
    background-color: var(--primaryColor);
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

export const IconContainer = styled.div`
    margin: 0 0 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;