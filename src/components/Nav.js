import { Link } from "react-router-dom";
import Nav2 from "./Nav2";
import SerachTemplate from "./SearchTemplate";
export default function Nav() {
  return (
    <div>
      <nav style={{ height: "40px" }}>
        <div className="nav-wrapper #7b1fa2 purple darken-2 ">
          <div className=" logo left #6a1b9a purple darken-3">
            <Link to="/">CLUB APPAREL</Link>
          </div>

          <ul className="right">
            <li>
              <a href="sass.html" className="account">
                <i className="material-icons left ">account_circle</i>
                <i className="material-icons right ">expand_more</i>John Doe
              </a>
            </li>
            <li>
              <a href="badges.html" className="account">
                <i className="material-icons left">input</i>Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <Nav2 /> */}
      {/* <SerachTemplate /> */}
    </div>
  );
}
