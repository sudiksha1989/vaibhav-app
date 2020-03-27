import { bounceInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`${bounceInUp}`;


export const BouncyDiv = styled.li`
  animation: 5s ${bounceAnimation};
  display: inline-block;
`;