import styled from "styled-components";

export const Input = styled.input`
  width: min(${(props) => props.value.length + 2}ch, 100%);
  background: #fefefe;
  position: relative;
`;

export const PencilIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #250606;
  background: #e4e4f3;
  position: absolute;
  right: 0;
  transform: translate(50%, -50%);
  padding: 0.5em;
  top: 0;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  font-size: 10px;
`;

export const StyledTag = styled.div`
  display: inline-block;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    padding: 0.25em;
    margin-left: -0.25em;
    border: 1px solid #d8d8d8;
    border-radius: 0.2em;

    ${PencilIcon} {
      opacity: 1;
    }
  }
`;
