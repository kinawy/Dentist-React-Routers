import React from "react";

const WidgetShow = (props) => {
    console.log(props)
  return (
    <div>
      <h1>You entered this URL paramater: {props.match.params.id}</h1>
      <p>{props.procedures[props.match.params.id]}</p>
    </div>
  );
};

export default WidgetShow;
