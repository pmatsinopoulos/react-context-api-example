import React from "react";
import MyContext from "./MyContext";

const MyButton = () => {
  return (
    <MyContext.Consumer>
      {context => {
        return <div>{`${context.firstName} - ${context.lastName}`}</div>;
      }}
    </MyContext.Consumer>
  );
};

export default MyButton;
