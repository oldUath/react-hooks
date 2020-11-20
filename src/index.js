import React, { useEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

// //useRef
// function App(){
//   console.log('app执行了')
//   const count = useRef(0);
//   const [n,setN] = useState(0);
//   const add=()=>{
//     setN(i=>i+1);
//     count.current+=1
//     console.log(count.current)
//   };

//   return(
//     <div>
//       <div>
//         n:{n}
//         <button onClick={add}>n+1</button>
//       </div>
//     </div>
//   )
// }

//forwordRef
function App(){
  const buttonRef = useRef(null);
  return(
    <div>
      <Button1 ref={buttonRef}>按钮</Button1>
    </div>
  )
}
const Button1=React.forwardRef((props,ref)=>{
  console.log(props)
  console.log(ref)
  return <button ref={ref}{...props}></button>
})



ReactDOM.render(<App />,document.getElementById('root'));
