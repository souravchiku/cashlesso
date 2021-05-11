import Serach from "./Search";

const Sidenav = () => {
  return (
    <>
      <div className="side">
        <div>
          <div className="content" style={{ color: "#ffd56b" }}>
            {" "}
            <i className="material-icons right tt">expand_less</i>Template
            Management{" "}
          </div>
          <div
            className="contentItem"
            style={{ borderLeft: "3px solid #ffd56b" }}
          >
            View Template
          </div>
          <div className="contentItem">Create Template</div>
          <div className="content" style={{ color: "#ffd56b" }}>
            <i className="material-icons right tt">expand_more</i>Customer
            Segment Management{" "}
          </div>
          <div className="content" style={{ color: "#ffd56b" }}>
            <i className="material-icons right tt">expand_more</i>Manage
            Campaigns{" "}
          </div>
        </div>
        <Serach />
      </div>
    </>
  );
};

export default Sidenav;
