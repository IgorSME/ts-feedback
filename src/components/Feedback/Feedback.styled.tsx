import { IButtonFeedback } from '../../types/appTypes';
import styled from '@emotion/styled';

export const Button = styled.button<IButtonFeedback>`
  margin: 5px;
  padding: 5px;
  box-shadow: 2px 2px 2px red;
`;
