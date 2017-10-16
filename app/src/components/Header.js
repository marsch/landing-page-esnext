import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    height: 100px;
    width:100%;
    background-color: blue;
`;

class Header extends React.Component {
  render() {
    return <StyledHeader>Header</StyledHeader>
  }
}

export default Header;
