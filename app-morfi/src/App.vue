<template>
  <div id="app">

        <NavBar 
            :carrito="carrito"
            @ver-carrito="showCarritoModal" 
            @iniciar-sesion="login"
            @confirm-order="confirmOrder"

             />
 
         <router-view
          :productos="productos"
          :carrito="carrito"
          :usuario="usuario"
          @add-to-cart="updateCart"
         
         />
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import apiServices from '@/services/api.services';
export default {
  name: 'App',
  components: {
    NavBar,
  },data(){
    return{
      productos:[],
      carrito:[],
      showCarrito:false,
      showLogin:false,
      usuario:null,
       
    }
  },
 mounted() {
    this.getProductos();
    this.getCarrito();
  }
  
  ,methods:{
      async getProductos() {
    this.productos = await apiServices.getProductos();
  },
  login(user){

      this.usuario=user;
  },
     getCarrito() {
      this.cart = JSON.parse(localStorage.getItem('carrito')) || [];
    }, 
    showCarritoModal(data){
      this.showCarrito=data
    },
      closeCarritoModal(data){
      this.showCarrito=data
    },
      finalizarCompra(data){
      this.showCarrito=data
      this.carrito=[]
    },
    iniciarSesion(data){
      this.showSesion=data
    }  
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
