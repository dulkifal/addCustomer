const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

let arr = [];

app.get("/api", (req, res) => {
  res.json(arr);
});



app.post("/clients/customers/add", (req, res) => {
  console.log(req.body);
  arr.push(req.body);
  res.json(req.body + " added successfully");
}
)


app.get("/clients/customers/get/", (req, res) => {
  if(req.query.internName === "sample"){
    res.json(arr);
  }
   
 
}
)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

