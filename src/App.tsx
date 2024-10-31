import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './store/actions';
import { AppDispatch } from './store/store';
import Characters from './components/Characters';
import CreateCharacter from './components/CreateCharacter';
import SaveCharacters from './components/SaveCharacters';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const Section = styled.section`
  flex: 1 1 0;
  background-color: hsl(220deg 13% 13%);
  color: white;
`;


function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <AppContainer>
      <Header>
        <h1>React Coding Exercise - n0ne</h1>
        <FlexContainer>
          <CreateCharacter />
          <SaveCharacters />
        </FlexContainer>
      </Header>
      <Section>
        <Characters />
      </Section>
    </AppContainer>
  );
}

export default App;
