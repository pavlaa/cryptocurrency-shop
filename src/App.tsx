import './App.scss';
import Header from "./components/Header/Header";
import {Routes, Route} from "react-router-dom"
import Login from "./components/Body/Login/Login";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="body _container">
        <Routes>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
