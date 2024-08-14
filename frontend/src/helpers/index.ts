export const formatHours = (date: Date) => {
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  let type = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  let str = hours + ":" + minutes + " " + type.toUpperCase();

  return str;
};

export const timeDifference = (departureDate: Date, arrivalDate: Date) => {
  const diff = arrivalDate.getTime() - departureDate.getTime();
  console.log(arrivalDate);

  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  const hourDiff = Math.floor((diff % day) / hour);
  const minuteDiff = Math.floor((diff % hour) / minute);

  return hourDiff + "h" + " " + minuteDiff + "m";
};
