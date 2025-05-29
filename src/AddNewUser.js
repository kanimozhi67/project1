import React, { useState } from "react";

const AddNewUser = ({ userdata, setUserdata, handleSubmit }) => {
  const [issubmit, setIssubmit] = useState(false);
  const [newuserdata, setNewuserdata] = useState({
    id: userdata.length,
    name: "",
    mobileNum: "",
    mailId: "",
    homeAddress: "",
  });
  let postadduser;

  // return ({

  if (issubmit) {
    postadduser = (
      // <div className="adduserpageform">
<div style={modalOverlay}>
          <div style={modalStyle}>
        <h2>Add New User</h2>
        <hr />
        <p>SERIAL NUMBER:{userdata.length + 1}</p>
        <form
          onSubmit={() => {
            handleSubmit(newuserdata, setNewuserdata);
          }}
        >
          <h3>
            NAME:
            <input
              type="text"
              id="name"
              required
              placeholder="Enter your name"
              value={newuserdata.name}
              onChange={(e) => {
                setNewuserdata({ ...newuserdata, name: e.target.value });
              }}
            />
          </h3>
          <h3>
            MOBILE NUMBER:
            <input
              type="tel"
              id="mobileNum"
              required
              placeholder="Enter your mobile number"
              value={newuserdata.mobileNum}
              onChange={(e) => {
                setNewuserdata({ ...newuserdata, mobileNum: e.target.value });
              }}
            />
          </h3>
          <h3>
            MAIL ID:
            <input
              type="email"
              id="mailId"
              required
              placeholder="Enter your mail id"
              value={newuserdata.mailId}
              onChange={(e) => {
                setNewuserdata({ ...newuserdata, mailId: e.target.value });
              }}
            />
          </h3>
          <h3>
            Address:
            <input
              type="text"
              id="homeAddress"
              required
              placeholder="Enter your address"
              value={newuserdata.homeAddress}
              onChange={(e) => {
                setNewuserdata({ ...newuserdata, homeAddress: e.target.value });
              }}
            />
          </h3>
          <br />
          <button
            onClick={() =>
              handleSubmit(newuserdata, setNewuserdata, setIssubmit)
            }
          >
            SUBMIT
          </button>
          <button onClick={() => setIssubmit(false)} style={{ marginLeft: "10px" }}>
                Cancel</button>
        </form>
      </div></div>
    );
  } else {
    postadduser = (
      <div className="adduserpage">
        <button onClick={() => setIssubmit(true)} className="adduserbutton">
          Add User
        </button>
      </div>
    );
  }

  return <>{postadduser}</>;
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

};

const modalStyle = {
  backgroundColor: "blue",
  color: "white",
  padding: "20px",
  borderRadius: "8px",
  minWidth: "300px",
  textAlign: "center",
};

const inputStyle = {
  display: "block",
  width: "100%",
  margin: "10px 0",
  padding: "8px",
};
export default AddNewUser;
