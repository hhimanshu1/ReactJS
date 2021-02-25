import CompA from './CompA';
import {React, createContext } from 'react';
const FirstName=createContext();


 const App=()=>{
   return (
     <>
   <FirstName.Provider value={"Hemant"}>
     <CompA />
   </FirstName.Provider>
   </>
   );
 };

export default App;
export {FirstName};
