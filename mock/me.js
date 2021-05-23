import Mock from 'mockjs';

export default [{
    url: '/getMessageList',
    type: 'get',
    response: res => {
        console.log(res)
        var pageIndex = res.body.pageIndex;
        var List = [];
        if (pageIndex < 5) {
            for (let i = 0; i < 10; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    url: "@Image('300x300','@color','啦啦啦')",
                    title: "@ctitle(10,50)",
                    isReade: '@boolean',
                    time: '@datetime',
                    type: '@ctitle(7,7)'
                }))
            }
        }
        return {
            code: 300000,
            data: List
        }
    }
}, {
    url: '/getImportantMessageList',
    type: 'get',
    response: res => {
        console.log(res)
        var pageIndex = res.body.pageIndex;
        var List = [];
        if (pageIndex < 5) {
            for (let i = 0; i < 10; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    url: "@Image('300x300','@color','啦啦啦')",
                    title: "@ctitle(10,50)",
                    isReade: '@boolean',
                    time: '@datetime',
                    type: '@ctitle(7,7)'
                }))
            }
        }
        return {
            code: 300000,
            data: List
        }
    }
}, {
    url: '/getRemindList',
    type: 'get',
    response: res => {
        console.log(res)
        var pageIndex = res.body.pageIndex;
        var List = [];
        if (pageIndex < 5) {
            for (let i = 0; i < 10; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    url: "@Image('300x300','@color','啦啦啦')",
                    title: "@ctitle(10,50)",
                    isReade: '@boolean',
                    time: '@datetime',
                    type: '@ctitle(7,7)'
                }))
            }
        }
        return {
            code: 300000,
            data: List
        }
    }
}, {
    url: '/getHonorList',
    type: 'get',
    response: res => {
        console.log(res)
        var pageIndex = res.body.pageIndex;
        var List = [];
        if (pageIndex < 5) {
            for (let i = 0; i < 10; i++) {
                var children = [];
                for (let j = 0; j < 5; j++) {
                    children.push(Mock.mock({
                        id: '@increment',
                        title: "@ctitle(10,50)",
                        isReade: '@boolean',
                        time: '@datetime',
                        type: '@ctitle(7,7)',
                        url: "@Image('187x263','@color','mockjs')"
                    }))
                }
                List.push(Mock.mock({
                    id: '@increment',
                    title: "@ctitle(6,6)",
                    isReade: '@boolean',
                    time: '@datetime',
                    type: '@ctitle(7,7)',
                    children: children
                }))
            }
        }
        return {
            code: 300000,
            data: List
        }
    }
}, {
    url: '/getIntegralTypeList',
    type: 'get',
    response: res => {
        console.log(res)
        var List = [];
        for (let i = 0; i < 10; i++) {
            List.push(Mock.mock({
                id: '@increment',
                url: "@Image('300x300','@color','啦啦啦')",
                title: "@ctitle(2,5)",
                isReade: '@boolean',
                time: '@datetime',
                type: '@ctitle(7,7)'
            }))
        }
        return {
            code: 300000,
            data: List
        }
    }
}, {
    url: '/getIntegralList',
    type: 'get',
    response: res => {
        console.log(res)
        var List = [];
        for (let i = 0; i < 10; i++) {
            List.push(Mock.mock({
                id: '@increment',
                url: "@Image('300x300','@color','啦啦啦')",
                title: "@ctitle(12,55)",
                isReade: '@boolean',
                time: '@datetime',
                type: '@ctitle(7,7)'
            }))
        }
        return {
            code: 300000,
            data: List
        }
    }
}, ]