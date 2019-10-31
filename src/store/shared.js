export default {
    state: {
        loading: false,
        error: null
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setEerror(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null
        },
    },
    actions: {
        setLoading({commit}, payload) {
            commit('setLoading', payload)
        },
        setEerror({commit}, payload) {
            commit('setEerror', payload)
        },
        clearError({commit}) {
            commit('clearError')
        }
    },
    getters: {
        loading(state) {
            return state.loading
        },
        error(state) {
            return state.error
        }

    }
}