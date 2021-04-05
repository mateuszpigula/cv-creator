import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledToast = styled.div<{ type: 'success' | 'error' }>`
  background: ${(props) =>
    props.type === 'success' ? 'rgb(3 142 3 / 87%)' : 'rgb(204 56 56 / 76%)'};
  border: solid 1px ${(props) => (props.type === 'success' ? '#0d230d' : '#6f0d0d')};
  border-radius: 0.4em;
  bottom: 0;
  color: white;
  margin: 1em;
  min-width: 250px;
  padding: 1em;
  position: fixed;
  position: absolute;
  right: 0;
  text-align: center;
`;

export type ToastType = {
  message: string;
  type: 'success' | 'error';
};

export const Toast = ({ message, type }: ToastType): ReactElement => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);

  if (!show) {
    return <></>;
  }

  return <StyledToast type={type}>{message}</StyledToast>;
};
