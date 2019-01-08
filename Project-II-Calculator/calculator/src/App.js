import React from 'react';
import './App.css';
import './components/ButtonComponents/Button.css'
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
const nums = [
  { text: 9 },
  { text: 8 },
  { text: 7 },
  { text: 6 },
  { text: 5 },
  { text: 4 },
  { text: 3 },
  { text: 2 },
  { text: 1 }
]; 
const symbols = [
  { text: '÷' },
  { text: 'x' },
  { text: '-' },
  { text: '+' },
  { text: '=' }
]; 
const buttons = ['clear', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1','2','3','+','0','='];

class App extends React.Component {
  render() {
    return(
      <div className="app-container">
        <CalculatorDisplay />
        <div className="button-container">
          <div className="number-container">
            <ActionButton buttonText="Clear" />
            <div className="number-buttons">
              {nums.map((num, index) => {
                return <NumberButton key={index} classNameHandler="number-button" buttonText={num.text} />
              })}
            </div>
            
            <ActionButton buttonText="0" />
          </div>
          
          <div className="symbol-container">
            {symbols.map((symbol, index) => {
              return <NumberButton key={index} classNameHandler="symbol-button" buttonText={symbol.text} />
            })}
          </div>
        </div>
        
        
        
      </div>
      
      
    );
    }

};

export default App;
