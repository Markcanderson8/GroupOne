import React, { useEffect } from "react";

const CreateNewForm = (props) => {
  const lenProps = Object.keys(props).length;

  const findType = () => {
    Object.keys(props).forEach((key) => {
      console.log(typeof props[key]);
    });
  };

  useEffect(() => {
    findType();
  }, []);
  return (
    <div>
      {lenProps > 0 ? (
        <div>
          <h2>Number of Props: {lenProps}</h2>
        </div>
      ) : (
        <div>
          <h2>No props</h2>
        </div>
      )}
    </div>
  );
};

export default CreateNewForm;
