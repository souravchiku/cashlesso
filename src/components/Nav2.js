import { Link } from "react-router-dom";

export default function Nav2() {
  return (
    <div>
      <nav className="left white nav2">
        <ul>
          <li grey>
            <Link to="/config">CONFIGURATION</Link>
          </li>
          <li>
            <Link to="/loyality">LOYALITY MANAGEMENT</Link>
          </li>
          <li>
            <Link to="/manageuser">
              {" "}
              <i className="material-icons left ">person_outline</i>MANAGE USERS
            </Link>
          </li>
          <li>
            <Link to="/managemember">
              <i className="material-icons left ">group</i>MANAGE MEMBERS
            </Link>
          </li>
          <li>
            <Link to="/coupon">
              <i className="material-icons left ">transfer_within_a_station</i>
              COUPON MANAGEMENT
            </Link>
          </li>
          <li style={{ borderBottom: "4px solid #ffd56b", color: "#21094e" }}>
            <Link style={{ color: "#21094e" }} to="/campaign">
              <i className="material-icons left ">record_voice_over</i>CAMPAIGN
              MANAGEMENT
            </Link>
          </li>
          <li>
            <Link to="/others">OTHERS</Link>
          </li>
          <li>
            <Link to="/advisory">ADVISORY</Link>
          </li>
          <li>
            <Link to="/reports">REPORTS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
