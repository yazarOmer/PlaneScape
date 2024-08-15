import axios from "axios";

const fetchBookings = async () => {
  let URL = `http://localhost:5000/api/bookings/get-bookings`;

  const response = await axios.get(URL);

  if (response.data) {
    return response.data;
  }
};

const bookingsActions = {
  fetchBookings,
};

export default bookingsActions;
