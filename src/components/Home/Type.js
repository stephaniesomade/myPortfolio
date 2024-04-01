import React from "react";
import Typewriter from "typewriter-effect";
// Type writer javascript plugin for home page. 

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Junior Software Developer",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
  );
}

export default Type;
