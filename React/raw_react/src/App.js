import picture from './liyakat.png';
import React from 'react';
import "./index.css";

function App() {
    return (
      <div className="bg-red-500">
        <h1 className="text-orange-400 ">Tailwind + React</h1>
      </div>
    );
  }
  


function Pic(){
  return (
  

    <div className='bg-green-400'>
       <img className='w-20' src={picture}>
       </img>
     </div>


  );
}

export {App , Pic};


