import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            name: 'Guest',
            product: [
                {
                    id: 1,
                    image: 'images/blog-img-1.jpg',
                    title: 'test Vuex',
                    description: 'hahahah',
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
                }, {
                    id: 7,
                    image: 'images/blog-img-1.jpg',
                    title: 'Proporty7',
                    description: 'Proporty detail 7',
                }, {
                    id: 8,
                    image: 'images/blog-img-1.jpg',
                    title: 'Proporty8',
                    description: 'Proporty detail 8',
                },
            ],
        },
        mutations: {

        },
        actions: {

        },
        getters: {
            getName: function (state) {
                return state.name
            },
            getProduct: function (state) {
                return state.product
            }
        }


    })
}

export default createStore