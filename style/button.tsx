import React from 'react';
import { ButtonProps } from 'react-native';
import Styled from 'styled-components/native';
import {PRIMARY_COLOR} from '../redux/constants'

interface Props{
  isDisabled: boolean
}

const Button= Styled.TouchableOpacity`
  backgroundColor: ${(p:Props) => p.isDisabled ? 'grey' : PRIMARY_COLOR};
  color: white;
  width: 90%;
  height: 40;
  align-items: center;
  justify-content: center;
  border-radius: 10;
  margin-top: 20;
`;

export default Button;