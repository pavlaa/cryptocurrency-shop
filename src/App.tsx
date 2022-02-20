import './App.scss';
import Header from "./components/Header/Header";
import {Routes, Route} from "react-router-dom"
import Login from "./components/Body/Login/Login";
import Coins from "./components/Body/Coins/Coins";
import Wallet from "./components/Body/Coins/Wallet";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="body">
        <Routes>
          <Route path="/" element={<Coins />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/wallet" element={<Wallet />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
