const tokens = {
    '15901203132': 'admin-token',
    '123456': 'editor-token'
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}

export default [
    // user login
    {
        url: '/user/login',
        type: 'post',
        response: config => {

            const { modilePhone } = config.body
            const token = tokens[modilePhone]
            console.log(token)
                // mock error
            if (!token) {
                return {
                    code: 60204,
                    message: 'Account and password are incorrect.'
                }
            }

            return {
                code: 300000,
                data: { serviceToken: token }
            }
        }
    },

    // get user info
    {
        // eslint-disable-next-line
        url: '/user/info\.*',
        type: 'get',
        response: config => {
            console.log(config)
            const { token } = config.query
            const info = users[token]
            console.log(info)
                // mock error
            if (!info) {
                return {
                    code: 50008,
                    message: 'Login failed, unable to get user details.'
                }
            }

            return {
                code: 300000,
                data: info
            }
        }
    },

    // user logout
    {
        url: '/user/logout',
        type: 'post',
        response: _ => {
            console.log(_)
            return {
                code: 200,
                data: 'success'
            }
        }
    }
]