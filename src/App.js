import { Outlet } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return <div className="App">
   <Header />
    <Outlet />
    <Footer />
  </div>;
}

export default App;
