<template>
    <div>
        <h1>{{ title }}</h1>
        <product-list-one v-bind:products="products"></product-list-one>
        <product-list-two v-bind:products="products"></product-list-two>
    </div>
</template>

<script>
    import ProductListOne from './components/ProductListOne.vue'
    import ProductListTwo from './components/ProductListTwo.vue'
    export default {
        components: {
            'product-list-one': ProductListOne,
            'product-list-two': ProductListTwo
        },
        data () {
            return {
                title: 'Here is the title',
                products: [
                    {name: 'Banana', price: 20},
                    {name: 'Shell', price: 40},
                    {name: 'Green', price: 60},
                    {name: 'Orange', price: 30}
                ]
            }
        }
    }
</script>

<style>


</style>
