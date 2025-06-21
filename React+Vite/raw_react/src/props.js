// import { createRoot } from "react-dom/client";
import "./index.css";
import Products from "./products.json";
import { useEffect, useState } from "react";
import axios from "axios";

/* 
props is represents as property in react 

it as a parameter of a function 

it take the arguments passes when we create a function call pass a value with them 

// ❗ Begin Pros ❗

props can be mutable but

we consider not modify that just access and use 

there no any such restriction on that to modify it  

*/

// let Element = document.querySelector("#root")
// let root = createRoot(Element);
// let tag = document.querySelector("#root");
// let data = JSON.stringify(Products);
// data = JSON.parse(data);

function Card({ root }) {
  let [p_data, setData] = useState([]);

  useEffect((ele) => {
    axios
      .get("https://dummyjson.com/products")
      .then((ele) => {
        // console.log(ele.data);
        return ele.data;
      })
      .then(({ limit, products }) => {
        setData(products);    // here the data is set into the useState in p_data variable
      });
  }, []);

  return (
    <>
      <div className="bg-amber-600 flex flex-wrap ">
        {p_data.map((data) => {
          return (
            <ul>
              <li className="bg-emerald-400  ml-8 mt-3 rounded-b-4x2 " key={data.id}>
                products images <br />
                <img className="w-fit" src={data.thumbnail}></img>
                products price:{data.price}
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default Card;
