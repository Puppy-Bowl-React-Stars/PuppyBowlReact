

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
