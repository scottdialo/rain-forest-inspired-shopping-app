import "./styles.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
