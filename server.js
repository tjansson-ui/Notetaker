const express = require("express");
const pages = require("./routes/pageRoutes");
const api = require("./routes/apiRoutes");
const app = express();
const PORT=  process.env.PORT || 3001; //Dynamic Port for once the Heroku access is corrected.

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(pages);
app.use(api);

// listener
app.listen(PORT, () => {
  console.log(`Listening for requests on port http://localhost:${PORT}`)
});