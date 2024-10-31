import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchData } from './store/actions';
import { AppDispatch } from './store/store';
import Characters from './components/Characters';
import CreateCharacter from './components/CreateCharacter';
import SaveCharacters from './components/SaveCharacters';


function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - n0ne</h1>
        <div style={{ display: "flex" }}>
          <CreateCharacter />
          <SaveCharacters />
        </div>

      </header>
      <section className="App-section">
        <Characters />
      </section>
    </div>
  );
}

export default App;
