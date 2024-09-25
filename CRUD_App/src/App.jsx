import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="w-50" style={{ maxWidth: "500px" }}>
        <GlobalProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddUser />} />
              <Route path="/edit/:id" element={<EditUser />} />
              <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>
          </Router>
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
