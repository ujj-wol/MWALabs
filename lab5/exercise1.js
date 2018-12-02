/* 
Create an Express application that will accept a GET request to route /users and send a response with users json data.

Use JSON data from URL https://randomuser.me/api/?results=10
Fetch the data using (axios) module in 3 different ways:
    1. Using Promises
    2. Using Reactive Programming(Observables)
    3. Using Async/Await
Your application should run fluently behind any Proxy without revealing the framework name to clients, and proxy should
not cache the response.
Your route should be case sensetive and strict
Set standard pagination options
Allow response caching for one day.
*/

const express = require('express');

const app = express();
const port = 8080;

const json_obj = {name: 'Ujjwol', age: '25'};

app.get('/', function(req, res) {
    res.json(json_obj);
    res.end();
});

app.listen(port, () => console.log(`listening to port ${port}...`));

