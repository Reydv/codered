import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ContentMain from "./pages/ContentMain";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-black h-screen text-white">
      <Navbar />
      <div className="min-h-full flex flex-col">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/posts" element={<ContentMain />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
