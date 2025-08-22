// import { useState } from "react";
// import {MyComp} from "./components/MyComponnent";
// import MyComponents2 from "./components/MyComponents2";

// function App() {
//   let [a,setA] = useState(0);
//   console.log(a);
//   const inc = () => {
//    setA(a+1)
//   };
//   const dec = () => {
//     // if(a==0){
//     //   setA(0)
//     // }else{
//     //    setA(a-1)
//     // }
//    a==0?setA(0):setA(a-1)
//   };

//   return (
//     <>
//       <h1>Hello Trisha :{a}</h1>
//       <button onClick={inc}>Inc</button>
//       <button onClick={dec}>Dec</button>
//       <MyComp/>
//       <MyComponents2/>
//     </>
//   );
// }
// export default App;
import React from "react";
import Profile from "./components/Profile";
import MyuseState from "./hooks/MyuseState";
import MyuseRef from "./hooks/MyuseRef";
import MyuseEffect from "./hooks/MyuseEffect";
import Myreduser from "./hooks/MyReducer";
import {createContext } from "react";
import Loging from "./components/Props/Loging";
import { useReducer } from "react";
export const Mycontext = createContext() 
import ContextApi from "./Api/ContextApi";
import WithoutCallbackExample from "./hooks/MyUseCallback/WithoutCallback";
import WithCallback from "./hooks/MyUseCallback/WithCallback";
import WithoutuseMemo from "./hooks/MyUseMemo/WithoutuseMemo";
const App = () => {
  //  const [data,dispatch] = useReducer(Myreduser,10)
  //  console.log(data);
   
  const name = "Trisha"; 
  // const age = 22;
  return (
    <div>
      {/* <Mycontext.Provider value={name}  >
          <Loging/>
      </Mycontext.Provider> */}
      <ContextApi data={name}>
        {/* <Loging/>
         */}
         {/* < WithoutCallbackExample/> */}
         {/* <WithCallback/> */}
          <WithoutuseMemo/>
      </ContextApi>
      
      {/* {data}
      <button onClick={()=>dispatch({type:"Inc"})}>Inc</button>
      <button onClick={()=>dispatch({type:"Dec"})}>Decrement</button> */}
      {/* <Profile/> */}
      {/* <MyuseRef /> */}
      {/* <MyuseEffect/> */}
      {/* <Myreduser/> */}
    </div>
  );
};

export default App;
