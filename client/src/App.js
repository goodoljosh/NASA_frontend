import Nav  from "./components/Nav";
import './App.css';
import { Outlet } from "react-router-dom";
import HomePage from "./routes/HomePage";

function App() { 
  return (
    <div className="App">
      <header>
        <h2>Welcome! The purpose of this project is to use an API for NASA( National Aeronautics and Space Administration) to format and display information.</h2>

        {/* Creates an error where elements on the homepage are repeated twice */}
        {/* <HomePage /> */}
      </header>
        <Nav />
        <Outlet/>
        <footer>
          
      </footer>
    </div>
  );
}
export default App;
