const argv = process.argv;
const fs = require('fs');
const axios = require('axios');


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

console.log(argv)

async function write(path, ) {
  if (argv.includes("--out")) {

    let content = new Promise(function (resolve, reject) {
      fs.readFile(argv[4], 'utf8', function (err, data) {
        if (err) {
          console.error(err);
          process.exit(1);
        } else {
          console.log(`file contents: ${data}`);
        }
      });
    });
    fs.writeFile(argv[3], await content, "utf8", function (err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log('Successfully wrote to file!');
    });

  } else {
    if (!argv[argv.length - 1].includes("http" || "https")) {
      cat(./${argv[argv.length - 1]})
    console.log("running cat")
  } else {
      console.log("running webCat")
      webCat(argv[argv.length - 1])
    }
  }

}

// let content = fs.readFile(argv[3], 'utf8', function (err, data) {
//   if (err) {
//     console.error(err);
//     process.exit(1);
//   }
//   console.log(`file contents: ${data}`);
//   // console.log(argv[3])
//   // return data;
// });

// console.log(content)

