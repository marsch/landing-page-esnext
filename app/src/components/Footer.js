import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    height: 100px;
    width: 100%;
    background-color: blue;
    top: calc(100vh);
    left: 0;
    background-color: red;
`;

class Footer extends React.Component {
  render() {
    return <StyledFooter>
      iFooter
      </StyledFooter>
  }
}
export default Footer;
