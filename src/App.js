import { useEffect, useState } from "react";
import "./styles/app.scss";
import data from "./data";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import TeamTabs from "./components/TeamTabs";

export default function App() {
  const [teams, setTeams] = useState(data);
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  // const handleRemoveTeams = (item) => {
  //   const updatedTeams = teams.filter((team) => item.id !== team.id);
  //   setTeams(updatedTeams);
  // };

  const searchedTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <Searchbar onChange={handleChange} id="search" value={searchTerm}>
        {" "}
        Searching for: <strong>{searchTerm}</strong>
      </Searchbar>

      <div className="container">
        <TeamTabs team={searchedTeams} />
      </div>
    </div>
  );
}

// const handleRemoveStory = item => {
//   const newStories = stories.filter(
//     story => item.objectID !== story.objectID
//   );

//   setStories(newStories);
// };
