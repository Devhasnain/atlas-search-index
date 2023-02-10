const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();


const DB = require("./DB");

const Model = require("./Model");
DB();

app.use( cors());
app.use(express.json());


app.post("/search", async (req, res) => {
  try {
    const {title}=req.body;
    console.log(title)
    const agg = [
      {
        $search: {
            autocomplete: {
            query: title,
            path: "title",
            fuzzy: {
              maxEdits: 2,
            },
          },
        },
      },
      {
        $limit: 5,
      },
      {
        $project: {
          _id: 0,
          title: 1,
        },
      },
    ];

    const response = await Model.aggregate(agg);
    res.send(response);
  } catch (error) {
    return res.send(error)
  }

});

app.listen(3001, () => {
  console.log("running");
});
