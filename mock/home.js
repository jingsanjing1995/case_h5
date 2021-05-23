import Mock from 'mockjs';

// 其他分类
export default [{
        url: '/getClassifiedList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [{
                id: 1,
                name: "一级分类1",
                children: [{
                    id: 11,
                    parentId: "1",
                    name: "一级子级1",
                    disabled: false
                }, {
                    id: 12,
                    parentId: "1",
                    name: "一级子级2",
                    disabled: false
                }, {
                    id: 13,
                    parentId: "1",
                    name: "一级子级3",
                    disabled: false
                }, {
                    id: 14,
                    parentId: "1",
                    name: "一级子级4",
                    disabled: false
                }, {
                    id: 15,
                    parentId: "1",
                    name: "一级子级5",
                    disabled: false
                }]
            }, {
                id: 2,
                name: "二级分类2",
                children: [{
                    id: 21,
                    parentId: "2",
                    name: "二级子级1",
                    disabled: false
                }, {
                    id: 22,
                    parentId: "2",
                    name: "二级子级2",
                    disabled: false
                }, {
                    id: 23,
                    parentId: "2",
                    name: "二级子级3",
                    disabled: false
                }]
            }, {
                id: 3,
                name: "三级分类3",
                children: [{
                    id: 31,
                    parentId: "3",
                    name: "三级子级1",
                    disabled: false
                }, {
                    id: 32,
                    parentId: "3",
                    name: "三级子级2",
                    disabled: false
                }, {
                    id: 33,
                    parentId: "3",
                    name: "三级子级3",
                    disabled: false
                }]
            }];
            return {
                code: 300000,
                data: List
            }
        }
    },
    // 我的分类
    {
        url: '/getMyClassifiedList',
        type: 'get',
        response: res => {
            console.log(res)
            var Obj = {
                id: 1,
                name: "我的分类",
                children: [{
                        id: 91,
                        name: "我的分类1",
                        disabled: true
                    },
                    //  {
                    //     id: 92,
                    //     name: "我的分类2",
                    //     disabled: true
                    // }, {
                    //     id: 93,
                    //     name: "我的分类3",
                    //     disabled: true
                    // }, {
                    //     id: 94,
                    //     name: "我的分类4",
                    //     disabled: true
                    // }, {
                    //     id: 95,
                    //     name: "我的分类5",
                    //     disabled: true
                    // }
                ]
            }
            return {
                code: 300000,
                data: Obj
            }
        }
    },
    {
        url: '/getPageClassifiedList',
        type: 'get',
        response: res => {
            console.log(res)
            var Lists = [];
            for (let j = 0; j < 5; j++) {
                var List = [];
                for (let i = 0; i < 5; i++) {
                    List.push(Mock.mock({
                        id: '@increment',
                        timestamp: +Mock.Random.date('T'),
                        author: '@first',
                        reviewer: '@first',
                        name: '@ctitle(2, 4)',
                        content_short: 'mock data',
                        forecast: '@float(0, 100, 2, 2)',
                        importance: '@integer(1, 3)',
                        'type|1': ['CN', 'US', 'JP', 'EU'],
                        'status|1': ['published', 'draft', 'deleted'],
                        display_time: '@datetime',
                        comment_disabled: true,
                        pageviews: '@integer(300, 5000)',
                        platforms: ['a-platform']
                    }))
                }
                Lists.push(Mock.mock({
                    id: '@increment',
                    timestamp: +Mock.Random.date('T'),
                    author: '@first',
                    reviewer: '@first',
                    name: '@ctitle(2, 4)',
                    content_short: 'mock data',
                    forecast: '@float(0, 100, 2, 2)',
                    importance: '@integer(1, 3)',
                    'type|1': ['CN', 'US', 'JP', 'EU'],
                    'status|1': ['published', 'draft', 'deleted'],
                    display_time: '@datetime',
                    comment_disabled: true,
                    pageviews: '@integer(300, 5000)',
                    platforms: ['a-platform'],
                    children: List
                }))
            }

            return {
                code: 300000,
                data: Lists
            }
        }
    },
    {
        url: '/getSelectCategoryList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 10; i++) {
                List.push(Mock.mock({
                    id: i + 1,
                    timestamp: +Mock.Random.date('T'),
                    author: '@first',
                    reviewer: '@first',
                    label: '分类' + i,
                    content_short: 'mock data',
                    forecast: '@float(0, 100, 2, 2)',
                    importance: '@integer(1, 3)',
                    'type|1': ['CN', 'US', 'JP', 'EU'],
                    'status|1': ['published', 'draft', 'deleted'],
                    display_time: '@datetime',
                    comment_disabled: true,
                    pageviews: '@integer(300, 5000)',
                    platforms: ['a-platform'],
                    value: i + 1
                }))
            }
            return {
                code: 300000,
                data: List
            }
        }
    },
    {
        url: '/getRotationList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 8; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    url: "@Image('300x300','@color','啦啦啦')"
                }))
            }
            return {
                code: 300000,
                data: List
            }
        }
    },
    {
        url: '/getMenuList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            // for (let i = 0; i < 12; i++) {
            //     List.push(Mock.mock({
            //         id: '@increment',
            //         url: "@Image('50x50','@color','mockjs')",
            //         title: "@ctitle(4,4)",
            //         text: "@cparagraph"
            //     }))
            // }
            List.push({
                id: '@increment',
                url: "@Image('50x50','@color','mockjs')",
                title: "重要通知",
                type: 1,
            }, {
                id: '@increment',
                url: "@Image('50x50','@color','mockjs')",
                title: "初级内容",
                type: 2,
            }, {
                id: '@increment',
                url: "@Image('50x50','@color','mockjs')",
                title: "中级内容",
                type: 3,
            }, {
                id: '@increment',
                url: "@Image('50x50','@color','mockjs')",
                title: "高级内容",
                type: 4,
            }, {
                id: '@increment',
                url: "@Image('50x50','@color','mockjs')",
                title: "课程",
                type: 5,
            }, {
                id: '@increment',
                url: "@Image('50x50','@color','mockjs')",
                title: "模拟考试",
                type: 6,
            }, {
                id: '@increment',
                url: "@Image('50x50','@color','mockjs')",
                title: "考试任务",
                type: 7,
            }, {
                id: '@increment',
                url: "@Image('50x50','@color','mockjs')",
                title: "挑战答题",
                type: 8,
            }, {
                id: '@increment',
                url: "@Image('50x50','@color','mockjs')",
                title: "每日一练",
                type: 9,
            }, {
                id: '@increment',
                url: "@Image('50x50','@color','mockjs')",
                title: "错题练习",
                type: 10,
            }, {
                id: '@increment',
                url: "@Image('50x50','@color','mockjs')",
                title: "学习排名",
                type: 11,
            }, )
            return {
                code: 300000,
                data: List
            }
        }
    },
    {
        url: '/getHotQuestionsList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 8; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    title: "@ctitle(5,40)",
                    number: "@increment(10)",
                    answer: "@boolean()"
                }))
            }
            return {
                code: 300000,
                data: List
            }
        }
    },
    {
        url: '/getCourseList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 6; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    url: "@Image('261x149','@color','mockjs')",
                    title: "@ctitle(5,40)",
                    detail: "@ctitle(5,40)"
                }))
            }
            return {
                code: 300000,
                data: List
            }
        }
    },
    {
        url: '/getMockExamList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 8; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    url: "@Image('261x149','@color','mockjs')",
                    title: "@ctitle(5,40)",
                    number: "@increment(10)",
                    answer: "@boolean()"
                }))
            }
            return {
                code: 300000,
                data: List
            }
        }
    }, {
        url: '/getDepartmentList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 3; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    url: "@Image('261x149','@color','mockjs')",
                    title: "@ctitle(5,40)",
                    detail: "@ctitle(5,40)"
                }))
            }
            return {
                code: 300000,
                data: List
            }
        }
    }, {
        url: '/getHomeWorkImgList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 8; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    url: "@Image('300x300','@color','mockjs')"
                }))
            }
            return {
                code: 300000,
                data: List
            }
        }
    },
    {
        url: '/getMenuHomeWorkList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 8; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    url: "@Image('50x50','@color','mockjs')"
                }))
            }
            return {
                code: 300000,
                data: List
            }
        }
    },
    {
        url: '/getHotQuestionsHomeWorkList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 8; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    title: "@ctitle(5,60)",
                    number: "@increment(10)",
                    answer: "@boolean()"
                }))
            }
            return {
                code: 300000,
                data: List
            }
        }
    },
    {
        url: '/getCourseWorkList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 5; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    url: "@Image('261x149','@color','mockjs')",
                    title: "@ctitle(5,40)",
                    detail: "@ctitle(5,40)"
                }))
            }
            return {
                code: 300000,
                data: List
            }
        }
    },
    {
        url: '/getMockExamWorkList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 8; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    url: "@Image('261x149','@color','mockjs')",
                    title: "@ctitle(5,40)",
                    number: "@increment(10)",
                    answer: "@boolean()"
                }))
            }
            return {
                code: 300000,
                data: List
            }
        }
    },
    {
        url: '/getRecommendCourseList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 5; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    url: "@Image('261x149','@color','mockjs')",
                    title: "@ctitle(5,40)",
                    detail: "@ctitle(5,40)"
                }))
            }
            return {
                code: 300000,
                data: List
            }
        }
    }, {
        url: '/getHotWordsList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 5; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    url: "@Image('261x149','@color','mockjs')",
                    title: "@ctitle(5,10)",
                    detail: "@ctitle(5,40)"
                }))
            }
            List.push({
                id: '@increment',
                url: "@Image('261x149','@color','mockjs')",
                title: "输入这个有结果",
                detail: "@ctitle(5,40)"
            })
            return {
                code: 300000,
                data: List
            }
        }
    },
]