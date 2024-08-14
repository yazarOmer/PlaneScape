import axios from "axios";

const fetchFlights = async (filters: any) => {
  let URL = `http://localhost:5000/api/flights?departure=${filters.departure}&arrival=${filters.arrival}&type=${filters.type}`;

  if (filters.departureDate) {
    URL += `&departureDate=${filters.departureDate}`;
  }
  if (filters.arrivalDate) {
    URL += `&arrivalDate=${filters.arrivalDate}`;
  }

  const response = await axios.get(URL);

  if (response.data) {
    return response.data;
  }
};

const flightActions = {
  fetchFlights,
};

export default flightActions;
