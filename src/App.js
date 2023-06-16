import "./App.css";
import Question from "./components/questions/question";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h2>Home</h2>
        <h2>Log-in</h2>
        <h2>Sign-up</h2>
      </nav>
      <h1>Denumirea</h1>
      <Question></Question>
    </div>
  );
}

export default App;
