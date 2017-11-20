export default function getMenubyTOD() {
  var d = new Date();
  var day = d.getDay()
  var hours = d.getHours();
  var minutes = d.getMinutes() / 60;
  hours += minutes;
  if ((day === 0 || 6) && hours < 15.5) {
    return 'brunch';
  } else if (day > 0 && day < 6 && hours < 16.5) {
    return 'lunch';
  } else {
    return 'dinner';
  }
}
