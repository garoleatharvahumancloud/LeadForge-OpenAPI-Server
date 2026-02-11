const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./core.json");

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Swagger UI running at http://localhost:${PORT}/api-docs`);
});
