/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

import GlobalStyle from '../styles/GlobalStyle';

import Head from 'next/head';

import ScreenLayout from '../src/components/main/ScreenLayout';
import ContentLayout from '../src/components/main/ContentLayout';
import Navbar from '../src/components/main/Navbar';
import FooterBar from '../src/components/main/Footerbar';

const MARGIN = styled.div`
  height: 100px;
`;

const App = ({ Component, pageProps }) => {
  return (
    <ScreenLayout>
      <Global styles={GlobalStyle} />

      <Navbar />

      <ContentLayout>
        <MARGIN />
        <Component {...pageProps} />
        <FooterBar />
      </ContentLayout>
    </ScreenLayout>
  );
};

export default App;
