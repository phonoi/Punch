#！ /bin/bash

# kill monitorNode进程先，然后再kill node

ps -ef | grep monitorNode | awk '{print $2}' | xargs kill -9 &&

ps -ef | grep node | awk '{print $2}' | xargs kill -9 