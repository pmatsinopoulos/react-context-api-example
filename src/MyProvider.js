import React from "react";
import MyContext from "./MyContext";

const MyProvider = props => {
  return (
    <MyContext.Provider
      value={{
        foo: "This is foo",
        firstName: "Panagiotis",
        lastName: "Matsinopoulos"
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
