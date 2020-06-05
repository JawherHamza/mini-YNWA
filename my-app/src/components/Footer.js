import React from "react";

export default function Footer({}) {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "rgba(128, 128, 128, 0.22)",
        fontWeight: "100",
        padding: "10px",
        fontFamily: "initial",
      }}
    >
      <h2>You'll Never Walk Alone</h2>
      <h4>Welcome to our Website </h4>
      <h5>Copyright {new Date().getFullYear()}</h5>
    </div>
  );
}
