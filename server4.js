const http = require('http'); // Import the HTTP module
const PORT = 5500;           // Define the port number

// Create the server
const myServer = http.createServer((request, response) => {
    response.write("Welcome to the HTTP module"); // Send a response to the client
    response.end(); // End the response
});

// Start the server and listen on the specified port
myServer.listen(PORT, () => {
    console.log(`My Server is running on PORT ${PORT} number`); // Use backticks for template literals
});
