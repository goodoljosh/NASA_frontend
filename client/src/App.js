import Nav  from "./components/Nav";
import './App.css';
import { Outlet } from "react-router-dom";

function App() { 
  return (
    <div className="App">
      <header>
        <h1>NASA API Project</h1>
      </header>
        <Nav />
        <Outlet/>
        <footer>
          
      </footer>
    </div>
  );
}
export default App;

