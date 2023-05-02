import Nav  from "./components/Nav";
import './App.css';
import { Outlet } from "react-router-dom";
import HomePage from "./routes/HomePage";

function App() { 
  return (
    <div className="App">
      <header>
        <h1>Nasa API Project</h1>
        <HomePage />
      </header>
        <Nav />
        <Outlet/>
        <footer>
          
      </footer>
    </div>
  );
}
export default App;
