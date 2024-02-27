import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NotelistPage from "./pages/NotelistPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotePage from "./pages/NotePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact Component={NotelistPage}></Route>
            <Route path="/note/:id" Component={NotePage}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
