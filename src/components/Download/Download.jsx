import React from "react";

export const Download = () => {
  const generatePdf = () => {
    const cvElem = document.querySelector("#cv-paper");
    if (!cvElem) {
      return;
    }
  };

  return <button onClick={generatePdf}>Generate PDF</button>;
};
