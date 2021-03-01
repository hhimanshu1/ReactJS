import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom'
// const User=({match})=>{
//     return (
//         <>
//         <h1>I am  {match.params.fname} Page</h1>
//         </>
//     )
// };

const User=()=>{
    const {fname,lname}=useParams();
    const location=useLocation();
    const history=useHistory();
    return (
        <>
        <h1>I am  {fname} {lname}Page</h1>
        <p>My Current location is {location.pathname}</p>
        {location.pathname===`/user/himanshu/hemant` ?(
        <button onClick={()=>history.goBack()}>Click Me</button>    
            
        ):null}
    
        </>
    );
};

export default User;