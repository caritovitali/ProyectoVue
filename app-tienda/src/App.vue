<template>
  <div id="app">
    <NavBar :carrito="carrito"
            @ver-carrito="showCarritoModal" />
    <div class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 my-10">
    <Producto v-for="(producto,i) in productos"
             :key="i"
             :producto="producto"
             @add-to-cart="updateCart" />
    </div>
     <CarritoModal v-show="showCarrito"
            :carrito="carrito"
             @cerrar-carrito="closeCarritoModal"
            @finalizar-compra="finalizarCompra" />
      <LoginView v-show="showSesion" @iniciar-sesion="iniciarSesion"  />


  </div>
</template>

<script>
import axios from 'axios'
import NavBar from './components/NavBar.vue'
import Producto from './components/productos/Producto.vue'
import CarritoModal from './components/carrito/CarritoModal.vue'
import LoginView from './components/LoginView.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Producto,
    CarritoModal,
    LoginView,
  },data(){
    return{
      productos:[],
      carrito:[],
      showCarrito:false,
      showSesion:true
       
    }
  },
  mounted(){
    this.getProductos()
  }
  
  ,methods:{
       async getProductos() {
      try {      
        const res = await axios.get('./data/productos.json')
        this.productos = await res.data
      } catch (err) { console.log (err) }
    },
    updateCart(productId) {
        const productInCart = this.carrito.find(producto => producto.id === productId)             
        if (productInCart) {
          productInCart.cantidad++;
          productInCart.total = productInCart.cantidad * productInCart.precio;
              
        } else {
          const findProduct = this.productos.find(producto => producto.id === productId);
          const newProduct = { ...findProduct };
          this.carrito.push({
            ...newProduct,
            cantidad: 1, 
            total: newProduct.precio
          })
        }
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
