// Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: lightgray;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 10px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Button>Cancel</Button>
      <Button>Submit</Button>
    </FooterContainer>
  );
}

export default Footer;
