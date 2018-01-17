module.exports = {
    user: {
        loginUrl: 'https://www.zhisiyun.com/login',
        form: {
            'client': '1071',
            'username': 'MW0158',
            'password': 'zhy123456',
            '提交': '登录'
        }
    },
    InWorkUrl: 'https://www.zhisiyun.com/wxapp/001/do_clockInOut?op=in&short_name=%E6%9B%BC%E5%A8%81&longitude=121.404126&latitude=31.164439&distance=48.65&address_name=%E6%9B%BC%E5%A8%81%E4%B8%8A%E6%B5%B7%E8%80%83%E5%8B%A4%E5%9C%B0%E7%82%B9', 
    OutWorkUrl: 'https://www.zhisiyun.com/wxapp/001/do_clockInOut?op=out&short_name=%E6%9B%BC%E5%A8%81&longitude=121.404126&latitude=31.164439&distance=48.65&address_name=%E6%9B%BC%E5%A8%81%E4%B8%8A%E6%B5%B7%E8%80%83%E5%8B%A4%E5%9C%B0%E7%82%B9',
    fromEmail: {
        service: 'QQ',
        user: '2419601930@qq.com',
        passCode: 'pyjzhwlbectmdieg',
    },
    message: {
        to: '55708794@qq.com',
        cc: '44619417@qq.com',
        subject: '打卡信息报警',
        text: '打卡出错!',
        html: '',
        watchHtml: '',
        attachments: [],
    }
}