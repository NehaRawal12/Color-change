
import React from 'react';
import ReactProject from './components/reactproject1';
import { ThemeProvider } from './components/reactproject';

const App = () => {
  return (
    <ThemeProvider>
      <ReactProject />
    </ThemeProvider>
  );
}

export default App;