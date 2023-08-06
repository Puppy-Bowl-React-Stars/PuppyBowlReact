

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
  
