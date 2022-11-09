const fs = require('node:fs');

fs.readdir('./boys', { withFileTypes: true }, (err, files) => {
  // console.log(files);

  for (const file of files) {
    // console.log(file)

    fs.readFile( `./boys/${file.name}`, (err, data) => {

  // console.log(err, 'ERR');
      // console.log(data.toString())

      if (data.toString() !== 'male' ){
        fs.rename(`./boys/${file.name}`, `./girls/${file.name}`, (err) => {
          console.log(err);
        })
      }
});
  }
});



fs.readdir('./girls', { withFileTypes: true }, (err, files) => {
  for (const file of files) {
    fs.readFile( `./girls/${file.name}`, (err, data) => {
      if (data.toString() !== 'female' ){
        fs.rename(`./girls/${file.name}`, `./boys/${file.name}`, (err) => {})
      }
    });
  }
});