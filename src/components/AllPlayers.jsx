// import React, { useEffect, useState } from "react";
// import fetchAllPlayers from "./ajaxHelpers";
// import { useNavigate } from "react-router-dom";

// export default function AllPlayers() {
//   const [players, setPlayers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // New state to track loading state

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const fetchedPlayers = await fetchAllPlayers();
//         setPlayers(fetchedPlayers);
//         setIsLoading(false); // Set loading state to false
//       } catch (error) {
//         console.error(error);
//         setIsLoading(false); // Set loading state to false even if there's an error
//       }
//     }
//     fetchData();
//   }, []);

//   const navigate = useNavigate();

//   if (isLoading) {
//     return <div>Loading...</div>; // Display loading message while fetching data
//   }

//   const playerRows = players.map(player => (
//     <tr key={player.id} >
//       <td>{player.name}</td>
//       <td className="images"><img src={player.imageUrl} width="100" height="100"/></td>
//       <td><button  className="detailsbutton" onClick={() => {
//       navigate(`/players/${player.id}`);
//     }}
// >details</button></td>
//     </tr>
//   ));

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Image</th>
//         </tr>
//       </thead>
//       <tbody>
//         {playerRows}</tbody>
//     </table>
//   );
// }

import React, { useEffect, useState } from "react";
import fetchAllPlayers from "./ajaxhelpers";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]); // New state for filtered players
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPlayers = await fetchAllPlayers();
        setPlayers(fetchedPlayers);
        setFilteredPlayers(fetchedPlayers); // Initialize filtered players with all players
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    const filtered = players.filter((player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const playerRows = filteredPlayers.map((player) => (
    <tr className="allplayers" key={player.id}>
      
      <td className="images">
        <img src={player.imageUrl} alt={player.name} width="200" />
      </td>
      <td className="name">{player.name}</td>
      <td>
        <button
          className="details"
          onClick={() => {
            navigate(`/players/${player.id}`);
          }}
        >
          details
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <table>
        <thead>
          
          <tr>
          </tr>
        </thead>
        <tbody>{playerRows}</tbody>
      </table>
    </div>
  );
}
