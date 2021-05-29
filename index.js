const prompt = require('prompt-sync')();
const loader = require('./loader')

while (true) {
    command = prompt('>> ')
    var cmd = command.split(' ')[0]
    var args = command.slice(cmd.length + 1)
    run = loader.load(cmd)
    if (run == false) {
        console.log('Unknown Command.')
        continue } else { run(args)}
}


