import React from 'react';
import update from 'immutability-helper';
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
  state = {
    mathValue: 0,
    displayValue: 0
  }
  buttonClick = (event) => {
    const buttonValue = event.target.getAttribute("buttonValue");
    this.setState(previousState => {
      return {
      displayValue: `${previousState.displayValue + buttonValue}`
    }})
  }
  doMath = (event) => {
    const buttonValue = event.target.getAttribute("buttonValue");
    switch (buttonValue) {
      case '=':
        this.calculateOperations()
        break
      default:
        const newMathValue = update(this.state.mathValue, {
          $push: [buttonValue],
        }) 
        this.setState({
          mathValue: newMathValue
        })
        break
    }
  }
  calculateOperations = () => {
    let result = this.state.mathValue.join('')
    if (result) {
      result = Math.eval(result)
      result = Math.format(result, { precision: 14 })
      result = String(result)
      this.setState({
        mathValue: [result],
      })
    }
  }
  clear = () => {
    this.setState({
      mathValue: 0,
      displayValue: 0
    })
  }
  render = () => {
    return(
      <div className="app-container">
        <CalculatorDisplay displayValue={this.state.displayValue}/>
        <div className="button-container">
          <div className="number-container">
            <ActionButton buttonText="Clear" onClick={this.clear} />
            <div className="number-buttons">
              {nums.map((num, index) => {
                return <NumberButton buttonValue key={index} onClick={this.buttonClick} classNameHandler="number-button" buttonText={num.text} />
              })}
            </div>
            
            <ActionButton buttonValue onClick={this.buttonClick} buttonText={0} />
          </div>
          
          <div className="symbol-container">
            {symbols.map((symbol, index) => {
              return <NumberButton buttonValue key={index} onClick={this.buttonClick} classNameHandler="symbol-button" buttonText={symbol.text} />
            })}
          </div>
        </div>
        
        
        
      </div>
      
      
    );
    }

};

export default App;
