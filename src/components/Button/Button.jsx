import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  padding: 1em 2em;
  margin: 1em 1em 2em;
  border-radius: 3px;
  background: #fefefe;
  text-decoration: none;
  cursor: pointer;
  box-shadow: ${(props) => (props.disabled ? '' : '2px 4px 4px 0px black')};
  border: none;
  white-space: nowrap;
  pointer-events: ${(props) => (props.disabled ? 'none' : '')};

  &:hover {
    transform: translateY(1px);
  }
`;
export const Button = ({ children, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
