import React from "react";

const Loader = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div className="spinner"></div>
      <p>Загрузка...</p>
    </div>
  );
};

export default Loader;