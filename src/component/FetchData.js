import React,{useState,useEffect} from 'react'
import axios from 'axios';

function FetchData() {
    const[post,setPost] = useState([])
    const[singlepost,setSinglePost] = useState({})
    const [id,setId] = useState(1);

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos/?_limit=5')
    .then(res =>{
console.log(res.data);
setPost(res.data);
    })
    .catch(err =>{
        console.log(err);
    })
    
}, [])

useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(res =>{
console.log(res.data);
setSinglePost(res.data);
    })
    .catch(err =>{
        console.log(err);
    })
    
}, [id])

    return (
        <div>
            <h5>All data</h5>
            <ul >
               { post.map((item,i) => (
                <li style={{margin:'10px'}} key={i}>{item.title}</li>
               )
               ) }
            </ul>

            <h5>Selective data</h5>
            <input type='number' value={id} onChange={e => setId(e.target.value)} /><br/>
            name : {singlepost.title} <br/> image : <img style={{height:'50px',width:'50px'}} src={singlepost.thumbnailUrl} alt=''/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default FetchData
