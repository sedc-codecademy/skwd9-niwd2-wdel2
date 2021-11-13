import "./App.css";
import Header from "./pages/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Todos from "./pages/Todos/Todos";
import TodoDetails from "./pages/Todos/TodoDetails";
import Welcome from "./pages/Welcome/Welcome";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="" element={<Navigate to="/welcome" />} />
            {/* <Route path="/welcome" element={<Welcome />} /> */}
            <Route path="/welcome/*" element={<Welcome />}>
              <Route
                path="new-user"
                element={<p>Welcome to our new web page!</p>}
              />
              <Route
                path="old-user"
                element={<p>Welcome back!</p>}
              />
            </Route>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/todos/:id" element={<TodoDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
