import React from 'react';
import Showdown from 'showdown';

const NoteDisplay = (props) => {
  const converter = new Showdown.Converter();
  const title = converter.makeHtml(props.title), content = converter.makeHtml(props.content); 

  function createMarkup(value) {
    return {__html: value};
  }
  
  function myComponent(value) {
    return <div dangerouslySetInnerHTML={createMarkup(value)} />;
  }

  return(
    <div className="min-vh-40 m-5">
      <h1 className="red">{myComponent(title)}</h1>
      <p>{myComponent(content)}</p>
    </div>
  )
}

export default NoteDisplay;