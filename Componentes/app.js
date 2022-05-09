Vue.component("tabla-productos", {
    props: {
        titulos: {
            type: Array,
            required: true
        },
        registros: {
            type: Array,
            required: true
        },
        estilosHeader: {
            type: String,
            required: true
        },
        estilosBody: {
            type: String,
            required: true
        },
        //TODO: implementar props para cambiar color de letra y fondo de la tabla
    },
    template: `
        <div class="p-12">
        <div class="overflow-auto lg:overflow-visible mt-32 w-full  ">
            <table class="table text-gray-400 border-separate space-y-6 text-sm ">
                <thead class="rounded-lg text-gray-300" :class="estilosHeader" >
                    <tr>
                        <th class="p-3" v-for="(item, i) in titulos" :key="i" scope="col">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="rounded-lg" :class="estilosBody" v-for="(registro, i) in registros" :key="i">
                        <th class="p-3">{{ i + 1 }}</th>
                        <th class="p-3" v-for="(row, r) in registro" :key="r">{{row}}</th>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    `
});
var app = new Vue({
    el: '#app',
    data: {
        tabla1: {
        titulos: ["ID", "Artículo", "Stock", "Precio"],
        registros: [
            ["Macbook Pro", "10", "$120000"],
            ["Dell", "8", "$100000"],
            ["Lenovo", "12", "$90000"],
            ["HP", "6", "$80000"],
        ],
        estilosHeader:"bg-gray-600",
        estilosBody:"bg-gray-800"
    },
    tabla2: {
        titulos: ["ID", "Artículo", "Stock", "Precio"],
        registros: [
            ["Iphone XR", "20", "$100000"],
            ["Samsung S20", "12", "$150000"],
            ["Motorola", "20", "$70000"],
            ["Huawei", "10", "$90000"],
        ],
        estilosHeader:"bg-gray-800 ",
        estilosBody:"bg-gray-600"
    },
    tabla3: {
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
    
    },
    template: `
    <div class="flex p-12 w-full">
        <tabla-productos :titulos="tabla1.titulos" :registros="tabla1.registros" :estilosHeader="tabla1.estilosHeader" :estilosBody="tabla1.estilosBody" ></tabla-productos>
        <tabla-productos :titulos="tabla2.titulos" :registros="tabla2.registros" :estilosHeader="tabla2.estilosHeader" :estilosBody="tabla2.estilosBody" ></tabla-productos>
        <tabla-productos :titulos="tabla3.titulos" :registros="tabla3.registros" :estilosHeader="tabla3.estilosHeader" :estilosBody="tabla3.estilosBody" ></tabla-productos>
     
    </div>
`
  })