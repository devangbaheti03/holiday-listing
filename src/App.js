import { React } from 'react';
import styled from 'styled-components'
import Header from './Components/Header';
import Drawer from './Components/Drawer';
import Screen from './Components/Screen';

const Artboard = styled.div`
  display: flex;

  color: black;
  flex-direction: column;
`

const DrawerAndScreenContainer = styled.div`
  display: flex;
  flex-direction: row;
`

function App() {
  return (
    <Artboard >
      <Header />
      <DrawerAndScreenContainer>
        <Drawer />
        <Screen />
      </DrawerAndScreenContainer>
    </Artboard>
  );
}

export default App;
