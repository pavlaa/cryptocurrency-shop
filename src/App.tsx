import './App.scss';
import Header from "./components/Header/Header";
import {Routes, Route} from "react-router-dom"
import Login from "./components/Body/Login/Login";
import Coins from "./components/Body/Coins/Coins";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="body">
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/coins" element={<Coins />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
