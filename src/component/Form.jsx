import React, { useState } from "react";
import DisplayListData from "./DisplayListData";

const Form = () => {
  let [InputFile, setInputFile] = useState({ title: "", price: "", date: "" });
  let [data, setdata] = useState(
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  );
  let [toggel, settoggel] = useState("show");
  function commonHandel(e) {
    let value = e.target.value;
    let name = e.target.name;
    setInputFile({ ...InputFile, [name]: value });
  }
  function SubmitForm(e) {
    e.preventDefault();

    setdata([...data, InputFile]);
    setInputFile({ title: "", price: "", date: "" });
  }
  function toggelShowHide(e) {
  let btnValue=  e.target.value
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
              }}
              className="mainForm"
            >
              <label htmlFor="">Title :</label>
              <input
                type="text"
                name="title"
                value={InputFile.title}
                onChange={(e) => {
                  commonHandel(e);
                }}
              />
              <label htmlFor="">Price :</label>
              <input
                type="number"
                name="price"
                onChange={(e) => {
                  commonHandel(e);
                }}
                value={InputFile.price}
              />
              <label htmlFor="">Date :</label>
              <input
                type="date"
                name="date"
                onChange={(e) => {
                  commonHandel(e);
                }}
                value={InputFile.date}
              />
              <button type="submit">submit</button>
            </form>         
        )}
      </div>

      <div>
        <DisplayListData data={data} />
      </div>
    </>
  );
};

export default Form;
