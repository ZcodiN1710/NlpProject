const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { handleApiCall } = require("./handleApiCall.js");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("dist"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const myApiKey = process.env.ApiKey;
app.post("/inputValue", async (req, res) => {
  const inputUrl = req.body;
  const handleApi = await handleApiCall(inputUrl.url, myApiKey);
  return res.send(handleApi);
});
