import React from 'react';
import MainPage from "./main-page/MainPage";
import Header from "./header/Header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import EventListPage from "./event-list-page/EventListPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/events" element={<EventListPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
