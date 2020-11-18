import React, { useEffect,useState } from 'react';
import './App.css';
// import {Count} from './Count.jsx'

function App() {
   const [count, setCount]=useState([])
  //  const[incre,increNub]=useState(0)
useEffect(() =>{
  async function get_data() {
   const response= await fetch('https://api.github.com/users/muhammadmohsin/repos')
   const data= await response.json()
   console.log(data)
   setCount(data)
}
//we call the function
get_data();
// alert("we have done")
},[])

   return(
     <div>
       {count.map((repoObj,ind) => {
         return(
           <ul key={ind}>
          <li>
            {repoObj.name}
            </li> 
           </ul>
         )
       })}
     {/* <div>
<button onClick={() => increNub(incre+1)}>
  Click here and Watch
</button>
     </div> */}
     </div>

   ) 
}

export default App;



// const [count, setCount]=useState(0)  
// const[counts, setCounts]=useState(0)
// useEffect(() => { 
// alert("we have clicked " + count)
// },[count])

{/* <button onClick={() =>{setCount(count+1)}}>Click This Button  {count}</button> */}
// l  <button onClick={() =>{setCounts(counts+1)}}>Click This Button  {counts}</button>



// const [repos,setRepos]=useState([{}]);
  
//  useEffect(() =>{
//   async function get_Data(){
//       const response= await fetch("https://api.github.com/users/AbdulMoiz8994/repos")
//       const data= await response.json();
//       console.log(data)
//       setRepos(data) 
//   } 
//   get_Data()

// },[])
 
//   return (
//     <div>
//       <ul>
//         {repos.map((reposObj,ind) =>{
//           return(
//             <li key={ind}>
//                {[reposObj.name]}
//             </li>
//           )
//         })}
//       </ul>
//       </div>
//   );







//  useEffect(() =>{
//  fetch('https://jsonplaceholder.typicode.com/posts/1')
//  .then((response) => response.json())
//  .then((json) => {
//    console.log(json)
//   setData(json)

// })
 
//   },[]) 