<template>
<div class="container-fulid paddingAll">
    <div class="row">
        <div class="col-8">
            <div>
                <h1>Property-project</h1>
            </div>
            <div class="row">
                <div v-for="product in product" :key="product">
                    <div class="'col-xl-4 col-md-4 col-sm-6 col-6">
                        <div class="card" style="width: 350px">
                            <div class="card-img">
                                <img :src="product.image" :alt="title" />
                            </div>
                            <div class="card-content">
                                <h3 class="card-name">
                                    {{product.title}}
                                </h3>
                                <div class="card-features ">
                                    <ul class="listnone">
                                        <li>{{product.description}}</li>
                                    </ul>
                                </div>
                                <div class="text-danger">00:00:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4" id="spaceTop">
            <CardSearch/>
        </div>
    </div>
</div>
</template>

<script>

const CardSearch = () =>
    import ('@/components/Cards/CardSearch')
const Date = () => new Date()

export default {
    title: 'property-project',
    components: {
        CardSearch
    },
    data() {
        return {
            product: [{
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
        }
    },
    methods: {

    }
}
</script>

<style>
#spaceTop {
    margin-top: 4.5%;
}

.paddingAll {
    padding: 5%;
}
</style>
