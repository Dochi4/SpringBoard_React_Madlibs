import React from "react";

const MadlibText = ({ result }) => (
  <p>
    There was a {result.color} {result.noun} who loved a {result.adjective}{" "}
    {result.noun2}.
  </p>
);

export default MadlibText;
