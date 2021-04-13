import React from 'react';
import Styled from 'styled-components/native';

interface Props{
  background: string
}

const TextInput = Styled.TextInput`
  font-size: 41;
  marginBottom: 20;
  marginTop: 20;
  width: 90%;
`;

export default TextInput;