import Vue from 'vue'
import Vuex from 'vuex'
import session from './modules/session'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

const persistWhiteList = ['login', 'logout']

const persistOptions = {
    // storage: {
    //     getItem: key => Cookies.get(key),
    //     setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
    //     removeItem: key => Cookies.remove(key)
    // },
    filter(mutation) {
        return persistWhiteList.indexOf(mutation.type) != -1
    }
}

const store = new Vuex.Store({
    modules: {
        session
    },
    plugins: [
        createPersistedState(persistOptions)
    ]
})

export default store
