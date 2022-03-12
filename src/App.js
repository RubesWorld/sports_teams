import { useState } from "react";
import "./styles/app.scss";
import data from "./data";

export default function App() {
  const [teams, setteams] = useState(data);
  return (
    <div className="App">
      <h1>California Sports Teams </h1>
      <h2>
        California has the most sports teams from any state. See your favorite
        below!
      </h2>

      <label htmlFor="search">Search your favorite team: </label>
      <input type="text" id="search" />

      <div className="container">
        <div className="team-tab">
          {data.map((team, key) => (
            <div index={key}>
              <h1>{team.name}</h1>
              <h2>
                {team.city}, {team.state}
              </h2>
              <span>{team.sport}</span>
              <br />
              <button>Favorite</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
