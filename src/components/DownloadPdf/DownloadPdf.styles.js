import styled from 'styled-components';
import { Spinner8 } from '@styled-icons/icomoon/Spinner8';
import { animations } from '../../GlobalStyles';

export const Spinner = styled(Spinner8)`
  animation: ${animations.rotate} 1s linear infinite;
  margin-left: 0.5em;
`;
