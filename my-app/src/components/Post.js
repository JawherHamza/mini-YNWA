import React, { Fragment } from "react";
import { CardContent, Typography, Card } from "@material-ui/core";

export default function Post({ post }) {
  return (
    <Fragment>
      <Card style={{ padding: "8px", margin: "5px" }}>
        <CardContent>
          <Typography>Description : {post.desc}</Typography>
          <Typography>Phone Number : {post.phoneNumber}</Typography>
          <Typography>Location : {post.location}</Typography>
          <Typography>Section : {post.section}</Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
}
