const promBundle = require("express-prom-bundle");
const app = require("express")();
const metricsMiddleware = promBundle({includeMethod: true});

app.use(metricsMiddleware);
app.use(/* your middleware */);
app.listen(3000);
