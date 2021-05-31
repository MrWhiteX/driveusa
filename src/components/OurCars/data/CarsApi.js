// const fetchCars = () => {
//   return fetch(`http://localhost:3001/cars`).then((response) =>
//     response.json()
//   );
// };

// export default fetchCars;

const fetchCars = () => {
  return fetch(
    `https://driveusa-d2721-default-rtdb.europe-west1.firebasedatabase.app/cars.json`
  ).then((response) => response.json());
};

export default fetchCars;
