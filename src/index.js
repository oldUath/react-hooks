import React, { useEffect,useState } from 'react'
import ReactDOM from 'react-dom'


function App(){
  const [n,setN] = useState(0);
  const add=()=>{
    setN(i=>i+1);
  };

// 第一次渲染，只执行这一次，[]要在第二个参数
useEffect(()=>{
      console.log('这是第一次渲染执行这句话');
    },[]);
// 第一,二，三次渲染，每次都执行，不用写第二个参数
useEffect(()=>{
  console.log('这是第1.2.3次渲染执行这句话');
});
//当n变化了就执行这句
  useEffect(()=>{
    console.log('n变了');
  },[n])


  return(
    <div>
      n:{n}
      <button onClick={add}>+1</button>
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
