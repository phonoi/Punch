var EasyFtp = require('easy-ftp'),
    ftp = new EasyFtp(),
    config = require('./src/config')
ftp.connect(config.service)

const remotePath = "/root"
ftp.upload(__dirname, remotePath, function (err) {
    console.log(err);
    console.log("已经传输完成至 " + config.service.host + ":" + remotePath);
    ftp.close();
});