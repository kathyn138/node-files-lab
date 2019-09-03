const argv = process.argv;
const fs = require('fs');
const axios = require('axios');

if (!argv[argv.length - 1].includes("http" || "https")) {
    cat(`./${argv[argv.length - 1]}`)
} else {
    console.log("hi")
    webCat(argv[argv.length - 1])
}

function cat(path) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.error(`Error reading ${argv[argv.length - 1]}`)
            // toString() gets the Error string
            console.error(err.toString())
            process.exit(1);
        }

        console.log(`file contents: ${data}`);
    })

    console.log('reading file');
}

function webCat(url) {
    axios.get(`${url}`).then(function (resp) {
        console.log(resp.data);
    }).catch(err => console.error(err))
}