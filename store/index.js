import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            data: 0
        },
        mutations: {

        },
        actions: {

        },
        getters: {
            getDatatest: function (state) {
                console.log("HIT SEARCH!")
                return state.data
            }
        }


    })
}

export default createStore