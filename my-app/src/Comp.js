import React ,{useEffect, useState} from 'react';
import axios from 'axios';

const Comp=()=>{
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    const [order, setOrder] = useState();
    const [weight, setWeight] = useState();
    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data);
            setName(res.data.name);
            setMoves(res.data.moves.length);
            setOrder(res.data.order);
            setWeight(res.data.weight);
        }
        getData();
    });
    return(
        <>
        <h1>You choose <span style={{color:'red'}}>{num}</span> value</h1>
        <h1>My name is <span style={{color:'red'}}>{name}</span> </h1>
        <h1>I have <span style={{color:'red'}}>{moves}</span> moves</h1>
        <h1>My Order is <span style={{color:'red'}}>{order}</span> </h1>
        <h1>My Weight is <span style={{color:'red'}}>{weight}</span> </h1>
        <select value={num} onChange={(event)=>{
            setNum(event.target.value);
        }}>
            <option value="1" selected>1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
       
        </>
    );
};

export default Comp;