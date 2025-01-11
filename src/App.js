import React, { useState } from "react";

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
        margin: 0,
      }}
    >
      {/* Header Section */}
      <div
        style={{
          width: "100%",
          backgroundColor: "black",
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        <h1
          style={{
            color: "green",
            margin: 0,
            fontSize: "28px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px", // Space between the logo and text
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png"
            alt="Hackerrank Logo"
            style={{ height: "30px", width: "30px" }}
          />
          Item List Manager
        </h1>
      </div>

      {/* Main Content Section */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "300px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Item List</h1>
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addItem}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Add Item
        </button>
        <ul
          style={{
            marginTop: "20px",
            padding: "0",
            listStyleType: "disc",
            textAlign: "left",
          }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                fontSize: "16px",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemListManager;
