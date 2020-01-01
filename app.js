const http = new userHTTP;

// Get Data from external API source:
http.get('https://jsonplaceholder.typicode.com/users').then(data => console.log(data)).catch(err => console.log(err));

// Add Event Listern for button
const button = document.querySelector(".btn");
button.addEventListener('click', showTable)

// Created Function to show table
function showTable(e) {
  console.log('Button was clicked');
  e.preventDefault();
};
