import "./styles.css";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Nav2 from "./components/Nav2";
import Sidenav from "./components/Sidenav";
import SearchTemplate from "./components/SearchTemplate";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <Nav2 />
      {/* <Sidenav /> */}
      {/* <Search /> */}
      <SearchTemplate />
    </div>
  );
}
