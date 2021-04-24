const fs = require('fs')
const process = require('process')

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}. Message: ${err}`)
            process.exit(1)
        } else {
            console.log(`Success: ${data}`)
        }
    })
}

cat('one.txt')