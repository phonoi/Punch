# -Punch
 Punch for zsy

# 使用

1. clone项目并在根目录下创建config.js文件，并复制下列代码，修改对应信息

2. 进入src/shell目录，执行命令

```shell
nohup ./monitorNode.sh &
```

```javascript

module.exports = {
    user: {
        loginUrl: 'https://www.xxx.com/login', // 登陆url
        form: {
            'client': 'xxx', // 登陆表单需要的信息
            'username': 'xxx',
            'password': 'xxx',
            '提交': '登录'
        }
    },
    InWorkUrl: 'https://www.xxx.com/inworkUrl', // 上班卡请求
    OutWorkUrl: 'https://www.xxx.com/outworkurl', // 下班卡请求
    fromEmail: {
        service: 'QQ',
        user: 'xxx@qq.com', // 发件人邮箱
        passCode: 'xxx', // 发件人邮箱第三方登录授权码
    },
    message: {
        to: 'xxx@qq.com', // 收件人邮箱，多个邮箱用逗号隔开
        cc: 'xxx@qq.com', // 抄送人邮箱，同上
        subject: '打卡信息', // 邮件主题
        text: '打卡出错!', // 邮件内容
        html: '', // 邮件html
        watchHtml: '', // Apple Watch specific HTML body 苹果手表指定HTML格式
        attachments: [], // An array of attachments 附件
    },
    service: {// 非必填，仅仅用于方便更新代码，如果不使用pub功能，则无需填写
        host: 'xx.xxx.xx.xx', // 远程主机地址
        port: 22, // 远程主机端口
        type: 'sftp', // 传输方式
        username: 'root', // 登陆用户
        password: 'xxx' // 密码
    }
}

```
