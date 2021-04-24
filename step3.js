// Copied over code below:

const fs = require('fs')
const process = require('process')
const axios = require('axios')

// Copied code over from step 1.
function cat(path, out) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}. Message: ${err}`)
            process.exit(1)
        } else {
            handleOutput(data, out)
        }
    })
}

// Step 2.

async function webCat(url, out) {
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
            cat(url, out)
        } catch(err) {
            console.error(`Error getting ${url}: ${err}`)
        }
    }
}

console.log(process.argv)

function handleOutput(text, out) {
    if (out) {
        fs.writeFile(out, text, 'utf8', function(err) {
            if (err) {
                console.error(`Couldn't write ${out}: ${err}`)
                process.exit(1)
            }
        })
    } else {
        console.log(text)
    }
}

let path;
let out;

if (process.argv[2] === '--out') {
    out = process.argv[3]
    path = process.argv[4]
} else {
    path = process.argv[2]
}

webCat(path, out)