import React, { useReducer, useState } from 'react'
import ReactDOM from 'react-dom'

// 第一步：初始化
const initial ={
    n:0
}
// 第二步：创建所有操作    state是状态（就是数据） action操作类型
const reducer = (state,action)=>{
  if(action.type === 'add'){
    return {n:state.n+action.number}
  }else if(action.type === 'mult'){
    return {n:state.n*action.number}
  }else{
    throw new Error('unKnow')
  }
}

const App =()=>{
    // 第三步：state是状态，dispatch是操作  reducer是操作的集合，initial是初始状态
    const [state,dispatch] = useReducer(reducer,initial);

    const onClick=()=>{
        dispatch({type:'add',number:1})
    };
    const onClick2=()=>{
        dispatch({type:'mult',number:2})
    }
  return(
    <div>
      n:{state.n}
      <button onClick={onClick}>+1</button>
      <button onClick={onClick2}>*2</button>
    </div>    
  );
}

ReactDOM.render(<App />,document.getElementById('root'));
