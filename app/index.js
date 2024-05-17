const express = require('express');
const promBundle = require('express-prom-bundle');

const app = express();

promBundle.normalizePath = (req, opts) => {
    return req.route?.path ?? "No";
};
// Init metrics
const metricsMiddleware = promBundle({
    includeMethod: true,
    includePath: true,
    buckets: [0.001, 0.01, 0.1, 1, 2, 3, 5, 7, 10, 15, 20, 25, 30, 35, 40, 50, 70, 100, 200],
    customLabels: { model: "No" },
    transformLabels: (labels, req, res) => {
        labels.model = req?.body?.model ?? req?.body?.imageModel ?? req?.body?.voice ?? "No";
        return labels;
    },
});
app.use(metricsMiddleware);
// Routes 
app.get('/data', (req, res) => {
  res.json({data: 'Some data...'});
}); 
app.listen(3000);
