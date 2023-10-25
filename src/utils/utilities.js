export function getFormattedDate(
  dateString = "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)"
) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(dateString);

  let formattedDate = `${
    monthNames[date.getMonth()]
  } ${date.getDay()}, ${date.getFullYear()}`;

  return formattedDate;
}
