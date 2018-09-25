export const state = () => ({
  propertyList: [],
  property: {},
  userDetail:{
    name:"Guest"
  }
})

export const actions = {
  async fetchPropertyList({ commit }) {
    try {
      // const params = new URLSearchParams()
      // params.append('userId', todos.userId)
      // params.append('title', todos.title)
      // params.append('body', todos.body)

      const property = await this.$axios.$get(
        '/api/propoty',
        // params,
      )
      commit('savePropertyList', property)
    } catch (error) {}
  },

  async fetchPropertysById({ commit }, id) {
    try {
      const property = await this.$axios.$get(`/api/propoty/${id}`)
      commit('saveProperty', property)
    } catch (error) {}
  },
}

export const mutations = {
  savePropertyList(state, item) {
    state.propertyList = item
  },
  saveProperty(state, property) {
    state.property = property
  },
}

export const getters = {
  getPropertyList({ propertyList }) {
    return propertyList
  },
  getProperty({ property }) {
    return property
  },
  getUserdetail({userDetail}){
    console.log(userDetail)
    return userDetail
  }
}
