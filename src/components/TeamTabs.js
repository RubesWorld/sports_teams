const TeamTabs = ({ team }) => (
  <div className="team-tab">
    <h1>{team.name}</h1>
    <h2>
      {team.city}, {team.state}
    </h2>
    <span>{team.sport}</span>
    <br />
    <button>Favorite</button>
  </div>
);

export default TeamTabs;
