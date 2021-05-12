import "./styles.css";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Nav2 from "./components/Nav2";
import Sidenav from "./components/Sidenav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Configuration from "./components/Configuration";
import SearchTemplate from "./components/SearchTemplate";
import Coupon from "./components/Coupon";
import Loyality from "./components/Loyality";
import Managemember from "./components/Managemember";
import Manageuser from "./components/Manageuser";
import Others from "./components/Others";
import Advisory from "./components/Advisory";
import Reports from "./components/Reports";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Nav2 />
        <Route exact path="/">
          <Sidenav />
        </Route>
        <Route path="/config">
          <Configuration />
        </Route>

        <Route path="/loyality">
          <Loyality />
        </Route>

        <Route path="/manageuser">
          <Manageuser />
        </Route>

        <Route path="/managemember">
          <Managemember />
        </Route>

        <Route path="/coupon">
          <Coupon />
        </Route>

        <Route path="/others">
          <Others />
        </Route>

        <Route path="/advisory">
          <Advisory />
        </Route>

        <Route path="/reports">
          <Reports />
        </Route>

        <Route path="/campaign">
          <SearchTemplate />
        </Route>
        {/* <Sidenav /> */}
        {/* <Search /> */}
      </BrowserRouter>
    </div>
  );
}
