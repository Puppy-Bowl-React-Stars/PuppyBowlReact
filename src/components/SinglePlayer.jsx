import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlayerById } from "./helpers";

export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPlayer = await fetchPlayerById(id);
        setPlayer(fetchedPlayer);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  if (!player) {
    return <div>Loading player details...</div>;
  }

  return (
      <table>
      <thead>
        <tr>
          <th>Player Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
      <td>Name: {player.name}</td>
      <td>Status: {player.status}</td>
      <td>Breed: {player.breed}</td>
      <td className="images"><img src={player.imageUrl} width="100" height="100"/></td>
      </tr>
     </tbody>
    </table>

  );
}
