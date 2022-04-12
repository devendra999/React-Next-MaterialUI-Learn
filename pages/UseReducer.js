import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    console.log(state, action)
    if(action.type === 'DICREMENT') {
        return state - 1;    
    }
    else if (action.type === 'INCREMENT') {
        return state + 1;
    }

    return state;
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
        <div>
            <p>{state}</p>
            <div>
                <button onClick={()=>{dispatch({type: 'DICREMENT'})}}>DIC</button>
                <button onClick={()=>{dispatch({type: 'INCREMENT'})}}>INC</button>
                
            </div>
        </div>
    </>
  )
}

export default UseReducer;