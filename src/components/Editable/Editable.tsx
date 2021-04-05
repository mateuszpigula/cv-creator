import React, { ReactElement, useContext, useEffect, useRef, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { StyledComponent } from 'styled-components';
import { ResumeContext } from 'contexts/ResumeContext/ResumeDataProvider';
import * as actions from 'actions';
import { Actions, Target } from 'contexts/ResumeContext/types';
import { IMPORT_JSON } from 'actions';
import { Input, PencilIcon, StyledTag } from './Editable.styles';

const cols = 30;
type Props = {
  tag:
    | keyof JSX.IntrinsicElements
    | StyledComponent<keyof JSX.IntrinsicElements, Record<string, unknown>>;
  initialValue: string;
  target: Target;
  label?: string;
  textarea?: boolean;
  action?: Exclude<Actions['type'], typeof IMPORT_JSON>;
};

export const Editable = ({
  tag,
  initialValue,
  target,
  label,
  textarea,
  action = actions.UPDATE_DATA,
}: Props): ReactElement => {
  const { dispatch } = useContext(ResumeContext);
  const [editable, setEditable] = useState(false);
  const input = useRef<HTMLTextAreaElement & HTMLInputElement>(null);
  const form = useRef(null);
  const [value, setValue] = useState('');
  const Tag = tag;

  useEffect(() => {
    if (editable && input.current) {
      input.current.focus();
    }
  }, [editable]);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValue(e.target.value);
  const handleSave = () => {
    dispatch({ type: action, payload: { value, target } } as Actions);
    setEditable(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSave();
  };

  const onEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
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
    <StyledTag as={Tag} onClick={() => setEditable(true)}>
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
