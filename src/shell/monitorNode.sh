#!/bin/sh
while true;do
    count=`ps -ef|grep node|grep -v grep`
    if [ "$?" != "0" ];then
date
echo  ">>>>no node, run it"
nohup node ../server.js &
fi
sleep 1h
done
