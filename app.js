const http = new userHTTP;

// Get Data from external API source:
http.get('https://jsonplaceholder.typicode.com/users').then(data => console.log(data)).catch(err => console.log(err));

// Add Event Listern for button
const button = document.querySelector(".btn");
button.addEventListener('click', showTable)

// Function to show table
function showTable(e) {
  tableBody();
  console.log('Button was clicked');
  e.preventDefault();
};

// Function to create table body
function tableBody() {
  // get Element Target from index.htm
  const target = document.getElementById('target');

  // Create Elements
  const tr = document.createElement('tr');
  let td_id = document.createElement('td');
  let td_name = document.createElement('td');
  let td_username = document.createElement('td');
  let td_email = document.createElement('td');

  // Create the Text Nodes
  let id = document.createTextNode('1');
  let name = document.createTextNode('John Smith');
  let username = document.createTextNode('jsmith123');
  let email = document.createTextNode('email@email.com');

  // Append the Children of the Elements withe the text nodes
  td_id.appendChild(id);
  td_name.appendChild(name);
  td_username.appendChild(username);
  td_email.appendChild(email);

  // Append the tr with the td childres
  tr.appendChild(td_id);
  tr.appendChild(td_name);
  tr.appendChild(td_username);
  tr.appendChild(td_email);

  // Append the target with the tr child
  target.appendChild(tr);
}
