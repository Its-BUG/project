const express = require('express');
const app = express();

const teameRouter = require('./routes/teamRoutes');

//midlware // parser incoming request body as JSON
app.use(express.json());

app.use("/api/teams", teameRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


