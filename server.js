// run nodemon on server.js instead of app.js

const app = require("./app")

app.listen(3000, function(){
  console.log("Server starting on port 3000")
})