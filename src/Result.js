import React from "react";
import Meaning from "./Meaning";

import "./Result.css";

export default function Result(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Results">
        <h2> {props.result.word} </h2>

        {props.result.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meaning meaning={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
