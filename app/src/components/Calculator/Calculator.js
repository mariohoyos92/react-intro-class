import calculatorImg from "../../calculator.png";
import React, {Component} from 'react';


class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            header: 'Calculator',
            display: "0",
            operator: "",
            temp: 0,
            resetDisplay: false

        }

        this.updateHeader = this.updateHeader.bind(this);
        this.setDisplay = this.setDisplay.bind(this);
        this.setOperator = this.setOperator.bind(this);
        this.calculate = this.calculate.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);

    }
    updateHeader(val){
        this.setState({ header: val});
    }

    setDisplay(num){
        let display;
        if(this.state.resetDisplay === true){
            display = num;
            this.setState({ resetDisplay: false});
        } else if(this.state.display === "0"){
            display = num;
        } else {
            display = this.state.display + num;
        }
        
        
        
        
        this.state.display.length < 13 ? this.setState({ display: display}) :this.setState({display: this.state.display}) 
    }

    setOperator(operator){
        
       if(!this.state.operator) {
           this.setState({ operator: operator, temp: parseInt(this.state.display, 10),  display: "0" }, () => console.log(this.state));
           }
    }

    calculate(){

        if ( this.state.operator === '' ) { return; }
        var result;
      
        switch ( this.state.operator ) {
          case '+':
            result = this.state.temp + parseInt(this.state.display, 10);
            break;
          case '-':
            result = this.state.temp - parseInt(this.state.display, 10);
            break;
          case '*':
            result = this.state.temp * parseInt(this.state.display, 10);
            break;
          case '/':
            result = this.state.temp / parseInt(this.state.display, 10);
            break;
          default:
            break;
        }
      
        this.setState({ display: String(result), resetDisplay: true, operator: "" });

    }

    clearDisplay(){
        this.setState( { display: "0", operator: "", temp: 0, resetDisplay: false})

    }

    render() {
        return (
            <div id="calculator-container">
              <input id="header-input" onChange={(e) => this.updateHeader(e.target.value)}/>
              <h1 id="header"> {this.state.header}</h1>
              <img className="remove-highlight" src={calculatorImg} alt="calculator" />
              <div id="calculator-mask" className="remove-highlight">
                <div className="output">
                  <span className="total"> { this.state.display} </span>
                </div>
      
                <div className="btn clear"  onClick={ () => { this.clearDisplay() } }></div>
      
                <div className="btn zero"   onClick={ () => { this.setDisplay('0'); } }></div>
                <div className="btn one"    onClick={ () => { this.setDisplay('1'); } }></div>
                <div className="btn two"    onClick={ () => { this.setDisplay('2'); } }></div>
                <div className="btn three"  onClick={ () => { this.setDisplay('3'); } }></div>
                <div className="btn four"   onClick={ () => { this.setDisplay('4'); } }></div>
                <div className="btn five"   onClick={ () => { this.setDisplay('5'); } }></div>
                <div className="btn six"    onClick={ () => { this.setDisplay('6'); } }></div>
                <div className="btn seven"  onClick={ () => { this.setDisplay('7'); } }></div>
                <div className="btn eight"  onClick={ () => { this.setDisplay('8'); } }></div>
                <div className="btn nine"   onClick={ () => { this.setDisplay('9'); } }></div>
      
                <div className="btn equal"  onClick={ () => { this.calculate(); }}></div>
                <div className="btn multiply" onClick={ () => { this.setOperator('*'); }}></div>
                <div className="btn divide"   onClick={ () => { this.setOperator('/'); }}></div>
                <div className="btn subtract" onClick={ () => { this.setOperator('-'); }}></div>
                <div className="btn add"      onClick={ () => { this.setOperator('+'); }}></div>
              </div>
            </div>
          );
    }

}

export default Calculator;