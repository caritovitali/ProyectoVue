<template lang="html">
 <table class="min-w-full leading-normal">
						<thead>
							<tr>
								<th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Nombre Completo
								</th>
								<th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Email
								</th>
								<th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Telefono
								</th>
                                	<th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Sexo
								</th>
                                	<th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Intereses
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(persona,i) in personas" :key="i" v-if="personas.length > 0">
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
											<div>
												<p class="text-gray-900 whitespace-no-wrap">
												{{persona.nombre_completo}}
												</p>
											</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">	{{persona.email}}</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										{{persona.telefono}}
									</p>
								</td>
                                	<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										{{persona.sexo}}
									</p>
								</td>
                                	<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap" v-for="interes in persona.intereses">
										{{interes}}
									</p>
								</td>						
							</tr>
                            <tr v-if="personas.length == 0">
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm" colspan="5">No hay datos de personas cargadas</td>

                            </tr>
							
						</tbody>
					</table>


</template>

<script lang="js">
  export default  {
    name: 'tabla-personas',
    props: {
         personas: {
            type: Array,
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