const app = require("./app");
const sequelize = require("./infrastructure/sequelize");

const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "src/.env.development"),
});

const port = process.env.PORT || 4000;

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
