const fs = require('fs');
const path = require('path');

const loadFile = filePath => {
    fs.readFile(path.join(__dirname, filePath), 'utf-8', function(error, fileData) {
        process.send(fileData);
    });
}

process.on('message', (filePath) => {
    console.log(`Filepath on child ${filePath}`);
    loadFile(filePath);
})