import React, { useState } from 'react'
import { Btn, BtnGray, BtnOrange, BtnZero, Container } from './style'
const Main = () => {
    const [preState, setPreState] = useState('');
    const [curState, setCurState] = useState('');
    const [input, setInput] = useState('0');
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);

    const inputNum = (e) => {
      if (curState.includes('.') && e.target.innerText === '.') return;

      if (total) setPreState('');

      curState
        ? setCurState((pre) => pre + e.target.innerText)
        : setCurState(e.target.innerText);
      setTotal(false)
    }

    const operatorType = (e) => {

    }

    const equals = (e) => {

    }

    const reset = (e) => {

    }

    const percent = (e) => {
        
    } 

    const minusPlus = (e) => {

    }
  return (
    <Container>
      <Container.Wrapper>
        <Container.Screen>{input}</Container.Screen>
        <BtnGray onClick={reset}>AC</BtnGray>
        <BtnGray onClick={percent}>%</BtnGray>
        <BtnGray onClick={minusPlus}>+/-</BtnGray>
        <BtnOrange onClick={operatorType}>/</BtnOrange>
        <Btn onClick={inputNum}>7</Btn>
        <Btn onClick={inputNum}>8</Btn>
        <Btn onClick={inputNum}>9</Btn>
        <BtnOrange onClick={operatorType}>X</BtnOrange>
        <Btn onClick={inputNum}>4</Btn>
        <Btn onClick={inputNum}>5</Btn>
        <Btn onClick={inputNum}>6</Btn>
        <BtnOrange onClick={operatorType}>+</BtnOrange>
        <Btn onClick={inputNum}>1</Btn>
        <Btn onClick={inputNum}>2</Btn>
        <Btn onClick={inputNum}>3</Btn>
        <BtnOrange onClick={operatorType}>-</BtnOrange>
        <BtnZero onClick={inputNum}>0</BtnZero>
        <Btn onClick={inputNum}>.</Btn>
        <Btn onClick={equals}>=</Btn>
      </Container.Wrapper>
    </Container>
  )
}

export default Main