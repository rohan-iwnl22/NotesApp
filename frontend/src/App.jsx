import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NotelistPage from "./pages/NotelistPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header></Header>
        <NotelistPage></NotelistPage>
      </div>
    </>
  );
}

export default App;
