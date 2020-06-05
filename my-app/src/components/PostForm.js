import React, { useState, useEffect } from "react";
import { TextField, Button, Select, MenuItem, InputLabel } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Axios from "axios";

export default function PostForm({ setPosts, posts, sections }) {
  const [state, setState] = useState({ desc: "", phoneNumber: "", section: "", location: "" });

  let handleChange = (evt) => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value,
    });
  };

  //THIS IS NOT NEEDED AS WE'RE ADDING THE NEW ADDED POST TO OUR POSTS AFTER CREATION //=>>>> setPosts([...posts, res.data]) L:27

  // useEffect(() => {}, [posts]);

  let addPost = (state) => {
    Axios.post("http://localhost:8080/post", { ...state })
      .then((res) => {
        //simple solution to notify about the existing phone number
        if (res.data.message) {
          alert(res.data.message);
        } else setPosts([...posts, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ padding: "10px", backgroundColor: "rgba(128, 128, 128, 0.22)" }}>
      <TextField
        style={{
          margin: "10px",
        }}
        label="Description"
        name="desc"
        value={state.desc}
        onChange={handleChange}
      />
      <TextField
        style={{
          margin: "10px",
        }}
        label="Phone Number"
        name="phoneNumber"
        value={state.phoneNumber}
        onChange={handleChange}
      />
      <TextField
        style={{
          margin: "10px",
        }}
        label="Location"
        name="location"
        value={state.location}
        onChange={handleChange}
      />
      <br></br>
      <InputLabel
        style={{
          margin: "10px",
        }}
        id="demo-simple-select-required-label"
      >
        Section
      </InputLabel>
      <Select
        style={{
          margin: "0 10px",
        }}
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={state.section}
        name="section"
        onChange={handleChange}
      >
        {sections.map((sec) => (
          <MenuItem value={sec.value}>{sec.title}</MenuItem>
        ))}
      </Select>
      <br></br>
      <br></br>
      <Button variant="contained" color="primary" size="small" startIcon={<SaveIcon />} onClick={() => addPost(state)}>
        Save
      </Button>
    </div>
  );
}
