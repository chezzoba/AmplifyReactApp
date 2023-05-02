import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Environment Variable: {process.env.REACT_APP_ENV}</p>
        <p>Secret Variable: {process.env.REACT_APP_SECRET}</p>
      </header>
    </div>
  );
}

export default App;
