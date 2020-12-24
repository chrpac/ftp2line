const request = require('request')
const fs = require('fs')
const chokidar = require('chokidar');

token = 'N5wyRM6SVksfVqJiBG0w307Ql9nJCs2slyJb4I2Np37';
message = 'HelloWorld';

const lineNotify = (message, file) => {
  console.log('Message: ', message)
  console.log('Path: ', file);
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
  //.on('change', path => {lineNotify('Hello World', path));
  .on('change', path => {
    setTimeout(() => lineNotify('Hello World', path), 3000)
  });

