import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Layout from "./component/Layout";
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
