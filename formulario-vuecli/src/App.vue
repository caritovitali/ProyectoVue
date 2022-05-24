<template>
  <div id="app">
    <div class="flex p-12 w-full items-center justify-center ">
           <Formulario @submit-formulario="guardarPersona" />
                   
    </div>
    <div class="flex p-12 px-56 w-full items-center justify-center ">
         <TablaPersonas :personas="personas" />
    </div>

  </div>
</template>

<script>
import Formulario from './components/Formulario.vue'
import TablaPersonas from './components/TablaPersonas.vue'
export default {
  name: 'App',
  components: {
    Formulario,TablaPersonas
  
  },data(){
    return{
      personas:[]
    

    }
  },methods:{
    guardarPersona(data){
      this.personas.push(data);

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
