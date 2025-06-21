// import image from "./HD-wallpaper-cyber-punk_btn.jpg" 
import React, { useEffect } from "react";
import { useCallback, useRef, useState } from "react";

/*
we learn hooks by doing a simple project 

 ‼️ password generator ‼️

❓ functionality of we can add 

❗includes a number also on btn click
❗include special characters on btn click
❗also length feature by sliding the slider
❗copy on click 

Also we can optimize the code also


➡️ How I procedure 

password generator function
btn checked functionality
-if btn is check add that properties

copy on click functionality
- clipboard functionality


*/

let WordsList = "HhPpOoIiXxEeYyCcNnLlTtQqWwZzKkUuSsMmVvJjAaBbRrDdFfGg";
let NumbersList = "0123456789";
let SymbolsList = String(`!@#$%^&*()-_+={}['\\]|:;"'<,>.?/"`);

function PassGenerator(props) {
  let [input, setInput] = useState("");
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [slider, setslider] = useState(8);

  let copyPass = useRef("");

  const select_text = () => {

    copyPass.current?.select();
    copyPass.current?.setSelectionRange(0, 20); // working
    navigator.clipboard.writeText(copyPass.current.value.slice(0,20))
     

    // console.log(copyPass.current.value,"select dtext");
  };
  //  useEffect(()=>{
  // })

  // setting the Slider value
  const sliderChange = useCallback(
    (val) => {
      console.log("rendering");
      console.log(slider);
      return setslider(val.target.value);
    },
    [slider]
  );

  const activeSymbol = useCallback(() => {
    return setSymbols((symbols) => !symbols);
  }, [symbols]);

  const activeNumber = useCallback(() => {
    return setNumber((num) => !num);
  }, [number]);

  const PassGenerator = useCallback(
    (pass) => {
      pass = "";

      for (let index = 1; index <= slider; index++) {
        // pass += WordsList.charAt(Math.floor([Math.random() * slider + 1]));

        if (symbols) {
          pass +=
            SymbolsList.charAt(Math.floor([Math.random() * slider + 1])) +
            WordsList.charAt(Math.floor([Math.random() * slider + 1]));
        }
        if (symbols && number) {
          pass +=
            SymbolsList.charAt(Math.floor([Math.random() * slider + 1])) +
            NumbersList.charAt(Math.floor([Math.random() * slider + 1])) +
            WordsList.charAt(Math.floor([Math.random() * slider + 1]));
        }
        if (number) {
          pass +=
            NumbersList.charAt(Math.floor([Math.random() * slider + 1])) +
            WordsList.charAt(Math.floor([Math.random() * slider + 1]));
        } else {
          pass += WordsList.charAt(Math.floor(Math.random() * slider + 1));
        }
      }

      setInput(pass.slice(0, slider));
      console.log(pass.length);
    },
    [number, symbols, slider]
  );

  return (
    // jsx starts from here
    <>
      <div className="my-[10%] mx-[1%] justify-center align-middle content-center">
        <div className="m-auto flex flex-wrap w-[50%]  text-[#F8EF00]  ">
          <label className="uppercase text-[#F8EF00]  w-[80%]" htmlFor="PasswordField">Password Generator</label>
          <input
            className="bg-black text-[#00F0FF] w-[55%] mr-[30%] h-[55%] border-[3px] border-[#00F0FF] focus:outline-1 focus:outline-[#00F0FF]  "
            id="PasswordField"
            type="text"
            placeholder="Your password"
            defaultValue="Your random Password"
            value={input}
            ref={copyPass}
          > 
          </input>

          <button id="generate_pass" className=" mt-3 rounded-sm bg-[url('/src/HD-wallpaper-cyber-punk_btn.jpg')] bg-left text-black  font-bold py-2 " 
          onClick={PassGenerator}>Generate Password</button>
          
          <button id="copy_pass" className= "overflow-hidden rounded-sm sm:text-[5%] md:text-[15px] lg:text-[15px] sm:w-full mt-5 w-[55%] mr-[45%] text-left pl-5 bg-[url('/src/HD-wallpaper-cyber-punk_btn.jpg')] bg-cover bg-top-left text-black  font-bold py-2 " 
          onClick={select_text}>Copy Password_</button>

           <input
            type="range"
            min={0}
            max={50}
            onChange={sliderChange}
            step={1}
            value={slider}
            className="custom-slider"

          />
    
          <div className="ml-[5%] mt-5 mr-[30%]">
            {slider}:Digit
            </div> 
          
          <div className="mt-[5%] flex items-center align-middle">
            
          <label className="mr-[5%]" htmlFor="Number">Numbers</label>
          <span class="custom-checkbox-display"></span>
          <input id="Number" className="hidden-checkbox" type="checkbox" onClick={activeNumber}></input>
          <label className="ml-[15%] mr-[5%]" htmlFor="Symbols">Symbols</label>
          <input className="ml-[5%]" id="Symbols" type="checkbox" onClick={activeSymbol}></input>
         
          </div>
          </div>
      </div>
    </>
  );
}

export default PassGenerator;
