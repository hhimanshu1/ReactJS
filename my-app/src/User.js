import React from 'react';
import {useParams} from 'react-router-dom'
// const User=({match})=>{
//     return (
//         <>
//         <h1>I am  {match.params.fname} Page</h1>
//         </>
//     )
// };

const User=()=>{
    const {fname,lname}=useParams();
    return (
        <>
        <h1>I am  {fname} {lname}Page</h1>
        </>
    )
}

export default User;