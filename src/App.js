import "./App.css";
import { useEffect, useState } from "react";
import Edit from "./Edit";
import AddNewUser from "./AddNewUser";
import { Routes, Route, Link } from "react-router-dom";
import Display from "./Display";

function App() {
  const userInit = [
    {
      id: 1,
      name: "John",
      mobileNum: 1234567891,
      mailId: "john@gmail.com",
      homeAddress: "Newyork",
    },
    {
      id: 2,
      name: "Lyn",
      mobileNum: 2234567891,
      mailId: "lyn@gmail.com",
      homeAddress: "LosAngels",
    },
    {
      id: 3,
      name: "sam",
      mobileNum: 3234567891,
      mailId: "sam@gmail.com",
      homeAddress: "Washington",
    },
    {
      id: 4,
      name: "kayte",
      mobileNum: 4234567891,
      mailId: "kayte@gmail.com",
      homeAddress: "Florida",
    },
    {
      id: 5,
      name: "George",
      mobileNum: 5234567891,
      mailId: "george@gmail.com",
      homeAddress: "Wales",
    },
    {
      id: 6,
      name: "khan",
      mobileNum: 6234567891,
      mailId: "khan@gmail.com",
      homeAddress: "Newyork",
    },
    {
      id: 7,
      name: "Rose",
      mobileNum: 7234567891,
      mailId: "rose@gmail.com",
      homeAddress: "LosAngels",
    },
    {
      id: 8,
      name: "Kit",
      mobileNum: 8234567891,
      mailId: "kit@gmail.com",
      homeAddress: "Washington",
    },
    {
      id: 9,
      name: "Bell",
      mobileNum: 9234567891,
      mailId: "bell@gmail.com",
      homeAddress: "Florida",
    },
    {
      id: 10,
      name: "Hanah",
      mobileNum: 1034567891,
      mailId: "hanah@gmail.com",
      homeAddress: "Wales",
    },
  ];
  const [userdata, setUserdata] = useState(userInit);
  const [searchbox, setSearchbox] = useState("");
  const [searchresult, setSearchresult] = useState([]);

  useEffect(() => {
    const filteredsearch = userdata.filter(
      (data) =>
        data.name.toLowerCase().includes(searchbox.toLowerCase()) ||
        data.mailId.toLowerCase().includes(searchbox.toLowerCase()) ||
        data.homeAddress.toLowerCase().includes(searchbox.toLowerCase())
    );
    setSearchresult(filteredsearch);
  }, [userdata, searchbox]);

  function handleChange(newdata) {
    setUserdata(
      userdata.map((t) => {
        if (t.id === newdata.id) return newdata;
        else return t;
      })
    );
  }

  function handleSubmit(newuserdata, setNewuserdata, setIssubmit) {
    // e.preventDefault();
    newuserdata.id++;
    //console.log("a="+a);
    const addPosts = [...userdata, newuserdata];
    setUserdata(addPosts);
    // setIssubmit(false);
    setNewuserdata({ ...newuserdata, name: "hty" });
    setNewuserdata({ ...newuserdata, mobileNum: "" });
    setNewuserdata({ ...newuserdata, mailId: "" });
    setNewuserdata({ ...newuserdata, homeAddress: "" });
    setIssubmit(false);
  }

  function handleDelete(dataid) {
    setUserdata(userdata.filter((d) => d.id !== dataid));
  }

  return (
    <div className="App">
      <div>
        <hr />

        <Display
          userdata={userdata}
          searchresult={searchresult}
          setUserdata={setUserdata}
          searchbox={searchbox}
          setSearchbox={setSearchbox}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          handleChange={handleChange}
        />
        <br />
      </div>
    </div>
  );
}

export default App;
