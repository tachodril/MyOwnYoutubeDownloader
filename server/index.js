const express = require("express");
const cors = require("cors");

const app = express();

const ytdl = require("ytdl-core");
app.use(cors());
app.get("/", (req, res) => {
  res.send("sdfghj");
  console.log("heyy level");
});
app.get("/downloadvideo", (req, res) => {
  var url = req.query.url;
  //   res.write("sdfghj");
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(url, {
    format: "mp4"
  }).pipe(res);

  //res.send("Hii " + req.query.url + "kewbd");
  console.log(req.query.url);
});

app.listen(7000, () => {
  console.log("Server is running at port 7000");
});
