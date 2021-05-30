import React, { useEffect } from "react";

const FetchDeleteCar = (props) => {
  const { carToDelete } = props;

  useEffect(() => {
    if (carToDelete != null) {
      fetch(`http://localhost:3001/cars/${carToDelete}`, {
        method: "DELETE",
      })
        .then((response) => {
          console.log(response.ok);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [carToDelete]);

  return <> </>;
};

export default FetchDeleteCar;
