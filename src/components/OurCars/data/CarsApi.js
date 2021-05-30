const fetchCars = () => {
  return fetch(`http://localhost:3001/cars`).then((response) =>
    response.json()
  );
};

export default fetchCars;
