const http = new userHTTP;

// Add Event Listener for show button
const showButton = document.querySelector("#showusers").addEventListener('click', showTable)

// Get Values from Input Form
const userID = document.getElementById("newUserId");
const userName = document.getElementById("newUserName");
const userUserName = document.getElementById("newUserUsername");
const userEmail = document.getElementById("newUserEmail");

// Add Event Listener for Submit User Button
const submitUser = document.querySelector("#submit").addEventListener('click', addUser);

// Function to show table
function showTable(e) {
  // Get Data from external API source:
  http.get('https://jsonplaceholder.typicode.com/users').then(data => tableBody(data)).catch(err => console.log(err));
  console.log('Button was clicked');

  // Function to create table body
  function tableBody(data) {
    // Loop through data
    data.forEach(user => {
      // get Element Target from index.htm
      const target = document.getElementById('target');

      // Create Elements
      const tr = document.createElement('tr');
      let td_id = document.createElement('td');
      let td_name = document.createElement('td');
      let td_username = document.createElement('td');
      let td_email = document.createElement('td');

      // Create the Text Nodes
      let id = document.createTextNode(user.id);
      let name = document.createTextNode(user.name);
      let username = document.createTextNode(user.username);
      let email = document.createTextNode(user.email);

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
    })
  }

  // Disable Show Button after it has been clicked to prevent duplicating show list
  function disableButton() {
    document.querySelector('#showusers').disabled = true;
  }
  disableButton();

  e.preventDefault();
};

// Add user function
function addUser(e) {
  console.log(userID.value, userName.value, userUserName.value, userEmail.value)
  clearForm();
  e.preventDefault();
}

// Function to clear input form
function clearForm() {
  userID.value = '';
  userName.value = '';
  userUserName.value = '';
  userEmail.value = '';
}
