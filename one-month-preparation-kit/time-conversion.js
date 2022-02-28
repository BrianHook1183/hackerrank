function timeConversion(s) {
  // Write your code here

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
