const TeamTabs = ({ team }) =>
  team.map((team) => (
    <div className="team-tab" key={team.id}>
      <div className="text">
        <h1 className="tab-title">{team.name}</h1>
        <h2 className="tab-sub">
          {team.city}, {team.state}
        </h2>
        <span>{team.sport}</span>
        <br />
        <button className="tab-button">Favorite</button>
      </div>
    </div>
  ));

export default TeamTabs;
