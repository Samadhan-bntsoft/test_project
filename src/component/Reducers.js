import React ,{useReducer}from 'react'

const initialState = 0
const reducer = (state,action)=> {
    switch (action.type) {
        case 'increment':
        return state + action.value 
        case 'decrement':
            return state - 1   
        default:
            return state
    }
}

function Reducers() {
    const [cnt, dispatch] = useReducer(reducer, initialState)

const Increment = () =>{
    dispatch({type:'increment',value:5});  
}

const Decrement = () =>{
    dispatch({type:'decrement'});
}

    return (
        <div>
            <h2>useReducer hook</h2>
            <button onClick={Increment}>Increment + 5</button>
            <button onClick={Decrement}>Decrement</button>
            <span>{cnt}</span>
        </div>
    )
}

export default Reducers
