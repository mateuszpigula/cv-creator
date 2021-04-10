import React, { ReactElement, useContext } from 'react';
import { ResumeContext } from 'contexts/ResumeContext/ResumeDataProvider';
import { Button } from 'components/Button/Button';

export const ExportJson = (): ReactElement => {
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

  return <Button onClick={downloadJson}>Export to json file</Button>;
};
