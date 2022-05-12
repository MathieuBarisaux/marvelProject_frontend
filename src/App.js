import "./App.scss";

// ** Dependencies **
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ** Components **
import Header from "./components/Header/Header";

// ** Containers **
import Home from "./containers/Home/Home";
import Characters from "./containers/Characters/Characters";
import Comics from "./containers/Comics/Comics";
import Character from "./containers/Character/Character";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/character/:characterId" element={<Character />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
