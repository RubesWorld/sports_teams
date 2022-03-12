import { useState } from "react";
import "./styles/app.scss";
import data from "./data";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import TeamTabs from "./components/TeamTabs";

export default function App() {
  const [teams, setteams] = useState(data);
  return (
    <div className="App">
      <Header />
      <Searchbar />

      <div className="container">
        {data.map((team, key) => (
          <TeamTabs team={team} index={key} />
        ))}
      </div>
    </div>
  );
}
