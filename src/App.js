import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function random_item(items)
{
return items[Math.floor(Math.random()*items.length)];
}
function getRandomEquation(eqsize){
  let maxOperators=Math.floor(eqsize/2)
  let num_operators=Math.floor(Math.random()*maxOperators)+1
  num_operators=1
  let maxDigits=eqsize-num_operators
  let min_Numbers=num_operators+1;
  let answer_size=Math.floor(Math.random()*(maxDigits-min_Numbers))+1
  let answer=Math.floor(Math.random()*(Math.pow(10, answer_size+1)-Math.pow(10, answer_size)))+Math.pow(10, answer_size)
  let max_solution_size=eqsize-(toString(answer).length+1)
  answer_factors=getAllFactors(answer)
  valid_factors=[]
  for(let i=0; i<answer_factors.length; i++){
    if((toString(answer_factors[i][0])+toString(answer_factors[i][1]))==max_solution_size-num_operators){
      valid_factors.push(answer_factors[i])
    }
  }
  factor_pair=random_item(valid_factors)
  equation=toString(toString(factor_pair[0])+"*"+toString(factor_pair[1])+"="+toString(answer))
  console.log(answer);
  return equation;
  }
function getAllFactors(num){
  factorList=[]
  
  for(let i=1; i<Math.ceil(Math.sqrt(num)); i++){
    if(num%i==0){
        factorList.push([i, num/i])
    }
  }
  return factorList;
}
function getValidCharactersOnly(keyEvent){
  let valid_characters=""
}
function App() {
  const [equation, setEquation]=useState(getRandomEquation(6));
  return (
    <div className="App">
      <div className="box">
        </div>
        <div className="box">
        </div>
        <div className="box">
        </div>
        <div className="box">
        </div>
        <div className="box">
        </div>
        <div className="box">
        </div>
    </div>
  );
}

export default App;
