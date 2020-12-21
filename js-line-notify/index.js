const request = require('request')
const fs = require('fs')
const chokidar = require('chokidar');
// hound = require('hound')
// watcher = hound.watch('/usr/src/app/img')
const log = console.log.bind(console);

token = '8L5ACVF6JsdZPlQYgecJ3M7EhIwIrurFuo7XED1YqME';
message = 'HelloWorld';

const lineNotify = (message, file) => {
  request({
    method: 'POST',
    uri: 'https://notify-api.line.me/api/notify',
    headers: {
      'Content-Type': 'multipart/formdata'
    },
    auth: {
      'bearer': token
    },
    formData: {
      message,
      imageFile : fs.createReadStream(file)
    }
  }, (err, httpResponse, body) => {
    if(err){
      console.log(err);
    } else {
      console.log({
        file: file,
        body: body
      });
    }
  });
}

const watcher = chokidar.watch('/usr/src/app/img/', {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

watcher
  .on('add', path => log(`File ${path} has been added`))
  .on('change', path => log(`File ${path} has been changed`))
  .on('unlink', path => log(`File ${path} has been removed`));

// watcher.on('create', function(file, stats) {
//     lineNotify('Hello World', file)
//     console.log(file + ' was created')
//   });

//lineNotify('Hello Haha','default_image.png')