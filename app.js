const http = new userHTTP;

// Get Data from external API source:
http.get('https://jsonplaceholder.typicode.com/users').then(data => console.log(data)).catch(err => console.log(err));