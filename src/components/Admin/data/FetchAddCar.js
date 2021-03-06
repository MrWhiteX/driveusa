import React, { useEffect } from "react";

// const FetchAddCar = (props) => {
//   const { newCar } = props;
//   console.log(newCar);
//   useEffect(() => {
//     fetch(`http://localhost:3001/cars/`, {
//       method: "POST",
//       body: JSON.stringify(newCar),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [newCar]);

//   return <> </>;
// };

const FetchAddCar = (props) => {
  const { newCar } = props;
  useEffect(() => {
    fetch(
      `https://driveusa-d2721-default-rtdb.europe-west1.firebasedatabase.app/cars.json`,
      {
        method: "POST",
        body: JSON.stringify(newCar),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).catch((error) => {
      console.log(error);
    });
  }, [newCar]);

  return <> </>;
};

export default FetchAddCar;
