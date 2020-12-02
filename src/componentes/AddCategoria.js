import React, { useState } from "react";
import PropTypes from "prop-types";

export default function AddCategoria ({setCategorias}) {

  const [inputValue, setInputValue] = useState('');

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      setCategorias(cats => [inputValue,...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={submit}>
      <input 
      type="text" 
      value={inputValue} 
      onChange={inputChange} />
    </form>
  );
};

AddCategoria.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};
