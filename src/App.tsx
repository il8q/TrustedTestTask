import React from 'react';
import MainPage from "./main-page/MainPage";
import Header from "./header/Header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import EventList from "./event-list-page/EventList";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/events" element={<EventList />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
