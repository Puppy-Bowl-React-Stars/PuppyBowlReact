
import { useEffect, useState } from "react";
import fetchAllPlayers from "./ajaxHelpers";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPlayers = await fetchAllPlayers();
        setPlayers(fetchedPlayers);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const playerRows = players.map(player => (
    <tr key={player.id}>
      <td>{player.name}</td>
      <td>{player.breed}</td>
      <td>{player.status}</td>
      <div className="images"><img src={player.imageUrl} width="100" height="100"/></div>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Status</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>{playerRows}</tbody>
    </table>
  );
}
