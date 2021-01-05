import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import Header from './components/ui/Header';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;
