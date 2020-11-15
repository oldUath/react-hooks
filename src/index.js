import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App =()=>{
  const [user,setUser]=useState(({name:'dong',age:18}));
  const onClick=()=>{
    setUser({
      ...user,
      name:'zhi'
    })
  }
  return(
    <div>
    <h1>{user.name}</h1>
    <h1>{user.age}</h1>
    <button onClick={onClick}>onclick</button>
  </div>    

  );
}

ReactDOM.render(<App />,document.getElementById('root'));
