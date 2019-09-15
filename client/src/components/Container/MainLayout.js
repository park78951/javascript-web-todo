import React from 'react';
import styled from 'styled-components';

const MainContentsWrapper = styled.div`
  min-height: 300px;
  color: #05386b;
`

const MainLayout = ({ children }) => {
  return (
    <MainContentsWrapper>
      { children }
    </MainContentsWrapper>
  );
}

export default MainLayout;
