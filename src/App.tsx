// App.tsx
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
`;

const Side = styled.div`
  flex: 1;
  padding: 10px;
`;
const Middle = styled.div`
  flex: 2;
  padding: 10px;
  width: 60vh;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Side/>
        <Middle>
          <Card size="small" >
            s
          </Card>
          <Card size="small" >
            d
          </Card>
          <Card size="medium" >
            d
          </Card>
          <Card size="large">
            d
          </Card>
        </Middle>
        <Side/>
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
