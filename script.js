// SAT
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// KALENDAR
function generateCalendar() {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let calendar = "<table><tr>";
  const days = ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"];
  for (let d of days) {
    calendar += `<th>${d}</th>`;
  }
  calendar += "</tr><tr>";

  // prazna polja do prvog dana
  for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
    calendar += "<td></td>";
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const currentDay = new Date(year, month, day);
    const weekday = currentDay.getDay();

    calendar += `<td>${day}</td>`;

    if (weekday === 0) {
      calendar += "</tr><tr>";
    }
  }
  calendar += "</tr></table>";

  document.getElementById("calendar").innerHTML = calendar;
}

generateCalendar();
    
