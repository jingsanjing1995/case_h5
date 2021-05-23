const BASE_URL = process.env.VUE_APP_BASE_API;
console.log(BASE_URL)
const API = {
    USER_LOGIN: BASE_URL + '/user/login',
    USER_INFO: BASE_URL + 'user/info',
    USER_LOGOUT: BASE_URL + 'user/logout',
    GET_CLASSIFIED_ENTRANCE: BASE_URL + 'article/list',
}

export default {
    BASE_URL,
    API
}