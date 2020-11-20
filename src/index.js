import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom'


function App(){
  const [n,setN] = useState(0);
  const [m,setM] = useState(0);
  const add=()=>{
    setN(i=>i+1);
  };
  const addChild=()=>{
    setM(i=>i+1);
  };
  const onClickChild=useMemo(()=>{
    return ()=>{
      console.log(m)
    }
  },[m])

  return(
    <div>
      <div>
        n:{n}
        <button onClick={add}>n+1</button>
        <button onClick={addChild}>m+1</button>
      </div>
      <Child2 data={m} onClick={onClickChild} />
    </div>
  )
}
function Child(props){
  console.log('child执行了')
  console.log('这里有很多代码')
  return(
    <div onClick={props.onClick}>
      child:{props.data}
    </div>
      )
}
// 
const Child2 = React.memo(Child)
ReactDOM.render(<App />,document.getElementById('root'));
