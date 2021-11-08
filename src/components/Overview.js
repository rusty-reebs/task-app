// Overview.js

import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <p key={task.id}>
            {task.number} {task.text}
          </p>
        );
      })}
    </ul>
  );
};

export default Overview;
