import React from 'react';
import Styled from 'styled-components/native';

interface Props{
  background: string
}

const Container = Styled.View`
  flex: 1;
  background-color: ${(p:Props) => p.background};
  align-items: center;
  justify-content: center;
`;

export default Container;