export const state = () => ({
  product: [
    {
      id: 1,
      image: 'images/blog-img-1.jpg',
      title: 'Proporty1',
      description: 'Proporty detail 1',
    },
    {
      id: 2,
      image: 'images/blog-img-2.jpg',
      title: 'Proporty2',
      description: 'Proporty detail 2',
    },
    {
      id: 3,
      image: 'images/blog-img-3.jpg',
      title: 'Proporty3',
      description: 'Proporty detail 3',
    },
    {
      id: 4,
      image: 'images/blog-img-4.jpg',
      title: 'Proporty4',
      description: 'Proporty detail 4',
    },
    {
      id: 5,
      image: 'images/blog-img-5.jpg',
      title: 'Proporty5',
      description: 'Proporty detail 5',
    },
    {
      id: 6,
      image: 'images/blog-img-1.jpg',
      title: 'Proporty6',
      description: 'Proporty detail 6',
    },
    {
      id: 7,
      image: 'images/blog-img-1.jpg',
      title: 'Proporty7',
      description: 'Proporty detail 7',
    },
    {
      id: 8,
      image: 'images/blog-img-1.jpg',
      title: 'Proporty8',
      description: 'Proporty detail 8',
    },
  ],
  property: {},
})
export const actions = {
  async fetchPropertyList({ commit }) {
    try {
      const params = new URLSearchParams()
      // params.append('userId', todos.userId)
      // params.append('title', todos.title)
      // params.append('body', todos.body)

      const property = await this.$axios.$get(
        '/api/prooffer',
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
  getProduct({product}){
    return product
  }
}
