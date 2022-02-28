//* Convert 12-hour clock time string to 24-hour clock time strong
/* 
Example
s = "12:01:00PM"
Return "12:01:00"

s = "12:01:00AM"
Return "00:01:00"
 */

function timeConversion(s) {
  let milHH = "00";
  let milMM = "00";
  let milSS = "00";

  let timeSplit = s.split(":");
  // if s = "12:01:00PM" then timeSplit = ["12", "01", "00PM"]

  // convert hour
  if (timeSplit[2].includes("PM") && timeSplit[0] !== "12") {
    milHH = Number.parseInt(timeSplit[0]) + 12;
  } else if (timeSplit[2].includes("AM") && timeSplit[0] === "12") {
    milHH = `0${Number.parseInt(timeSplit[0]) - 12}`;
  } else {
    milHH = timeSplit[0];
  }

  // MM does not need to be converted
  milMM = timeSplit[1];

  // SS needs to remove AM/PM
  milSS = `${timeSplit[2][0]}${timeSplit[2][1]}`;

  // Build and return result
  return `${String(milHH)}:${milMM}:${milSS}`;
}
