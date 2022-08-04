const express = require('express');
const app = express();
//here import express package and define it as app. 
//so, it's pretty clear here, app equals express package.

const authRoutes = require('./routes/auth-routes')
//here import authRoutes from other file with a path.

app.use(authRoutes);
//'use' is a built-in method form express app object that allows us to add a middleware.


app.listen(3000);