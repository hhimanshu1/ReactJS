import React,{ useState} from 'react';
import Sresult from './SearchResult'
const Search=()=>{
    const [state, setstate] = useState("");
    const inputEvent=(event)=>{
        const data=event.target.value;  
        setstate(data);
    }
    return (
        <>
        <input type="text" placeholder="search" value={state} onChange={inputEvent}/>
        {state===""?null:<Sresult name={state}/>}
        
        </>
    )
}

export default Search;