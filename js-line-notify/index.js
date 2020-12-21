const request = require('request')
const fs = require('fs')
hound = require('hound')
watcher = hound.watch('/usr/src/app/img')

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
        imageFile: fs.createReadStream(file),
        body: body
      });
    }
  });
}


watcher.on('create', function(file, stats) {
    lineNotify('Hello World', file)
    console.log(file + ' was created')
  });

//lineNotify('Hello Haha','default_image.png')