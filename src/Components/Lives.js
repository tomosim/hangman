import React from "react";

const Lives = props => {
  return (
    <div className="Lives">
      {props.livesLeft}
      <br />
    </div>
  );
};

export default Lives;
