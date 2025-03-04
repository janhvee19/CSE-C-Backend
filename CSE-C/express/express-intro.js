//http://localhost:3000/api?name=rahul&rollno=5444
import express from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("welcome to abes");
});

//data send  url THROUGH PARAMS
app.get("/api/:name/:rollno", (req, res) => {
  try {
    const data = req.params;
    res.send("welcome ${data.name} roll no.${data.rollno}");
  } catch (error) {
    console.log("Error:");
  }
});

//data send  url THROUGH .query

// app.get("/api", (req, res) => {
//   const data = req.query;
//   res.send(welcome ${data.name} and rollno. ${data.rollno});
// });
app.get("/api", (req, res) => {
  try {
    const { name, rollno } = req.query;
    if (!name) {
      res.send({ ststus: 404, message: "please enter name" });
      //   res.status(404).send("please enter name");
    } else {
      res.send("welcome ${name} ans rollno. ${rollno}");
    }
  } catch (error) {
    console.log(error.message);
  }
});
app.listen(port),
  () => {
    console.log(`server running at http://localhost:${port}`);
  };