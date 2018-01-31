import axios from 'axios'
import { BASE_URL } from '../config/env'
import store from '../store'
import { Message, Notification } from 'element-ui'

const addAuthorization = config => {
    let token = store.state.session.token
    if (token) {
        config.headers.Authorization = token
    }
}

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 10 * 1000;

axios.interceptors.request.use(
    config => {
        addAuthorization(config)
        console.log('%c 发起请求 =====>', 'color: #4CAF50; font-weight: bold', config)
        return config
    },
    error => {
        console.log('%c 请求错误 =====>', 'color: #EC6060; font-weight: bold', error)
        return Promise.reject(error)
    });

axios.interceptors.response.use(
    response => {
        console.log('%c <===== 收到响应', 'color: #4CAF50; font-weight: bold', response)
        return response
    },
    error => {
        console.log('%c <===== 响应错误', 'color: #EC6060; font-weight: bold', error)
        return Promise.resolve(error.response)
    });

/**
 * 
 * 检查HTTP状态码
 */
function checkStatus(response) {
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response
    }
    // 异常状态下，把错误信息传下去
    return {
        status: -404,
        msg: '网络异常'
    }
}

/**
 * 
 * 检查请求错误，包括网络错误，服务器错误，后端抛出的错误。收到错误弹出一个提示
 */
function checkCode(res) {
    if (res.status === -404) {
        Notification.error({
            title: '错误',
            message: res.msg,
            duration: 0
        })
        throw new Error(res.msg)
    }
    if (res.data && (res.data.meta.code != 0)) {
        Notification.error({
            title: '错误',
            message: res.data.meta.msg,
        })
        throw new Error(res.data.meta.msg)
    }
    return res.data
}

export const get = (url, params = {}) => {
    return fetch({
        url,
        method: 'get',
        params
    })
}

export const post = (url, data = {}) => {
    return fetch({
        url,
        method: 'post',
        data
    })
}

export const patch = (url, data = {}) => {
    return fetch({
        url,
        method: 'patch',
        data
    })
}

export const destroy = (url, data = {}) => {
    return fetch({
        url,
        method: 'delete',
        data
    })
}

export const fetch = (options) => {
    return axios(options)
        .then(response => checkStatus(response))
        .then(res => checkCode(res))
}