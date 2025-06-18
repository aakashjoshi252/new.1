import { useState } from "react"
// import Display from "./components/display";
// import Form from "./components/Form";
// import Form from "./components/Form";
import NewForm from './components/NewForm';
export default function App(){
  let [count, setCount]=useState(0);
  function handleClick(){
    setCount(count+1)
  }
  function handleClick1(){
    setCount(count-1)
  }
  return(
    <>
    <div className="container">
      <h1>Count {count}</h1>
      <button type="button" onClick={handleClick}>Increment by +1</button>
      <button type="button" onClick={handleClick1}>Decrement by -1</button>
    <div>
      
        </div>
        <NewForm />

    </div>
    </>
  )
}