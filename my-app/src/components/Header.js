import React, { Fragment } from "react";
import { Toolbar, Typography, Button } from "@material-ui/core";

export default function Header({ title, sections, setSection }) {
  return (
    <Fragment>
      <Typography
        style={{
          textAlign: "center",
          fontSize: "30px",
          padding: "10px",
          backgroundColor: "rgba(128, 128, 128, 0.22)",
          fontFamily: "initial",
        }}
      >
        {title.toUpperCase()}
      </Typography>
      <Toolbar>
        {sections.map((section) => {
          return (
            <Button
              style={{ textAlign: "center", width: "100%", height: "100%" }}
              value={section.value}
              onClick={() => setSection(section.value)}
            >
              {section.title}
            </Button>
          );
        })}
      </Toolbar>
    </Fragment>
  );
}
