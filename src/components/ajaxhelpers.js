

export default function fetchAllPlayers() {
  return fetch(
    "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A/players"
  )
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        return data.data.players; // Extract the players array
      } else {
        throw new Error(data.error || "Error fetching players");
      }
    })
    .catch(error => {
      console.error("Error fetching players:", error);
    });
}

// export function fetchSinglePlayerById = async (playerId) => {
//     try {
//       const response = await fetch(`${APIURL}/${playerId}`);
//       const responseJson = await response.json();
//       // console.log(responseJson);
//       const player = responseJson.data.player;
//       return player;
//     } catch (err) {
//       console.error(`Oh no, trouble fetching player!`, err);
//     }
//   };