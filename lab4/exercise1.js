/**
 * Create a Reactive HTTP server that serves files when url query parameter is passed with the request. 
 * The file path is provided in the URL like this: http://localhost:4000/?url=path/to/my/file.txt   
 * Your logic of reading the file should be in a separate child process.
 */

const http = require('http');
const url = require('url');
const { fork } = require('child_process');
const { Subject } = require('rxjs');

const subject = new Subject();

function readRequestedFile(reqres) {
    const myURL = url.parse(reqres.req.url, true);
    const filePath = myURL.query.url;
    //const filePath = 'shortFile.txt';

    if(filePath === 'shortFile.txt') {
        // create child process
        const childProcess = fork('./childOperations.js');
        childProcess.send(filePath);

        childProcess.on('message', data => {
            reqres.res.setHeader('200', {'Content-Type' : 'text/plain'});
            reqres.res.write(data);
            reqres.res.end();
        });

        childProcess.on('error', (err) => {
            reqres.res.end(err);
        });

    } else {
        reqres.res.setHeader('404', "Content-Type", 'text/plain');
        reqres.res.end("404 Not Found \n");
    }
}

subject.subscribe(readRequestedFile);

http.createServer((req, res) => {
    subject.next({req: req, res: res});
}).listen('8080', () => console.log('listening to port 8080'));