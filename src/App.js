import "./App.css";
import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
    </div>
  );
}

export default App;
