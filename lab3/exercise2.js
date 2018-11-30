const http = require('http');
const fs = require('fs');
const path = require('path')


// using synchronous file read *********************
http.createServer((req, res) => {
    res.writeHead(200, 'Content-Type', 'plain/text');
    const responseFile = fs.readFileSync(path.join(__dirname, 'largeFile.txt'), 'utf-8');
    res.write(responseFile);
    res.end();
})
.listen(8080, () => console.log("chalyo........."));



// using asynchronous file read *********************
const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, 'Content-Type', 'text/plain');
    fs.readFile(path.join(__dirname, 'largeFile.txt'), 'utf-8', function(error, data) {
        res.write(data);
        res.end();
    });
    res.write('<p>data milaudai cha hai...</p>\nferi arko check...\n');
})

server.listen(8080, () => console.log("chalyo........."));



//using stream *********************
// var readable = fs.createReadStream(path.join(__dirname, 'largeFile.txt'), 
//                                         {encoding: 'utf-8', highWaterMark: 20 * 1024});

// var writable = fs.createWriteStream(path.join(__dirname, 'destinationFile.txt'), 
//                                         {encoding: 'utf-8', highWaterMark: 16 * 1024});

// readable.on('data', function(chunk) {
//     console.log(chunk.length);
//     writable.write(chunk);
// })

// readable.pipe(writable);

const server1 = http.createServer();
server1.on('request', (req, res) => {
    const readable = fs.createReadStream(path.join(__dirname, 'shortFile.txt'),
                                            {encoding: 'utf-8', highWaterMark: 20 * 1024});
    readable.on('data', function(chunk) {
        res.writeHead(200, 'Content-Type', 'plain/text');
        res.write(chunk);
        console.log(`writing chunk of lenght ${chunk.length} to response ....`)
    });

    readable.on('end', function(message) {
        console.log("Steam Data Flushed Completely.....");
        res.end();
    });
});
server1.listen(8080, () => console.log("listening at port 8080...."));

server1.on('request', (req, res) => {
    const readable = fs.createReadStream(path.join(__dirname, 'largeFile.txt'),
                                            {encoding: 'utf-8', highWaterMark: 20 * 1024});
    readable.pipe(res);
});

server1.listen(8080, () => console.log("listening at port 8080...."));

