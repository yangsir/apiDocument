apiSelect["userlogin"] = {
    Login: {
        title: '用户登录',
        uri: '/Index/Login/',
        type: 'post',
        dataType: 'json',
        params:{
            'username':'username(用户名)',
            'password':'password(密码)',
        },
        comment:{
            data:{
                "user_id":"1",
                "username": "webyang.net",
                "nickname": "webyang.net",
                "headimage": "/Uploads/UserHead/eb0b81ecc586b8a291ef3b2385a64606.jpg",
            }
        },
    },

    AutoLogin: {
        title: '用户自动登录',
        uri: '/Index/autoLogin/',
        type: 'post',
        dataType: 'json',
        params:{
            'login_token':'login_token',
        },
        comment:{
        },
    },
};

runGroup("userlogin");
