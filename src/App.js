import { Route, Routes } from "react-router-dom"; // Router는 import하지 않음
import Home from "./routes/Home";
import Detail from "./routes/Details";

function App() {
  return (
    <Routes> {/* HashRouter로 감싸져 있으므로 Router는 필요 없음 */}
      <Route path="/hello" element={<h1>Hello</h1>} />
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;