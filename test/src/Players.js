import React from "react";

const Players = props => {
  if (props.players.length === 0) {
    return <p>No players found</p>;
  }

  return (
    <>
      {props.players.map(player => (
        <div key={player.id} data-testid="player">
          {player.name}
        </div>
      ))}
    </>
  );
};

export default Players;
