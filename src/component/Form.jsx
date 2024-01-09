import React, { useState } from "react";
import DisplayListData from "./DisplayListData";
import Model from "./Model";


const Form = () => {
  let [InputFile, setInputFile] = useState({ title: "", price: "", date: "" });
  let [data, setdata] = useState(
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  );
  let [error , seterror]= useState("")
  let [toggel, settoggel] = useState("show");
  let [showErr , setshowErr]= useState(false)
  let [inputErrColor, setinputErrColor]= useState(true)
  function commonHandel(e) {
    let value = e.target.value;
    let name = e.target.name;
    setInputFile({ ...InputFile, [name]: value });
  }
  function SubmitForm(e) {
    e.preventDefault();
       if(InputFile.title=="" && InputFile.price=="" && InputFile.date=="" ){
        seterror("please fill all field") 
        setshowErr(true)    
       }else{
        if(InputFile.title==""){
          seterror("please fill title field")
          setshowErr(true) 
          setinputErrColor(true)
        }
       else if(InputFile.price == ""){
          seterror("please fill price field")
          setshowErr(true) 

        }
      else  if(InputFile.date==""){
          seterror("please choose your date")
          setshowErr(true) 
        }
        else{
          setdata([...data, InputFile]);
          setInputFile({ title: "", price: "", date: "" });
        }
       }  
  }
  function toggelShowHide(e) {
  let btnValue= e.target.value
  if(btnValue == "show"){
    settoggel("hide")
  }
  else{
    settoggel("show")   
  }   
  }
  localStorage.setItem("data", JSON.stringify(data));
  return (
    <>
      <div className="formConatiner">
        <input className="showhidebtn"
          onClick={(e) => {
            toggelShowHide(e);          
          }}
       value={toggel}
        type="button"
       />
       
       
        {toggel=="show"  ?"": (          
            <form
              onSubmit={(e) => {
                SubmitForm(e);
                toggelShowHide(e);
              }}
              className="mainForm"
            >
              <label htmlFor="">Title :</label>
              <input
                 style={{
                  border: !inputErrColor.title?"2px solid":"2px solid orange"
                 }}
                type="text"
                name="title"
                
                value={InputFile.title}
                onChange={(e) => {
                  commonHandel(e);
                }}
              />
              <label htmlFor="">Price :</label>
              <input
                    style={{
                      border:InputFile.price?"2px solid":"2px solid red"
                     }}
                type="number"
                name="price"
                onChange={(e) => {
                  commonHandel(e);
                }}
                value={InputFile.price}
              />
              <label htmlFor="">Date :</label>
              <input style={{
                  border:InputFile.title?"2px solid":"2px solid red"
                 }}           
                type="date"
                name="date"
                onChange={(e) => {
                  commonHandel(e);
                }}
                value={InputFile.date}
              />
              <button type="submit" className="submitBtn">submit</button>
            </form>         
        )}
      </div>

      <div>
        {!showErr ? <DisplayListData data={data} /> :<Model error={error} setshowErr={setshowErr}/> } 
      </div>
    </>
  );
};

export default Form;
