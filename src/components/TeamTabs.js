const TeamTabs = ({ team }) =>
  team.map((team) => (
    <div className="team-tab" key={team.id}>
      <h1>{team.name}</h1>
      <h2>
        {team.city}, {team.state}
      </h2>
      <span>{team.sport}</span>
      <br />
      <button>Favorite</button>
    </div>
  ));

export default TeamTabs;
