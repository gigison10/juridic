import "./App.css";
import Question from "./components/questions/question";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">Logo</div>
        <div className="navbar-menu">
          <a href="#" className="navbar-menu-item">
            Name
          </a>
          <a href="#" className="navbar-menu-item">
            About
          </a>
          <a href="#" className="navbar-menu-item">
            Log-In
          </a>
          <a href="#" className="navbar-menu-item">
            Sign-Up
          </a>
        </div>
      </nav>
      <Question></Question>
    </div>
  );
}

export default App;
