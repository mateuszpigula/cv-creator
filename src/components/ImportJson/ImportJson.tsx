import React, { ReactElement, useContext, useRef } from 'react';
import { ResumeContext } from 'contexts/ResumeContext/ResumeDataProvider';
import { IMPORT_JSON } from 'actions';
import { Button } from 'components/Button/Button';

export const ImportJson = (): ReactElement => {
  const { dispatch } = useContext(ResumeContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) {
      return;
    }

    const fileReader: FileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    fileReader.onload = () => {
      if (!fileReader.result) {
        return;
      }

      dispatch({ type: IMPORT_JSON, payload: JSON.parse(fileReader.result as string) });
    };
  };

  return (
    <>
      <input type='file' onChange={handleChange} hidden ref={inputRef} />
      <Button onClick={handleClick}>Import json file</Button>
    </>
  );
};
