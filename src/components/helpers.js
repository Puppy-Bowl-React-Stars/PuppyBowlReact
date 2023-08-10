

import React, { useEffect, useState } from "react";

// helpers.js
export async function fetchPlayerById(playerId) {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A/players/${playerId}`
      );
      const data = await response.json();
      if (data.success) {
        return data.data.player;
      } else {
        throw new Error(data.error || "Error fetching player");
      }
    } catch (error) {
      console.error(error);
      throw error; // Re-throw the error for proper error handling
    }
  }
  
  export async function deletePlayerById(playerId) {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A/players/${playerId}`,
        { method: "DELETE" }
      );
      const data = await response.json();
      if (data.success) {
        // Return a success message or indication, not player data
        return data.message || "Player deleted successfully";
      } else {
        throw new Error(data.error || "Error deleting player");
      }
    } catch (error) {
      console.error(error);
      throw error; // Re-throw the error for proper error handling
    }
  }
  
