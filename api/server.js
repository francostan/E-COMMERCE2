// Configuración del server
const express = require("express");
const app = express();
const morgan = require("morgan");
const routes = require("./routes");
const db = require("./config/db");
const PORT = 3001;
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("tiny"));

app.use(cookieParser());
app.use("/api", routes);

/* app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
}); */

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Escuchando en el puerto ", PORT);
  });
});
