import './App.css';

var secrets = JSON.parse(process.env.REACT_APP_SECRET);

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>Environment Variable: {process.env.REACT_APP_ENV}</p>
        <p>Secret Variable: {secrets.Secret1}</p>
      </header>
    </div>
  );
}

export default App;
