const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const compiler = require("compilex");


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const option = { stats: true };
compiler.init(option);



app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var code = req.body.code;

  var input = req.body.input;
  var inputRadio = req.body.inputRadio;
  var lang = req.body.lang;
  if (lang === "C" || lang === "C++") {
    if (inputRadio === "true") {
      var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
      compiler.compileCPPWithInput(envData, code, input, function (data) {
        if (data.error) {
          res.send(data.error);
        } else {
            res.render("output", { output: data.output,code:code,input:input });
        }
      });
    } else {
      var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
      compiler.compileCPP(envData, code, function (data) {
        
        res.render("output", { output: data.output,code:code,input:input });

        //data.error = error message
        //data.output = output value
      });
    }
  }
  if (lang === "Python") {
    if (inputRadio === "true") {
      var envData = { OS: "windows" };
      compiler.compilePythonWithInput(envData, code, input, function (data) {
        res.render("output", { output: data.output,code:code,input:input });
      });
    } else {
      var envData = { OS: "windows" };
      compiler.compilePython(envData, code, function (data) {
        res.render("output", { output: data.output,code:code,input:input });
      });
    }
  }
});

app.get("/fullStat", function (req, res) {
  compiler.fullStat(function (data) {
    res.send(data);
  });
});

app.listen(5000,()=>{
    console.log("Server for IDE started in port 5000");
});

compiler.flush(function () {
  console.log("All temporary files flushed !");
});
