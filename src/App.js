import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Manchester" />
        <footer>
          This project was coded by Harriett Sykes and is
          <a
            href="https://github.com/hrrttsyks/react-weather-app-final-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
