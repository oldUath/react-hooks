import React from 'react'
import ReactDOM from 'react-dom'

// initValue是初始值，接收传入的参数n
let _state;
const myUseState=(initValue)=>{
  _state = _state ===undefined?initValue:_state;


  const setState=(newState)=>{
    _state = newState;
   ReactDOM.render(<App />,document.getElementById('root'));
  };

  return [_state,setState]
}


const App =()=>{
  const [n,setN] = myUseState(0);
  return(
    <div>
      n:{n}
      <button onClick={add=>{setN(n+1)}}>+1</button>

    </div>
  )
}



ReactDOM.render(<App />,document.getElementById('root'));
