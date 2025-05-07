import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FlashcardList from "./component/Flashcard/FlashcardList";
import Document from "./component/document/Document";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlashcardList />} />
          <Route path="/document/:id" element={<Document />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
