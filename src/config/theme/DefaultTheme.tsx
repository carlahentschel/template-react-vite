import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#a3b18a',
    secondary: '#344e41'
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
};

interface DefautThemePros {
  children: React.ReactNode;
}

const DefaultTheme: React.FC<DefautThemePros> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default DefaultTheme;