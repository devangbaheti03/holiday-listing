import { React } from 'react';
import styled from 'styled-components'
import Header from './Components/Header';
import Drawer from './Components/Drawer';

<style>
  @import
  url('https://fonts.googleapis.com/css2?famil
  y=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;
  1,500;1,700&display=swap');
</style>


const Artboard = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #F7F7FA;
  color: black;
  flex-direction: column;
`

const DrawerAndScreenContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Screen = styled.div`
  display: flex;
  height:80vh;
  width:90vw;
  flex-direction: row;
  background-color: #FFFFFF;
  margin-right: 59px;
  margin-bottom: 50px;
  border-radius: 10px;
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
