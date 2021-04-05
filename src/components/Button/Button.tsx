import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #fefefe;
  border: none;
  border-radius: 3px;
  box-shadow: ${(props) => (props.disabled ? '' : '2px 4px 4px 0px black')};
  cursor: pointer;
  display: inline-flex;
  margin: 1em 1em 2em;
  padding: 1em 2em;
  pointer-events: ${(props) => (props.disabled ? 'none' : '')};
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    transform: translateY(1px);
  }
`;

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

export const Button = ({ children, onClick, disabled }: Props): ReactElement => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
