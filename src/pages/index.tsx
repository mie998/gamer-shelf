import { Text } from '@chakra-ui/react';

import { Container } from '../components/Container';
import { Main } from '../components/Main';
// import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer';

const Index = () => (
  <Container height="100vh">
    <Header />
    <Main></Main>
    {/* <DarkModeSwitch /> */}
    <Footer>
      <Text>© Keisuke Nishiwaki</Text>
    </Footer>
  </Container>
);

export default Index;
