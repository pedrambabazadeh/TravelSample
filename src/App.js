import './App.css';
import { themeProvider } from './ThemeContext';
import Nav from './Components/nav/Nav'

function App() {
  return (
    <themeProvider>
    <div className="App">
      <div area-container="main">
        <div className='background-main'>
          <header>
          <Nav></Nav>
          </header>
        </div>
      </div>
    </div>
    </themeProvider>
  );
}

export default App;
