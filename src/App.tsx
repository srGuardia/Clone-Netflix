import React from 'react';
import { Footer } from './Shared/Components/Footer';
import { Header } from './Shared/Components/Header';
import { Main } from './Shared/Components/Main';

import { GlobalStyle } from './Shared/Global/Styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
