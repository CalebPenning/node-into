const fs = require('fs')
const process = require('process')
const axios = require('axios')

// Copied code over from step 1.
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

// Step 2.

async function webCat(url) {
    if (url.includes('http')) {
        try {
            let res = await axios.get(url)
            console.log(res)
        } catch(err) {
            console.error(`Error getting ${url}: ${err}`)
            process.exit(1)
        }
    }

    else {
        try {
            cat(url)
        } catch(err) {
            
        }
    }
}

webCat('http://numbersapi.com/42?json')
webCat('one.txt')