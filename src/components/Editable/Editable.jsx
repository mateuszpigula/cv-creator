import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { ResumeContext } from '../../contexts/ResumeContext/ResumeDataProvider';
import * as actions from '../../actions';
import { Input, PencilIcon, StyledTag } from './Editable.styles';

const cols = 30;
export const Editable = ({
  tag,
  initialValue,
  target,
  label,
  textarea,
  action = actions.UPDATE_DATA,
  ...rest
}) => {
  const { dispatch } = useContext(ResumeContext);
  const [editable, setEditable] = useState(false);
  const input = useRef(null);
  const form = useRef(null);
  const [value, setValue] = useState(null);
  const Tag = tag;

  useEffect(() => {
    if (editable && input) {
      input.current.focus();
    }
  }, [editable]);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (e) => setValue(e.target.value);
  const handleSave = () => {
    dispatch({ type: action, payload: { value, target } });
    setEditable(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      handleSave();
    }
  };

  const getInputComponent = () => {
    if (textarea) {
      return (
        <textarea
          value={value}
          cols={cols}
          rows={value.length / cols + 2}
          onChange={handleChange}
          onBlur={handleSave}
          ref={input}
          onKeyDown={onEnterPress}
        />
      );
    }

    return (
      <Input type={'text'} value={value} onChange={handleChange} onBlur={handleSave} ref={input} />
    );
  };

  if (editable) {
    return (
      <Tag>
        <form onSubmit={handleSubmit} ref={form}>
          {label && <label>{label}: </label>}
          {getInputComponent()}
        </form>
      </Tag>
    );
  }

  return (
    <StyledTag as={Tag} onClick={() => setEditable(true)} {...rest}>
      {label && `${label}: `}
      {value?.split('\n').map((part) => (
        <span key={part}>
          {part}
          <br />
        </span>
      ))}
      <PencilIcon>
        <FaPencilAlt />
      </PencilIcon>
    </StyledTag>
  );
};
