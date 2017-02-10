Bug reproduction for NodeJS issue https://github.com/nodejs/node/issues/11284

Run `./run.sh` to call the Node script, which forks a process to execute
`loop.sh`, and then `kill -9` the process running `loop.sh`

WARNING: If for some weird reason you have another process running on your
maching with "loop.sh" in the name, it'll get killed with SIGKILL too.
