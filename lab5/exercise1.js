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
const axios = require('axios');
const app = express();

// allow app to run behind any proxy
app.enable('trust proxy');
// not to reveal framework name to client
app.set('X-powered-by', false);
// route should be strict
app.set('strict routing', true);
// route should be case-sensitive 
app.enable('case sensitive routing');

//send standard pagination options


const port = 8080;
const url = 'https://randomuser.me/api/?results=1';


// app.get('/users', function(req, res) {
//     // disallow proxy to cache response and allow response caching for 1 day to client
//     res.set({'Cache-Control': 'private, max-age=86400',
//             'X-powered-by': false
//         });
//     res.json(json_obj);
//     axios.get(url)
//     .then(function(response) {
//         response.data.pipe(res);
//         console.log(response);
//     })
//     .catch((err) => console.log('eroor occurred!!'));
// });

app.get('/users', (req, res) => {
    axios.get(url)
        .then((data) => {
            console.log(data);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.set('Cache-Control', 'private,max-age=86400')
            res.end(JSON.stringify(data.data));
        })
        .catch((error) => {
            res.end(`Error occurred!! \n${error.message}`)
        });
});

app.listen(port, () => console.log(`listening to port ${port}...`));