import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ContentMain from "./pages/ContentMain";
import ContentComunity from "./pages/ContentComunity";
import Navbar from "./components/Navbar";
import Aturan from "./pages/Aturan";
import Post from "./pages/Post";

function App() {
  return (
    <div className="bg-black h-screen text-white">
      <Navbar />
      <div className="min-h-full">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/posts" element={<ContentMain />} />
            <Route path="/comunity" element={<ContentComunity />} />
            <Route path="/aturan" element={<Aturan />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
