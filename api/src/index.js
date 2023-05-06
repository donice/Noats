const express = require('express');
const bodyParser = require('body-parser');
const v1Notes = require('./v1/routes/noteRoutes');

const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use("/api/v1/notes", v1Notes);

app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`);
});