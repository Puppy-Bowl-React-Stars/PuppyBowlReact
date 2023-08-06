import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPlayerById, deletePlayerById } from "./helpers";

export default function SinglePlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);
  const [isFetched, setIsFetched] = useState(false); // Track fetched status

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPlayer = await fetchPlayerById(id);
        setPlayer(fetchedPlayer);
        setIsFetched(true); // Mark player data as fetched
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  async function handleDeleteClick() {
    if (!isFetched) {
      return; // Exit if player data is not yet fetched
    }

    try {
      await deletePlayerById(id);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  if (!player || !isFetched) {
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
          <td className="images">
            <img src={player.imageUrl} width="100" height="100" />
          </td>
          <td>
            <button className="deletebutton" onClick={handleDeleteClick}>
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
