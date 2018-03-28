apiSelect["index"] = {
    Index: {
        title: '应用首页',
        uri: '/Index/index/',
        type: 'post',
        dataType: 'json',
        comment:{
            data:{
                "advs": [
                    {
                        "id": "4",
                        "image_path": "/Uploads//Adv//57d8b91f881e6.jpg",
                        "title": "老司机带带我",
                        "url": "/About/index.html",
                    },
                    {
                        "id": "5",
                        "image_path": "/Uploads//Adv//57d8b926a7ede.jpg",
                        "title": "豪礼",
                        "url": "/Active.html?homepage=1",
                    }
                ],
            }
        },
    },

    newsDetail: {
        title: '获取新闻详情',
        uri: '/Index/getnew/',
        type: 'post',
        dataType: 'json',
        params:{
            'id' : 'id //新闻id',
        },
        comment:{
            data:{
                'title':'你好测试',     
                'content':'测试新闻主体',     
            }
        },
    },
};

runGroup("index");
