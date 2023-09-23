import React from "react";

const CreateForm = (props) => {
  const getLengthProps = (props) => {
    for (let i = 0; i < props.length; i++) {
      console.log(props[i]);
    }
  };
  return <div>{getLengthProps(props)}</div>;
};

export default CreateForm;
