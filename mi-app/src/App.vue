<template>
  <div id="app">
    <div class="flex p-12 w-full">
        <TablaProductos 
        v-for="(item,i) in tablas" :key="i"
        :titulos="item.titulos" :registros="item.registros" :estilosHeader="item.estilosHeader" :estilosBody="item.estilosBody" />
    </div>
  </div>
</template>

<script>
import TablaProductos from './components/TablaProductos.vue'

export default {
  name: 'App',
  components: {
    TablaProductos
  },data(){
    return{
       
tablas:[
         {
        titulos: ["ID", "Artículo", "Stock", "Precio"],
        registros: [
            ["Macbook Pro", "10", "$120000"],
            ["Dell", "8", "$100000"],
            ["Lenovo", "12", "$90000"],
            ["HP", "6", "$80000"],
        ],
        estilosHeader:"bg-gray-600",
        estilosBody:"bg-gray-800"
    },{
        titulos: ["ID", "Artículo", "Stock", "Precio"],
        registros: [
            ["Iphone XR", "20", "$100000"],
            ["Samsung S20", "12", "$150000"],
            ["Motorola", "20", "$70000"],
            ["Huawei", "10", "$90000"],
        ],
        estilosHeader:"bg-gray-800 ",
        estilosBody:"bg-gray-600"
    }, {
        titulos: ["ID", "Artículo", "Stock", "Precio"],
        registros: [
            ["Smartwatch Garmin", "15", "$80000"],
            ["Xiaomi My Watch", "25", "$40000"],
            ["Xiaomi Mi Band", "22", "$20000"],
            ["Apple Watch", "14", "$100000"],
        ],
        estilosHeader:"bg-gray-400 text-white",
        estilosBody:"bg-gray-200"
    },
     ]

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
