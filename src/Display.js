import React, { useState } from "react";
import Edit from "./Edit";
import AddNewUser from "./AddNewUser";
import { Routes, Route, Link } from "react-router-dom";
import Searchlist from "./Searchlist";
import Showdata from "./Showdata";

const Display = ({
  userdata,
  searchresult,
  setUserdata,
  searchbox,
  setSearchbox,
  handleSubmit,
  handleDelete,
  handleChange,
}) => {
  
let postdisplay;
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = searchresult.slice(startIndex, endIndex);
  const nextPage = () => {
    if ((currentPage + 1) * rowsPerPage < searchresult.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  postdisplay = (
    <>
      <div>
        <table>
          <caption>
            <h3>USER DETAILS</h3>
            <hr />
            <br />
            <span className="adduserlink">
              <Searchlist searchbox={searchbox} setSearchbox={setSearchbox} />

              <AddNewUser
                userdata={userdata}
                setUserdata={setUserdata}
                handleSubmit={handleSubmit}
                key={userdata.id}
              />
            </span>
          </caption>
          <thead>
            <th>SERIAL NUMBER</th>
            <th>NAME</th>
            <th>MOBILE NUMBER</th>
            <th>MAIL ID</th>
            <th>ADDRESS</th>
            <th>CHANGE DETAILS</th>
          </thead>

          {currentRows.map(function (data) {
            return (
              <>
                <tr key={data.id}>
                  <td> {data.id} </td>
                  <td> {data.name} </td>
                  <td> {data.mobileNum} </td>
                  <td> {data.mailId} </td>
                  <td> {data.homeAddress} </td>

                  <td>
                    <Edit data={data} handleChange={handleChange} />

                    <button onClick={() => handleDelete(data.id)}>
                      DELETE
                    </button>
                  </td>
                </tr>
              </>
            );
          })}

         
        </table>
      </div>
      <div style={{ marginTop: "20px" }} >
        <button onClick={prevPage} disabled={currentPage === 0} className="limits">
          Previous
        </button>
        <button className="limits" 
          onClick={nextPage}
          disabled={(currentPage + 1) * rowsPerPage >= searchresult.length}
        >
          Next
        </button>
      </div>
    </>
  );
  return <>{postdisplay}</>;
};

export default Display;
