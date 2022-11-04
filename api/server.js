// Configuración del server
const express = require("express");
const app = express();
const morgan = require("morgan");
const routes = require("./routes");
const db = require("./config/db");
const PORT = 3001;
const path = require("path");
const cookieParser = require("cookie-parser");

if (process.env.MODE !== "grade") {
  app.use(
    morgan(
      "      ↓ received :method :url · responded :status :res[Content-Type]"
    )
  );
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("tiny"));

app.use(cookieParser());
app.use("/api", routes);

/* app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
}); */
// custom error handling
app.use(function (err, req, res, next) {
  // just in case
  if (!err.stack || !err.message) next(err);
  // clean up the trace to just relevant info
  const cleanTrace = err.stack
    .split("\n")
    .filter((line) => {
      // comment out the next two lines for full (verbose) stack traces
      const projectFile = line.indexOf(__dirname) > -1; // omit built-in Node code
      const nodeModule = line.indexOf("node_modules") > -1; // omit npm modules
      return projectFile && !nodeModule;
    })
    .join("\n");

  console.log(err.message);

  // send back error status
  res.status(err.status || 500).end();
});

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Escuchando en el puerto ", PORT);
  });
});
