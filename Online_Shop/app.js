const express = require('express');
const app = express();

const authRoutes = require('./routes/auth-route');

app.use(authRoutes);

app.listen(3000);