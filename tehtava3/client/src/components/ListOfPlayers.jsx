import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Player from "./Player";

export const ListOfPlayers = () => {
  const { players, getPlayers } = useContext(GlobalContext);

  useEffect(() => {
    getPlayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {players.map((player, index) => (
          <div className="col-md-4 mb-3" key={player.id}>
            <h4>Ranking: {index + 1}</h4>
            <Player player={player} />
          </div>
        ))}
      </div>
    </div>
  );
};
