import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import styled, { ThemeProvider } from 'styled-components'
import defaultTheme from './themes/default'

import './themes/global-styles'

const StyledApp = styled.div`
`
class App extends React.Component {
  static displayName: "App"


  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
      <StyledApp>
      <Header />
      <Footer />
      </StyledApp>
      </ThemeProvider>
   )
  }
}

export default App
