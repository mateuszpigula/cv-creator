import styled from 'styled-components';

export const Input = styled.input`
  background: #fefefe;
  position: relative;
  width: min(${(props) => props.value.length + 2}ch, 100%);
`;

export const PencilIcon = styled.span`
  align-items: center;
  background: #e4e4f3;
  border-radius: 50%;
  color: #250606;
  display: flex;
  font-size: 10px;
  justify-content: center;
  opacity: 0;
  padding: 0.5em;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  transition: opacity 0.2s ease-in-out;
`;

export const StyledTag = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid #d8d8d8;
    border-radius: 0.2em;
    margin-left: -0.25em;
    padding: 0.25em;

    ${PencilIcon} {
      opacity: 1;
    }
  }
`;
