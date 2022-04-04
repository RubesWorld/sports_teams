const Header = () => (
  <>
    <div className="header">
      <div className="header-container">
        <h1>Fanship Success Index</h1>
        <h2>
          How have your favorite teams fared since 2000? Have you been going to{" "}
          <span className="brady">
            Championship Parades{" "}
            <img src="/images/brady_wasted.jpeg" alt="brady wasted lol" />
          </span>{" "}
          year after year or been bringing out the{" "}
          <span class="brown-paper-bag">
            brown paper bags
            <img
              src="/images/knicks_paper_bags.png"
              alt="Knicks players miserable about their season"
            />
          </span>
          ? Find out by selecting your favorite teams!
        </h2>
      </div>
    </div>
  </>
);

export default Header;
