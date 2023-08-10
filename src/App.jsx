// import "./App.css";
// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import AllPlayers from "./components/AllPlayers";
// import SinglePlayer from "./components/SinglePlayer";
// import NewPlayerForm from "./components/NewPlayerForm";
// import NavBar from "./components/NavBar";
// import Home from "./components/home";
// import SearchBar from "./components/Search";


// export default function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [players, setPlayers] = useState([]); // Initialize as an empty array

//   useEffect(() => {
//     async function fetchPlayersData() {
//       try {
//         const response = await fetch(
//           'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A/players'
//         );
//         const data = await response.json();
//         setPlayers(data.players);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchPlayersData();
//   }, []);

//   const handleSearch = (term) => {
//     setSearchTerm(term); // Update the search term in the state
//   };

//   // Filter players based on the search term
//   const filteredPlayers = players.filter((player) =>
//     player.name.includes(searchTerm) || player.breed.includes(searchTerm)
//   );


//   return (
//     <>
//       <NavBar />
//       <div id="main-section">
//         <div className="App">
//         <SearchBar onSearch={handleSearch} />
//         </div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/allplayers"
//             element={<AllPlayers players={filteredPlayers} />}
//           />
//           <Route path="/players/:id" element={<SinglePlayer />} />
//           <Route path="/playerform" element={<NewPlayerForm />} />
//         </Routes>
//       </div>
//     </>
//   );
// }


import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";
import Home from "./components/home";


export default function App() {
  return (
    <>
    <div className="main-section">
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allplayers" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/playerform" element={<NewPlayerForm />} />
      </Routes>
    </div>
    </>
  );
}