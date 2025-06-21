import React from 'react';
import picture from './liyakat.png';
import "./index.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import ProductList from './props.js'; // Adjust the path as necessary


function App() {
    return (
      <div className="bg-red-500">
        <h1 className="text-orange-400  text-center" >Tailwind + React</h1>
      </div>
    );
  }
  

// function Pic(){
//   return (
//     <div className='bg-green-400'>
//        <img className='w-20' src={picture}>
//        </img>
//      </div>
//   );
// }


// function Req (){
//   return (fetch("http://localhost:4000").then((req)=>
//   {
//     return(
//       <>
//       <h1>
//         {req}
//       </h1>
//       </>
//     );
//   })
// )
// }


// export {App , Pic ,Req};





// function DataComponent() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://192.168.247.1:4000');
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const json = await response.json();
//         setData(json);
//       } catch (e) {
//         setError(e);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);


//   return (
//     <div>
//       {data && (
//         <ul>
//           {data.map(item => (
//             <li> {item.name} Data {item.age}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export {App , Pic , DataComponent };

 

function Data(prop)
{
var [val,details] = useState(false);


  useEffect(()=>{
     
    details (axios.get("http://localhost:4000/").then((res)=>{
   
     
          val =  res.data;
          return (val.name)
  


    }).catch((err)=>{
      console.log(err)
    })
  )
  })

return ( 
  <h1>
 Data is : {
  val
}
  </h1>
)
}

function App2() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

// export default App;

export {App2}


