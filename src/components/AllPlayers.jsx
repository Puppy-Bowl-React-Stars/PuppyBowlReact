import React, { useEffect, useState } from "react";
import fetchAllPlayers from "./ajaxHelpers";
// import SinglePlayer from "./SinglePlayer";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New state to track loading state

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPlayers = await fetchAllPlayers();
        setPlayers(fetchedPlayers);
        setIsLoading(false); // Set loading state to false
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Set loading state to false even if there's an error
      }
    }
    fetchData();
  }, []);

  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  const playerRows = players.map(player => (
    <tr key={player.id} >
      <td>{player.name}</td>
      <td className="images"><img src={player.imageUrl} width="100" height="100"/></td>
      <td><button  className="detailsbutton" onClick={() => {
      navigate(`/players/${player.id}`);
    }}
>details</button></td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {playerRows}</tbody>
    </table>
  );
}
