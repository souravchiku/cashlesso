import { useState } from "react";

const SearchTemplate = () => {
  let defaultValue = [
    {
      templateId: "456798",
      templateName: "lorum ipsum",
      templateType: "email",
      createon: "dd-mm-yy",
      status: "active",
      action: (
        <div className="switch">
          <label>
            <i className="material-icons left ">event_note</i>
            <input type="checkbox" checked />
            <span className="lever"></span>
            {/* On */}
          </label>
        </div>
      )
    },
    {
      templateId: "456798",
      templateName: "lorum ipsum",
      templateType: "email",
      createon: "dd-mm-yy",
      status: "active",
      action: (
        <div className="switch">
          <label>
            {/* Off */}
            <i className="material-icons left ">event_note</i>
            <input type="checkbox" checked />
            <span className="lever"></span>
            {/* On */}
          </label>
        </div>
      )
    }
  ];
  const [data, setData] = useState(defaultValue);
  // console.log(data)
  const [templateId, setTemplateId] = useState("");
  const [templateType, setTemplateType] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [status, setStatus] = useState("");
  console.log(templateId, templateType);

  function handleSubmit(e) {
    e.preventDefault();
    let newData = [...data];
    // console.log(newData)
    let bool = false;
    if (status == "active") bool = true;

    let updateData = {
      templateId,
      templateName,
      templateType,
      createon: "dd-mm-yy",
      status,
      action: (
        <div className="switch">
          <label>
            {/* Off */}
            <i className="material-icons left ">event_note</i>
            <input type="checkbox" />
            <span className="lever "></span>
            {/* On */}
          </label>
        </div>
      )
    };
    newData.push(updateData);
    setData(newData);

    console.log(updateData);
  }
  return (
    <div style={{ padding: "80px" }}>
      <h4 style={{ color: "#21094e", paddingLeft: 20 }}> Serach Template </h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div style={{ margin: "25px" }}>
          Template Id:
          <input
            type="text"
            placeholder="Template Id"
            value={templateId}
            onChange={(e) => setTemplateId(e.target.value)}
          />
        </div>
        <div style={{ margin: "25px" }}>
          Template Type:
          <input
            type="text"
            placeholder="Template Type"
            value={templateType}
            onChange={(e) => setTemplateType(e.target.value)}
          />
        </div>
        <div style={{ margin: "25px" }}>
          Template Name:
          <input
            type="text"
            placeholder="Template Name"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
          />
        </div>
        <div style={{ margin: "25px" }}>
          Status:
          <input
            type="text"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button className="waves-effect waves-light btn right"> ADD </button>
      </form>
      <div>
        <table className="">
          <thead>
            <tr>
              <td>
                {" "}
                <b>Template ID </b>
              </td>
              <td>
                {" "}
                <b>Template Name </b>
              </td>
              <td>
                {" "}
                <b>Template Type </b>
              </td>
              <td>
                <b>Created On</b>{" "}
              </td>
              <td>
                <b>Status</b>{" "}
              </td>
              <td>
                <b>Action </b>
              </td>
            </tr>
          </thead>
          {data.map((item, key) => {
            return (
              <tbody>
                <tr key={key}>
                  <td> {item.templateId}</td>
                  <td> {item.templateName}</td>
                  <td> {item.templateType}</td>
                  <td> {item.createon}</td>
                  <td> {item.status}</td>
                  <td> {item.action}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default SearchTemplate;
