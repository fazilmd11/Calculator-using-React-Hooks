import React, {useState} from "react";
import Button from '@mui/material/Button';


function Calculator(){
const [number, setNumber]= useState(0);
const [calNumber, setCalNumber] = useState({
    fnum:0,
    operator:"",
    snum:0
})
const [isOp, setIsOp] = useState(false)
const [isDec, setIsDec] = useState(false)

function handleNumbers(event){
var buttonValue= event.target.value;
console.log(buttonValue);
if(buttonValue === "."){
    setIsDec(true);
    var i = 1;
}
else{
        buttonValue=parseFloat(buttonValue);
    
    if (isDec === true) {
        setNumber((prevValue)=>{
            // console.log("prevVlue=",prevValue);
            if(prevValue !== "."){
                return number+(buttonValue*i*0.1);
                i=i*10;
            }
            else{
                return number+(buttonValue*0.1);
            }
            
        });
    }
    else{
        setNumber((prevValue)=>{
            console.log("prevVlue=",prevValue);
            return prevValue*10+buttonValue;
        });
    }
}



if(isOp === false){
    setCalNumber({
        fnum:number,
        operator: "",
        snum: 0
    });
}
else {
    setCalNumber((prevValues)=>{
            // console.log(prevValues);
        return {
            fnum:prevValues.fnum,
            operator:prevValues.operator,
            snum:number
        }        
    });
    // setCalNumber((prevValues)=>{
    //     return{
    //         fnum:prevValues.fnum,
    //         operator:prevValues.operator,
    //         snum:(prevValues.snum*10)
    //     }
    // })
        console.log("snum =",calNumber.snum);
    }
    // setIsOp(false);
}

// function handleDot(event){
//     var buttonValue= event.target.value;
//     setNumber((prevValue)=>{
//         return prevValue+0.1*buttonValue;
//     });
// }

function handleOperator(event){
const operatorValue = event.target.value;
console.log(operatorValue);
setCalNumber(
    {
        fnum: number,
        operator:operatorValue,
        snum:0
    }
)
setNumber(0);
setIsOp(true);
}

function handleAC(){
        setNumber(0);
        setCalNumber({
            fnum:0,
            operator:"",
            snum:0
        })
        setIsOp(false)
        setIsDec(false)
}

function handleEqual(){
    setIsOp(false)
if(calNumber.operator==="+"){
    setNumber(calNumber.fnum + number)
    setCalNumber({
        fnum:number,
        operator:"",
        snum:0
    })
}
else if(calNumber.operator==="-"){
    setNumber(calNumber.fnum - number)
    setCalNumber({
        fnum:number,
        operator:"",
        snum:0
    })
}
else if(calNumber.operator==="*"){
    setNumber(calNumber.fnum * number)
    setCalNumber({
        fnum:number,
        operator:"",
        snum:0
    })
}
else if(calNumber.operator==="/"){
    setNumber(calNumber.fnum / number)
    setCalNumber({
        fnum:number,
        operator:"",
        snum:0
    })
}
}

// const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})

    return (
        // <div class="container my-4">  

        <div class="calculator card">

    {/* <input type="text" class="calculator-screen z-depth-1" value={number} disabled /> */}
    {/* <div className="calculator-screen"> */}
        {/* <div className="previous-operand">{previousOperand} {operation}</div> */}
        <input type="text" class="calculator-screen z-depth-1" value={number} disabled />
    {/* </div> */}
    <div class="calculator-keys">

      <Button variant="text" onClick={handleOperator} type="button" class="operator btn btn-info" value="+">+</Button>
      <Button variant="text" onClick={handleOperator} type="button" class="operator btn btn-info" value="-">-</Button>
      <Button variant="text" onClick={handleOperator} type="button" class="operator btn btn-info" value="*">&times;</Button>
      <Button variant="text" onClick={handleOperator} type="button" class="operator btn btn-info" value="/">&divide;</Button>

      <Button variant="text" onClick={handleNumbers} type="button" value="7" class="btn btn-light">7</Button>
      <Button variant="text" onClick={handleNumbers} type="button" value="8" class="btn btn-light">8</Button>
      <Button variant="text" onClick={handleNumbers} type="button" value="9" class="btn btn-light">9</Button>


      <Button variant="text" onClick={handleNumbers} type="button" value="4" class="btn btn-light">4</Button>
      <Button variant="text" onClick={handleNumbers} type="button" value="5" class="btn btn-light">5</Button>
      <Button variant="text" onClick={handleNumbers} type="button" value="6" class="btn btn-light">6</Button>


      <Button variant="text" onClick={handleNumbers} type="button" value="1" class="btn btn-light">1</Button>
      <Button variant="text" onClick={handleNumbers} type="button" value="2" class="btn btn-light">2</Button>
      <Button variant="text" onClick={handleNumbers} type="button" value="3" class="btn btn-light">3</Button>


      <Button variant="text" onClick={handleNumbers} type="button" value="0" class="btn btn-light">0</Button>
      <Button variant="text" onClick={handleNumbers} type="button" class="decimal function btn btn-secondary" value=".">.</Button>
      <Button variant="text" onClick={handleAC} type="button" class="all-clear function btn btn-danger btn-sm" value="all-clear">AC</Button>

      <Button variant="text" onClick={handleEqual} type="button" class="equal-sign operator btn btn-default" value="=">=</Button>

    </div>
    </div>
    // </div>
    );
}

export default Calculator;