import React from 'react';
import styled from 'styled-components';

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  font-size: 1.2rem;
  height: 300px;
`

const About = () => {
  return (
    <ContentsWrapper>
      <p>@ This is made as a toy project for React Hooks</p>
      <p>Tech: [React Hooks] [Context API], [Reducer], [React Router]</p>
    </ContentsWrapper>
  );
}

export default About;