import './App.css';

const reactAppVariable = process.env.REACT_APP_ENV;
const secrets = JSON.parse(process.env.REACT_APP_SECRET) || "None";
const amplifyEnvironmentVariable = process.env.REACT_APP_AMPLIFY_VAR;
const ssmEnvironmentVariable = process.env.REACT_APP_SSM_VAR;

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>Environment Variable: {reactAppVariable}</p>
        <p>Secret Variable: {secrets.Secret1}</p>
        <p>Amplify Environment Variable: {amplifyEnvironmentVariable}</p>
        <p>SSM Parameter: {ssmEnvironmentVariable}</p>
      </header>
    </div>
  );
}

export default App;
