import { login, logout } from '@/api/session'

const session = {
    state: {
        token: '',
        user: {},
        isLogin: false,
    },
    mutations: {
        login(state, user) {
            state.user = user
            state.token = user.auth_token
            state.isLogin = true
        },
        logout(state) {
            state.user = {}
            state.isLogin = false
            state.token = ''
        },
    },
    actions: {
        login({ commit }, userInfo) {
            let { cellphone, password } = userInfo
            return login(cellphone, password).then(data => {
                commit('login', data.data)
            })
        },
        logout({ commit }) {
            return logout().then(() => commit('logout'), () => commit('logout'))
        }
    }
}

export default session