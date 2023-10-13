const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const days = document.querySelector(".day");
const dates = document.querySelector(".date");
const months = document.querySelector(".month");
const years = document.querySelector(".year");
let daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthsArray = [
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

setInterval(() => {
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  //to get day name
  let dayName = daysArray[day].toUpperCase();
  //to get month name
  let monthName = monthsArray[month].toUpperCase();

  // to show minutes seconds and date if less than 10;
  let hr = hour < 10 ? "0" + hour : hour;
  let min = minute < 10 ? "0" + minute : minute;
  let sec = second < 10 ? "0" + second : second;

  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = sec;
  dates.textContent = date;
  days.textContent = dayName;
  months.textContent = monthName;
  years.textContent = year;
}, 1000);
