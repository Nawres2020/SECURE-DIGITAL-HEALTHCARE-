const form = document.getElementById("myForm");
const table = document.getElementById("dataTable");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => data[key] = value);
  const row = table.insertRow(-1);
  const firstNameCell = row.insertCell(0);
  const lastNameCell = row.insertCell(1);
  const emailCell = row.insertCell(2);
  const birthdayCell = row.insertCell(3);
  const genderCell = row.insertCell(4);
  const addressCell = row.insertCell(5);
  const phoneCell = row.insertCell(6);
  firstNameCell.textContent = data.First_name;
  lastNameCell.textContent = data.Last_name;
  emailCell.textContent = data.email;
  birthdayCell.textContent = data.b
