// Header.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: lightgray;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 10px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Button>Profile</Button>
      <Button>Blog</Button>
    </HeaderContainer>
  );
}

export default Header;
