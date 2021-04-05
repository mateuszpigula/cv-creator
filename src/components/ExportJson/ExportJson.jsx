import React, { useContext } from 'react';
import { Button } from '../Button/Button';
import { ResumeContext } from '../../contexts/ResumeContext/ResumeDataProvider';

export const ExportJson = () => {
  const { state } = useContext(ResumeContext);

  const downloadJson = () => {
    const filename = `${state.name.toLowerCase().replace(/ /g, '')}.json`;
    const data = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', data);
    downloadAnchorNode.setAttribute('download', filename);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <>
      <Button onClick={downloadJson}>Export to json file</Button>
    </>
  );
};
