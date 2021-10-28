import React from 'react';

const MarkdownInput = (props) => {
  const onChange = (e) => {
    let value = e.target.value;
    if(e.target.tagName === "INPUT"){
      props.passValues(value, null);
    }else{
      props.passValues(null ,value);
    }
  }

  const saveNote = (e) => {
    let title = document.getElementById("titleElem").value;
    let content = document.getElementById("contentElem").value;
    localStorage[title] = content;
    props.newStorageArray();
    props.clear();
  }

  const editNote = (e) => {
    let newTitle = document.getElementById("titleElem").value;
    let newContent = document.getElementById("contentElem").value;
    localStorage.removeItem(e.target.id);
    localStorage[newTitle] = newContent;
    props.newStorageArray();
  }

  return(
    <div className="m-5">
      <input id="titleElem" className="form-control w-25 my-3" placeholder="Titre" onChange={onChange}></input>
      <textarea id="contentElem" class="form-control w-75 my-3" rows="6" onChange={onChange}></textarea>
      <button className="btn btn-danger my-3 col-3 p-3 btn-sizing" onClick={saveNote}>Sauvegarder</button>
      <button id="" className="btn btn-warning ms-2 my-3 col-3 p-3 btn-sizing hidden" onClick={editNote}> Edit </button>
    </div>
  )
}

export default MarkdownInput;