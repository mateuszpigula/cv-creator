import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ResumeContext } from '../../../contexts/ResumeContext/ResumeDataProvider';
import { UPDATE_DATA } from '../../../actions';

const AvatarContainer = styled.div`
  border-radius: 50%;
  cursor: pointer;
  height: 150px;
  margin-left: -130px;
  max-width: 150px;
  min-width: 150px;
  overflow: hidden;
  position: relative;

  &::after {
    background: rgb(204 204 204 / 50%);
    content: '';
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 0.2s ease-in-out;
    width: 100%;
  }

  &:hover::after {
    opacity: 1;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

export const EditableAvatar = () => {
  const { state, dispatch } = useContext(ResumeContext);
  const [editable, setEditable] = useState(false);
  const input = useRef(null);

  useEffect(() => {
    if (!editable) {
      return;
    }

    input.current?.click();
  }, [editable]);

  const handleSave = (value) => {
    console.log(value);
    dispatch({ type: UPDATE_DATA, payload: { value, target: 'avatar' } });
    setEditable(false);
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        handleSave(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
      input.current.blur();
    }
  };

  if (editable) {
    return (
      <>
        <AvatarContainer onClick={() => setEditable(!editable)}>
          <img src={state.avatar} alt={state.name} />
        </AvatarContainer>
        <input type='file' ref={input} hidden onChange={handleFileChange} />
      </>
    );
  }

  return (
    <AvatarContainer onClick={() => setEditable(!editable)}>
      <img src={state.avatar} alt={state.name} />
    </AvatarContainer>
  );
};
