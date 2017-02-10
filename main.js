const spawnSync = require('child_process').spawnSync;

const res = spawnSync('./loop.sh', [], {stdio: 'inherit'});

console.log('Status: ' + res.status);
console.log('Signal: ' + res.signal);

