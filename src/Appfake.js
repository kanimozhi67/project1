import React, { useState } from "react";
import Select from "react-select";

// List of country options (simplified for demo; you can expand this list)
const countryOptions = [
  { value: "United States", label: "United States" },
  { value: "India", label: "India" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "Germany", label: "Germany" },
  { value: "France", label: "France" },
  { value: "Japan", label: "Japan" },
  { value: "Brazil", label: "Brazil" },
  { value: "United Kingdom", label: "United Kingdom" }
];

const Appfake = () => {
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([
    { id: 1, name: "Alice", age: 25, email: "alice@example.com", country: "United States" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com", country: "India" },
    { id: 3, name: "Carol", age: 22, email: "carol@example.com", country: "Canada" },
    { id: 4, name: "David", age: 28, email: "david@example.com", country: "Germany" },
    { id: 5, name: "Emma", age: 27, email: "emma@example.com", country: "France" },
    { id: 6, name: "Frank", age: 31, email: "frank@example.com", country: "Japan" }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", age: "", email: "", country: null });

  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = data.slice(startIndex, endIndex);

  const nextPage = () => {
    if ((currentPage + 1) * rowsPerPage < data.length) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleAddUser = () => {
    if (!newUser.country) {
      alert("Please select a country.");
      return;
    }

    const newId = data.length ? Math.max(...data.map(d => d.id)) + 1 : 1;
    const user = {
      id: newId,
      name: newUser.name,
      age: parseInt(newUser.age, 10),
      email: newUser.email,
      country: newUser.country.value
    };
    setData(prev => [...prev, user]);
    setShowModal(false);
    setNewUser({ name: "", age: "", email: "", country: null });
    setCurrentPage(Math.floor((data.length + 1) / rowsPerPage));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Paginated Table with Add User and Country</h2>
      <button onClick={() => setShowModal(true)}>Add New User</button>

      <table style={{ margin: "20px auto", borderCollapse: "collapse", width: "90%" }}>
        <thead>
          <tr>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Age</th>
            <th style={cellStyle}>Email</th>
            <th style={cellStyle}>Country</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr key={row.id}>
              <td style={cellStyle}>{row.id}</td>
              <td style={cellStyle}>{row.name}</td>
              <td style={cellStyle}>{row.age}</td>
              <td style={cellStyle}>{row.email}</td>
              <td style={cellStyle}>{row.country}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevPage} disabled={currentPage === 0}>Previous</button>
        <button onClick={nextPage} disabled={(currentPage + 1) * rowsPerPage >= data.length}>Next</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={modalOverlay}>
          <div style={modalStyle}>
            <h3>Add New User</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newUser.name}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={newUser.age}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newUser.email}
              onChange={handleInputChange}
              style={inputStyle}
            />
            <Select
              options={countryOptions}
              value={newUser.country}
              onChange={(selected) => setNewUser(prev => ({ ...prev, country: selected }))}
              placeholder="Select Country"
              isSearchable
            />
            <div style={{ marginTop: "10px" }}>
              <button onClick={handleAddUser}>Submit</button>
              <button onClick={() => setShowModal(false)} style={{ marginLeft: "10px" }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const cellStyle = {
  border: "1px solid black",
  padding: "8px"
};

const modalOverlay = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000
};

const modalStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  minWidth: "300px",
  textAlign: "center"
};

const inputStyle = {
  display: "block",
  width: "100%",
  margin: "10px 0",
  padding: "8px"
};

export default Appfake;
