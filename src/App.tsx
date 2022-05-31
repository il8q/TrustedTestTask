import React from 'react';
import MainPage from "./main-page/MainPage";
import Header from "./header/Header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/events" element={<h1>Здесь должны быть события</h1>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
