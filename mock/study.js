import Mock from 'mockjs';

export default [{
        url: '/getstudyList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let k = 0; k < 8; k++) {
                var list = [];
                for (let i = 0; i < 3; i++) {
                    var children = [];
                    for (let j = 0; j < 1; j++) {
                        children.push(Mock.mock({
                            id: '@increment',
                            title: '@ctitle(2, 4)',
                            detail: '@ctitle(12, 24)',
                            number: "@increment(10)",
                            precent: "@natural(1,100)",
                        }))
                    }
                    list.push(Mock.mock({
                        id: '@increment',
                        title: '@ctitle(2, 4)',
                        detail: '@ctitle(12, 24)',
                        number: "@increment(10)",
                        precent: "@natural(1,100)",
                        name: '@ctitle(4)',
                        children: children,
                        type: k + 1,
                    }))
                }
                List.push(Mock.mock({
                    id: '@increment',
                    title: '@ctitle(2, 4)',
                    detail: '@ctitle(12, 24)',
                    number: "@increment(10)",
                    precent: "@natural(1,100)",
                    children: list,
                    type: k + 1,
                }))
            }

            return {
                code: 300000,
                data: List
            }
        }
    },
    {
        url: '/getSearchStudyList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            if (res.body.value == "输入这个有结果") {
                for (let k = 0; k < 8; k++) {
                    var list = [];
                    for (let i = 0; i < 3; i++) {
                        var children = [];
                        for (let j = 0; j < 1; j++) {
                            children.push(Mock.mock({
                                id: '@increment',
                                title: '@ctitle(2, 4)' + "输入这个有结果" + '@ctitle(2, 4)',
                                detail: '@ctitle(12, 24)',
                                number: "@increment(10)",
                                precent: "@natural(1,100)",
                            }))
                        }
                        list.push(Mock.mock({
                            id: '@increment',
                            title: '@ctitle(2, 10)' + "输入这个有结果" + '@ctitle(2, 4)',
                            detail: '@ctitle(2, 10)' + "输入这个有结果" + '@ctitle(2, 4)',
                            number: "@increment(10)",
                            precent: "@natural(1,100)",
                            name: '@ctitle(4)',
                            children: children,
                            type: k + 1,
                        }))
                    }
                    List.push(Mock.mock({
                        id: '@increment',
                        title: '@ctitle(2, 4)' + "输入这个有结果" + '@ctitle(2, 4)',
                        detail: '@ctitle(2, 4)' + "输入这个有结果" + '@ctitle(2, 4)',
                        number: "@increment(10)",
                        precent: "@natural(1,100)",
                        children: list,
                        type: k + 1,
                    }))
                }
            }


            return {
                code: 300000,
                data: List
            }
        }
    },
    {
        url: '/getstudyDetail',
        type: 'get',
        response: res => {
            console.log(res)
            var obj = {};

            var children = [];
            for (let j = 0; j < 10; j++) {
                children.push(Mock.mock({
                    id: '@increment',
                    title: '@ctitle(2, 12)',
                    number: "@increment(10)",
                    precent: "@natural(1,100)",
                }))
            }

            obj = Mock.mock({
                id: '@increment',
                title: '@ctitle(2, 4)',
                number: "@increment(10)",
                precent: "@natural(1,100)",
                name: '@ctitle(4)',
                children: children,
                type: 3,
            })
            return {
                code: 300000,
                data: obj
            }
        }
    }, {
        url: '/getStudyLatelyList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 3; i++) {
                var children = [];
                for (let j = 0; j < 10; j++) {
                    children.push(Mock.mock({
                        id: '@increment',
                        title: '@ctitle(10, 32)',
                        number: "@increment(10)",
                        precent: "@natural(1,100)",
                        url: "@Image('300x300','@color','mockjs')"
                    }))
                }
                List.push(Mock.mock({
                    id: '@increment',
                    title: '@ctitle(2, 4)',
                    number: "@increment(10)",
                    precent: "@natural(1,100)",
                    name: '@ctitle(4)',
                    children: children,
                    type: 3,
                }))
            }

            return {
                code: 300000,
                data: List
            }
        }
    }, {
        url: '/getMyCollectionList',
        type: 'get',
        response: res => {
            console.log(res)
            var List = [];
            for (let i = 0; i < 8; i++) {
                List.push(Mock.mock({
                    id: '@increment',
                    url: "@Image('200x150','@color','mockjs')",
                    title: "@ctitle(10,34)",
                    detail: "@ctitle(10,30)",
                    text: "@cparagraph"
                }))
            }
            return {
                code: 300000,
                data: List
            }
        }
    },
]