const LineNotify = require("./src/client");
hound = require('hound')
watcher = hound.watch('/usr/src/app/img')

const ACCESS_TOKEN = "8L5ACVF6JsdZPlQYgecJ3M7EhIwIrurFuo7XED1YqME";
const notify = new LineNotify(`${ACCESS_TOKEN}`);


watcher.on('create', function(file, stats) {
    notify.sendImage(file);
    console.log(file + ' was created')
  });