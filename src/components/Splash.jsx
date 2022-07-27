import { Button } from "@mui/material";

import React from "react";
import Img from "../images/background.jpg";
export default function Splash() {
  return (
    <div>
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "contained",
          position: "fixed",
          height: "100%",
          width: "100%",
        }}
      >
        <img
          style={{ width: "100%", height: "100%", position: "fixed" }}
          src={Img}
        />

        <div align="right" style={{ marginTop: "10px", padding: "20px" }}>
          <Button
            style={{
              position: "sticky",
              zIndex: 2,
              backgroundColor: "#222f3e",
              padding: "10px",
              borderRadius: "10px",
            }}
            variant="contained"
          >
            Go To The Main Page
          </Button>
        </div>
      </div>
    </div>
  );
}
