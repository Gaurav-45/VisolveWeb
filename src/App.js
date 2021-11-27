import React from 'react';
import Scan from "./Components/Scan"
import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import Solve from './Components/Solve';
import Graph from './Components/Graph';
import "./App.css"

const App = () => {
  return (
    <div className="home">
      <Router>
        <Routes>
          <Route path="/solve" element={<Solve/>}></Route>
          <Route path="/vis" element={<Graph/>}></Route>
          <Route path="/" element={<Scan/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;