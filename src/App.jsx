import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";
import Home from "./components/home"

export default function App() {


  return (
    <>
     
     <NavBar />
     <div id="main-section">
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/allplayers' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SinglePlayer />} />
        <Route path='/playerform' element={<NewPlayerForm />} />
    </Routes>
    </div>
    </>
  );
}
