import React from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingIcon = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#36D7B7");

  return (
    <>
      <ClipLoader color={color} loading={loading} size={30} />
      <h1>Wczytuję dane...</h1>
    </>
  );
};

export default LoadingIcon;
