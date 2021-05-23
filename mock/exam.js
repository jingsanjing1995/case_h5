import Mock from 'mockjs';

export default [{
    url: '/getMockExamIsList',
    type: 'get',
    response: res => {
        console.log(res)
        var List = [];
        for (let k = 0; k < 8; k++) {
            var list = [];
            for (let i = 0; i < 3; i++) {
                list.push(Mock.mock({
                    id: '@increment',
                    title: '@ctitle(2, 24)',
                    number: "@increment(10)",
                    precent: "@natural(1,100)",
                    name: '@ctitle(4)',
                    type: k + 1,
                }))
            }
            List.push(Mock.mock({
                id: '@increment',
                title: '@ctitle(2, 4)',
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
}, {
    url: '/getMockExamDetail',
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
    url: '/getMockExamQuestionsList',
    type: 'get',
    response: res => {
        console.log(res)
        var List = [];
        for (let k = 0; k < 8; k++) {
            var list = [];
            for (let i = 0; i < 4; i++) {
                list.push(Mock.mock({
                    id: '@increment',
                    title: '@ctitle(2, 24)',
                    number: "@increment(10)",
                    precent: "@natural(1,100)",
                    name: '@ctitle(4)',
                }))
            }
            List.push(Mock.mock({
                id: '@increment',
                title: '@ctitle(20, 150)',
                number: "@increment(10)",
                precent: "@natural(1,100)",
                children: list,
                type: "@pick(['1', '2', '3', '4'])",
            }))
        }

        return {
            code: 300000,
            data: List
        }
    }
}, {
    url: '/getMockExamTaskList',
    type: 'get',
    response: res => {
        console.log(res)
        var List = [];
        for (let k = 0; k < 4; k++) {
            var list = [];
            for (let i = 0; i < 6; i++) {
                list.push(Mock.mock({
                    id: '@increment',
                    title: '@ctitle(2, 24)',
                    number: "@increment(10)",
                    name: '@ctitle(4)',
                    isAnswer: "@boolean()"
                }))
            }
            List.push(Mock.mock({
                id: '@increment',
                title: "@pick(['1', '2', '3', '4'])" + "月",
                children: list,
            }))
        }

        return {
            code: 300000,
            data: List
        }
    }
}, {
    url: '/getWrongExamQuestionsList',
    type: 'get',
    response: res => {
        console.log(res)
        var List = [];
        for (let k = 0; k < 18; k++) {
            var list = [];
            for (let i = 0; i < 4; i++) {
                list.push(Mock.mock({
                    id: '@increment',
                    title: '@ctitle(2, 24)',
                    number: "@increment(10)",
                    precent: "@natural(1,100)",
                    name: '@ctitle(4)',
                }))
            }
            List.push(Mock.mock({
                id: '@increment',
                title: '@ctitle(20, 150)',
                number: "@increment(10)",
                precent: "@natural(1,100)",
                children: list,
                type: "@pick(['1', '2', '3', '4'])",
            }))
        }

        return {
            code: 300000,
            data: List
        }
    }
}, {
    url: '/getQuestionsRowList',
    type: 'get',
    response: res => {
        console.log(res)
        var List = [];
        for (let i = 0; i < 20; i++) {
            List.push(Mock.mock({
                id: '@increment',
                url: "@Image('80x80','@color','mockjs')",
                title: "@ctitle(10,34)",
                detail: "@ctitle(10,30)",
                text: "@cparagraph",
                name: "@cname(2,3)",
                number: "@increment(10)",
                integral: "@increment(10)"
            }))
        }
        return {
            code: 300000,
            data: List
        }
    }
}, {
    url: '/getStudyRowList',
    type: 'get',
    response: res => {
        console.log(res)
        var List = [];
        for (let i = 0; i < 20; i++) {
            List.push(Mock.mock({
                id: '@increment',
                url: "@Image('80x80','@color','mockjs')",
                title: "@ctitle(5,5)",
                detail: "@ctitle(10,30)",
                text: "@cparagraph",
                name: "@cname(2,3)",
                number: "@increment(10)",
                integral: "@increment(10)"
            }))
        }
        return {
            code: 300000,
            data: List
        }
    }
}, {
    url: '/getUserRowList',
    type: 'get',
    response: res => {
        console.log(res)
        var List = [];
        for (let i = 0; i < 20; i++) {
            List.push(Mock.mock({
                id: '@increment',
                url: "@Image('80x80','@color','mockjs')",
                title: "@ctitle(5,5)",
                detail: "@ctitle(10,30)",
                text: "@cparagraph",
                name: "@cname(2,3)",
                number: "@increment(10)",
                integral: "@increment(10)"
            }))
        }
        return {
            code: 300000,
            data: List
        }
    }
}, ]