import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
// import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/NavBar";

export default function App() {


  return (
    <>
     
     <NavBar />
     <div id="main-section">
     <Routes>
        <Route path='/' element={<AllPlayers/>} />
        {/* <Route path='/players/:id' element={<SinglePlayer />}> */}
    </Routes>
    </div>
    </>
  );
}
