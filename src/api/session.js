import { fetch } from '../utils/http'

export function login(cellphone, password) {
    return fetch({
        url: '/session',
        method: 'post',
        data: { cellphone, password },
    })
}

export function logout() {
    return fetch({
        url: '/session',
        method: 'delete'
    })
}