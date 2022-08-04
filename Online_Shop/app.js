const path = require('path');
//path package is built into Node.js already.

const express = require('express');
const app = express();
//here import express package and define it as app. 
//so, it's pretty clear here, app equals express package.

const authRoutes = require('./routes/auth-routes')
//here import authRoutes from other file with a path.

app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// here set view engine and path. 
// join is a method form path package.
// __dirname is global method.

app.use(authRoutes);
//'use' is a built-in method form express app object that allows us to add a middleware.


app.listen(3000);