import React from "react";

const ShowErrors = ({ errors }) => {
  return (
    <div>
      <ul style={{ color: "red", marginLeft: "-20px" }}>
        {errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowErrors;
