import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            name: 'Guest'
        },
        mutations: {

        },
        actions: {

        },
        getters: {
            getName: function (state) {
                return state.name
            }
        }


    })
}

export default createStore