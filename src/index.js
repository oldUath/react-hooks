import React from 'react'
import ReactDOM from 'react-dom'

// initValue是初始值，接收传入的参数n
let _state=[];
let index=0;
const myUseState=(initValue)=>{
  const currentIndex = index
  _state[currentIndex] = _state[currentIndex] ===undefined?initValue:_state[currentIndex];

  const setState=(newState)=>{
    _state[currentIndex] = newState;
   render();
  };
  index+=1;
  return [_state[currentIndex],setState]
};
const render=()=>{
  index=0
  ReactDOM.render(<App />,document.getElementById('root'));

}

const App =()=>{
  const [n,setN] = myUseState(0);
  const [m,setM] = myUseState(0);
  return(
    <>
      <div>
        n:{n}
        <button onClick={()=>{setN(n+1)}}>+1</button>
      </div>
      <div>
        m:{m}
        <button onClick={()=>{setM(m+1)}}>+1</button>
      </div>

    </>    
  )
}



ReactDOM.render(<App />,document.getElementById('root'));
