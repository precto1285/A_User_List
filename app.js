const http = new userHTTP;

// Add Event Listern for button
const button = document.querySelector(".btn");
button.addEventListener('click', showTable)

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

  // Disable Button after it has been clicked to prevent duplicating show list
  function disableButton() {
    document.querySelector('.btn').disabled = true;
  }
  disableButton();

  e.preventDefault();
};

