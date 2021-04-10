import React, { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import { Button, ButtonProps } from 'components/Button/Button';
import { red, Section } from 'components/CurriculumVitae/CurriculumVitae.styles';
import { Sections } from 'contexts/ResumeContext/types';
import { ADD_SECTION } from 'actions';
import { ResumeContext } from 'contexts/ResumeContext/ResumeDataProvider';

const StyledButton = styled(Button)`
  align-items: center;
  border: solid 2px ${red};
  border-radius: 50%;
  bottom: 1em;
  box-shadow: none;
  color: ${red};
  display: flex;
  font-size: 1.5em;
  height: 1.2em;
  justify-content: center;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  transition: opacity 0.2s ease-in-out;
  width: 1.2em;
  z-index: 5;

  ${Section}:hover & {
    opacity: 1;
  }
`;

type AddSectionProps = Partial<ButtonProps> & {
  type: Sections;
};
export const AddSectionButton = ({ type, ...buttonProps }: AddSectionProps): ReactElement => {
  const { dispatch } = useContext(ResumeContext);

  const handleClick = () => {
    dispatch({ type: ADD_SECTION, payload: type });
  };

  return (
    <StyledButton onClick={handleClick} {...buttonProps}>
      +
    </StyledButton>
  );
};
