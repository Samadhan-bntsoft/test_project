import React,{useState,useRef,useEffect} from 'react'

function Ref() {

    const[count,setCount] = useState(0);
    const[name,setName] = useState('CR7');
    const nameRef = useRef();
    let countRef = useRef(0);
    const buttonRef = useRef(null);
useEffect(() => {
    nameRef.current.focus();
}, [])

const changeCount = () => {
    buttonRef.current.focus();
    setCount(count => count + 1);
    countRef.current = count;
}

    return (
        <div>
            <h2>UseRef</h2>
           focus : <input type='text' name='name' ref={nameRef} value={name} onChange={(e) => setName(e.target.value)} />
           <br/>
           {countRef.current} <button ref={buttonRef} onClick={changeCount}>+ 1</button>
        </div>
    )
}

export default Ref
