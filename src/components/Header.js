import React from "react";

const Dropdown = ({ options }) => {
  console.log(options);
  return (
    <div className="header">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png"
        alt="bar- icon"

      />
       <h1>Dropdown List</h1>
       <hr/>
    </div>
  );
};

export default Dropdown;
