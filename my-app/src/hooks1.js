import React, {useState} from 'react';

const Hooks1=()=>{
    let newTime=new Date().toLocaleTimeString();
    const[ctime, setTime]=useState(newTime);
    const UpdateTime=()=>{
        newTime=new Date().toLocaleTimeString();
        setTime(newTime);
    }
    return (
        <>
        <h1>{ctime}</h1>
        <button onClick={UpdateTime}>Get Time</button>
        </>
    )
}
export default Hooks1;