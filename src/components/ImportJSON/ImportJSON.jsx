import React, { useContext, useRef, useState } from "react";
import { Button } from "../Button/Button";
import { ResumeContext } from "../../contexts/ResumeContext/ResumeDataProvider";
import { IMPORT_JSON, RESET } from "../../actions";

export const ImportJSON = () => {
  const { dispatch } = useContext(ResumeContext);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      dispatch({ type: IMPORT_JSON, payload: JSON.parse(e.target.result) });
    };
  };

  return (
    <>
      <input type="file" onChange={handleChange} hidden ref={inputRef} />
      <Button onClick={handleClick}>Import json file</Button>
    </>
  );
};
