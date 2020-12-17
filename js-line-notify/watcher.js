hound = require('hound')

// Create a directory tree watcher.
watcher = hound.watch('../img')

// Create a file watcher.
//watcher = hound.watch('/tmp/file.txt')

// Add callbacks for file and directory events.  The change event only applies
// to files.
watcher.on('create', function(file, stats) {
  console.log(file + ' was created')
})
watcher.on('change', function(file, stats) {
  console.log(file + ' was changed')
})
watcher.on('delete', function(file) {
  console.log(file + ' was deleted')
})

// Unwatch specific files or directories.
//watcher.unwatch('/tmp/another_file')

// Unwatch all watched files and directories.
watcher.clear()