const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//setup

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Define a route to serve the HTML file
app.get("/", (req, res) => {
  // Use path.join to ensure the correct file path on different operating systems
  res.render("index.ejs");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}!`);
});
