import React from "react";
import Showdown from "showdown";

const ShowNote = (props) => {
  const converter = new Showdown.Converter();

  function createMarkup(value) {
    return {__html: converter.makeHtml(value)};
  }
  
  function myComponent(value) {
    return <div dangerouslySetInnerHTML={createMarkup(value)} />;
  }

  const localStorageValues = props.lstorage();

  const selectNote = (e) => {
    const note = e.currentTarget.children;
    props.newInputs(note[0].innerHTML, note[1].innerHTML);
  }

  return(
    <div className="row">
      {localStorageValues.map((value) => (
        <div className="mx-5 my-3" onClick={selectNote}>
          <h1 className="red">{myComponent(value[0])}</h1>
          <p>{myComponent(value[1])}</p>
        </div>
      ))}
    </div>
  )
}

export default ShowNote;