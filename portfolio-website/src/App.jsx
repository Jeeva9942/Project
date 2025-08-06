import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#f59e0b',
    dark: '#1e293b',
    light: '#f8fafc',
    white: '#ffffff',
    gray: '#64748b',
    accent: '#10b981'
  },
  fonts: {
    primary: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif"
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px'
  }
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${props => props.theme.fonts.primary};
    line-height: 1.6;
    color: ${props => props.theme.colors.dark};
    overflow-x: hidden;
  }
  
  section {
    padding: 80px 0;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      padding: 60px 0;
    }
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

const AppWrapper = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.light};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
