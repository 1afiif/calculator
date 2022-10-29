import styled, { css } from 'styled-components'
  
const Container = styled.div`
  height: 80vh;
  width: 50vh;
  background-color: black;
  border-radius: 1rem;
  -webkit-box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
  box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75); 
  padding: 1rem;
`;

const btn = css`
  display:grid;
  place-content: center;
  background-color: rgb(54,52,52);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-weight: bold;

  :hover{
    background-color: grey;
  }
`
const BtnGray = styled.div`
  ${btn}
  background-color: gray;
  color: black;

  :hover{
    background-color: white;
  }
`;

const Btn = styled.div`
  ${btn}
`;

const BtnZero = styled.div`
  ${btn}
  grid-column: 1 / span 2;
  border-radius: 25px;
  place-content: unset;
  align-items: center;
  padding-left: 2rem;
`;
const BtnOrange = styled.div`
  ${btn}
  background-color: orange;

  :hover{
    background-color: white;
    color: orange;
  }
`;

Container.Wrapper = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(6,1fr);
  gap:10px;
`

Container.Screen = styled.div`
  grid-column: 1 / -1;
  color: white;
  text-align: right;
  padding: 0.5rem;
  font-size: 4rem;
  overflow: hidden;
`

export {Container,BtnGray,Btn,BtnOrange,BtnZero}