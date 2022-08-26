import React from "react";

function Logo(props) {
  return (
    <div
      style={{
        padding: "8px",
        height: "50px",
        boxSizing: "border-box",
        borderRadius: "20px",
      }}
    >
      <img
        style={{ height: "100%" }}
        src="https://img.freepik.com/premium-vector/burger-vector-illustration-fast-food-logo_605910-34.jpg?w=2000"
      />
    </div>
  );
}

export default Logo;
