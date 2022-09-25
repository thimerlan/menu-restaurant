import React from "react";
import './../App.css';
export const Scroll = (props) => {
  return (
    <>
      <div
	  id="scroll"
        style={{
          marginTop: "67px",
          overflowY: "scroll",
          border: "0px solid #222",
          maxHeight: "1515px",

          // background: "#fff",
        }}
      >
        {props.children}
      </div>
    </>
  );
};
