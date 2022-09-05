import styled from "styled-components";

export const HeaderUP = styled.div`
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderDOWN = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TextName = styled.h1`
  font-size: 1.5rem;
  margin: .5rem 0 1.5rem 0;
  color: var(--primaryColor);
`;

export const InputName = styled.label`
  font-size: 1.9rem;
  color: var(--primaryColor);
  outline: none;
  border: none;
  background-color: var(--white);
  font-weight: 700;
`;

export const Perfiles = styled.div`
  display: flex;
  align-self: flex-end;
`;

export const Avatar = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  transform: translateX(21%);
  &:last-child{
    transform: translateX(0);
  }
`;




export const AvatarPlus = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background-color: red;
`;

// export const Route = styled.span`
//   color: var(--lineColor);
//   font-size: 1rem;
// `;
export const Route = styled.input`
  border: none;
  font-size: 1.2rem;
  background: none;
  overflow: hidden;
  &:focus{
    outline: none;
  }
`;


export const Log = styled.span`
  color: var(--lineColor);
  font-size: 1rem;
`;

export const HeaderContainer = styled.div`
  height: 4.6rem;
  border-bottom: 1px solid var(--lineColor);
`;