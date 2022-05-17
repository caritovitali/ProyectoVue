<template lang="html">
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

</template>

<script lang="js">
  export default  {
    name: 'tabla-productos',
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
        }
        },
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {
    }
}
</script>

<style scoped lang="scss">

</style>