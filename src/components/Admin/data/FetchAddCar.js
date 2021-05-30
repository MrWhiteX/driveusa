import React, { useEffect } from "react";

const FetchAddCar = (props) => {
  const { newCar } = props;
  console.log(newCar);
  useEffect(() => {
    fetch(`http://localhost:3001/cars/`, {
      method: "POST",
      body: JSON.stringify(newCar),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [newCar]);

  return <> </>;
};

export default FetchAddCar;
