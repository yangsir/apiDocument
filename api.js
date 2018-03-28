var apis = {
    Userlogin: '登录注册退出及找回密码模块',
    Index: '首页模块',
}

var comments = {
    token: '唯一识别token',
    status: '接口状态，1为成功无异常，0为失败',
    message: '消息说明',
    code: '有错误信息时的错误代码'
}

var apiSelect = {};
function runGroup(group) {
    if (typeof apiSelect[group] === 'undefined') {
        return;
    }

    var selectHtml = '';
    for (i in apiSelect[group]) {
        selectHtml += '<option value="' + group + '-' + i + '">' + apiSelect[group][i].title + '</option>';
    }
    $('#api_select').html(selectHtml).select2().change();
}
