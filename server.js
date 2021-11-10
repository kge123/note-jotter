const express = require("express");
const frontendRoutes = require("./routes/frontend");
const backendRoutes = require("./routes/backend");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", backendRoutes);
app.use("/", frontendRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
