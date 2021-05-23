import Cookies from 'js-cookie'

const TokenKey = 'ym_token'
const Uid = 'ym_uid'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function getUid() {
    return Cookies.get(Uid)
}

export function setUid(uid) {
    return Cookies.set(Uid, uid)
}

export function removeUid() {
    return Cookies.remove(Uid)
}