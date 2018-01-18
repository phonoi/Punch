var request = require('request')
var superagent = require('superagent')
var cronJob = require("cron").CronJob
var sendMail = require('./mail')
var config = require('./config')

/** 
 * @description 打卡
 */
var Punch = (url, type) => {
    let { loginUrl, form } = config.user
    request.post(loginUrl, {form}, (err, res, body) => {
        if (!err) {
            let cookieArr = res.headers["set-cookie"]
            let cookie = cookieArr.find((value, index, arr)=>value.includes('sid')) // 含有sid的那条cookie才是可用的cookie
            superagent.get(url).set("Cookie", cookie).end((err, res) => {
                // 获取message配置
                let message = config.message
                if (err) {
                    message.subject = '打卡出错'
                    // console.log(err.response)
                    message.text = `错误描述为:${err.response.res.text}\r\n\r\n报文信息如下${JSON.stringify(err.response)}`
                } else {
                    let date = new Date()
                    let time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
                    message.subject = `${type}打卡成功！打卡时间 ${time}`
                    message.text = res.res['text']
                    // console.log(res.res['text'])
                }
                sendMail(message)
            })
        } else {
            console.dir(err)
        }
    })
}

var launch = () => {
    // 延迟数在 1-30分钟内随机
    let minutes = parseInt(Math.random() * 30, 10)

    // 延迟秒数在 0-60秒内随机
    let second = parseInt(Math.random() * 60, 10)

    // console.log(`延迟${minutes}分钟`)

    let date = new Date()
    // 延迟执行
    setTimeout(function () {
        if (date.getHours() < 12) {
            // 12点之前打上班卡
            Punch(config.InWorkUrl, '上班')
        } else {
            // 12点之后打下班卡
            Punch(config.OutWorkUrl, '下班')
        }
    }, ( minutes * 60 + second ) * 1000)

}

new cronJob('0 30 8,18 * * 1-5', function () {
    launch()
}, null, true, 'Asia/Shanghai')
