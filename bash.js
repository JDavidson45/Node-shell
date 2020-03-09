let pwd = require('./pwd')
let ls = require('./ls')
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  pwd(data)
  ls(data)

})

