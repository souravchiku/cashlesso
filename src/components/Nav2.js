export default function Nav2() {
  return (
    <div>
      <nav className="left white nav2">
        <ul>
          <li grey>
            <a href="sass.html ">CONFIGURATION</a>
          </li>
          <li>
            <a href="badges.html">LOYALITY MANAGEMENT</a>
          </li>
          <li>
            <a href="collapsible.html">
              {" "}
              <i className="material-icons left ">person_outline</i>MANAGE USERS
            </a>
          </li>
          <li>
            <a href="collapsible.html">
              <i className="material-icons left ">group</i>MANAGE MEMBERS
            </a>
          </li>
          <li>
            <a href="collapsible.html">
              <i className="material-icons left ">transfer_within_a_station</i>
              COUPON MANAGEMENT
            </a>
          </li>
          <li style={{ borderBottom: "4px solid #ffd56b", color: "#21094e" }}>
            <a style={{ color: "#21094e" }} href="collapsible.html">
              <i className="material-icons left ">record_voice_over</i>CAMPAIGN
              MANAGEMENT
            </a>
          </li>
          <li>
            <a href="collapsible.html">OTHERS</a>
          </li>
          <li>
            <a href="collapsible.html">ADVISORY</a>
          </li>
          <li>
            <a href="collapsible.html">REPORTS</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
