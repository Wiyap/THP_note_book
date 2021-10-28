import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/App.css'
import NoteDisplay from "./components/NoteDisplay";
import MarkdownInput from "./components/MarkdownInput";
import ShowNote from "components/ShowNote";
import NewNote from "components/NewNote";

const App = () => {
  const [titleValue, setTitleValue] = React.useState("");
  const [contentValue, setContentValue] = React.useState("");

  const allStorage = () => {
    let localStorageValues = [], localStorageKeys = Object.keys(localStorage);
    for(let i = 0; i < localStorageKeys.length; i++){
      localStorageValues.push([localStorageKeys[i], localStorage.getItem(localStorageKeys[i])]);
    }
    return localStorageValues;
  }

  const [localStorageArray, setLocalStorageArray] = React.useState(allStorage())

  const passValues = (titleValue, contentValue) => {
    if(titleValue === null){
      setContentValue(contentValue);
    }
    if(contentValue === null){
      setTitleValue(titleValue);
    }
  }


  const newStorageArray = () => {
    setLocalStorageArray(allStorage);
  }
  
  const newInputs = (input = "", textarea = "") => {
    const editBtn = document.querySelector(".btn-warning");
    document.getElementById("titleElem").value = input;
    document.getElementById("contentElem").value = textarea;
    if(input !== "" && textarea !== ""){
      editBtn.id = document.getElementById("titleElem").value;
      if(editBtn.classList.value.includes("hidden")){
        editBtn.classList.remove("hidden")
      }
    }else{
      if(!editBtn.classList.value.includes("hidden")){
        editBtn.classList.add("hidden")
      }
    }
    setTitleValue(input);
    setContentValue(textarea);
  }

  return(
    <div className="row m-5">
      <div className="col-2">
        <NewNote clear={newInputs}/>
        <ShowNote lstorage={allStorage} newInputs={newInputs}/>
      </div>
      <div className="container col-10">
        <NoteDisplay title={titleValue} content={contentValue}/>
        <MarkdownInput passValues={passValues} newStorageArray={newStorageArray} clear={newInputs}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));