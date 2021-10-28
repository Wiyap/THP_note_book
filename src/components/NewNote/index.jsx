import React from 'react';

const NewNote = (props) => {
  const clearFields = (e) => {
    props.clear();
  }

  return (
    <button className="btn btn-danger m-5 p-3" onClick={clearFields}> Ajouter une note </button>
  )
};

export default NewNote;