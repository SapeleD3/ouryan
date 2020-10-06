import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 4em;
  display: flex;
  background: #d7e3f0;
  overflow: hidden;
  flex: 1;
  height: 100vh;
  width: 100vw;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.h1`
  text-align: center;
  font-size: 2.5em;
  font-weight: bold;
  font-family: 'Comfortaa', cursive;
`;

export default function NotFound() {
  return (
    <Wrapper>
      <Text>404</Text>
      <Text>Page Not Found</Text>
    </Wrapper>
  );
}
