import * as http from '../utils/http'

export function login(cellphone, password) {
    return http.post('/session', {cellphone, password})
}

export function logout(){
    return http.destroy('/session')
}