
import Input from './components/Input'
import Button from './components/Buttons'
import {Container, Content, Row} from './styles'
import { useState } from 'react'

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const[operation, setOperation] = useState('0');

  //CLEAR
  const handleOnCLear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  //REMOVE 0 FROM END
  const handleAddNumber = (number) =>{
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  //SUM
  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  };

  //SUBTRACT
  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  };

    //TIMES
    const handleTimesNumbers = () => {
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
      } else {
        const sum = Number(firstNumber) * Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
      }
    };

        //TIMES
        const handleDividedByNumbers = () => {
          if(firstNumber === '0'){
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('/')
          } else {
            const sum = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(String(sum))
            setOperation('')
          }
        };

  //EQUAL
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch (operation){
        case '+':
          handleSumNumbers();
        break;
        case '-':
          handleMinusNumbers();
        break;
        case '*':
          handleTimesNumbers();
        break;
        case '/':
          handleDividedByNumbers();
        break;
      default:
        break;
      }
    } 
  };

  return (
    <Container>
    <Content>
      <Input value={currentNumber}/>
      <Row>
        <Button label="C" onClick={handleOnCLear}/>
        <Button label="/" onClick={handleDividedByNumbers}/>
        <Button label="x" onClick={handleTimesNumbers}/>
        <Button label="." onClick={() => handleAddNumber('.')}/>
      </Row>
      <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="-" onClick={handleMinusNumbers}/>
      </Row>
      <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="+" onClick={handleSumNumbers}/>
      </Row>

      <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="=" onClick={handleEquals}/>
      </Row>
    </Content>
    </Container>
  );
}

export default App;
