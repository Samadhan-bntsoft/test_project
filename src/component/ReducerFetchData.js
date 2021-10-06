import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const init = {
    loading:true,
    error:'',
    post:{}
}

const reducer = (state,action) =>{
    switch (action.type) {
        case 'FETCH_SUCCESS':
           return {
               loading:false,
               error:'',
               post : action.payload,
           }  
           case 'FETCH_ERROR':
            return {
                loading:false,
                error:'Something went wrong',
                post : {},
            }             
        default:
            return state;
    }
}

function ReducerFetchData() {
   
const[data,dispatch] = useReducer(reducer,init)

    useEffect(
         () => {
     axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res =>{
     dispatch({type:'FETCH_SUCCESS',payload:res.data})
    })
    .catch(err =>{
        dispatch({type:'FETCH_ERROR'})
    })
}, [])

    return (
        <div>
            <h2>Fetching data using useReducer hook with axios action type,payload</h2>
            { data.loading ? '...loading' :  data.post.title }
            { data.error ? data.error : null }
        </div>
    )
}

export default ReducerFetchData
