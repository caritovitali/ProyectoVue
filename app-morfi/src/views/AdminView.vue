<template>
<div></div>
</template>

<script>
import apiServices from '@/services/api.services';

export default {
  name: 'AdminView',
  
  data: () => ({
    products: []
  }),

  props: {
    user: {
      type: Object
    }
  },

  mounted() {
    this.getProducts();
  },
  
  methods: {

    // Si no hay un usuario admin loggeado, volver a home
    async getProducts() {
      if (this.user) this.products = await apiServices.getProducts();
      else this.$router.push('/')
    }
  }
}
</script>

<style>

</style>