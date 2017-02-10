node main.js &
sleep 1
ps aux | grep loop.sh | grep -v grep | awk '{ print $2}' | xargs kill -9

