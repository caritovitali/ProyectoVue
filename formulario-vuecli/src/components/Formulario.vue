<template>
<!-- component -->
    <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div class="grid  gap-8 grid-cols-1">
            <div class="flex flex-col ">
                    <div class="flex flex-col sm:flex-row items-center">
                        <h2 class="font-semibold text-lg mr-auto">Formulario</h2>
                        <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                    </div>
                    <div class="mt-5">
                        <div class="form">
                            <form method="POST" id="formulario">
                                <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                                    <div class="mb-3 space-y-2 w-full text-xs">
                                        <label class="font-semibold text-gray-600 py-2">Nombre Completo <abbr title="required">*</abbr> <span v-if="!alert.nombre_completo && form.nombre_completo"><svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span></label>
                                        <input v-model="form.nombre_completo" @keyup="validarNombreCompleto" name="nombre_completo" placeholder="Nombre Completo" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" >
                                    <p class="text-red-500 bold text-xs " v-if="alert.nombre_completo">{{alert.nombre_completo}}</p>  
                                    </div>
                                  
                                </div>
                                <div class="mb-3 space-y-2 w-full text-xs">
                                        <label class="font-semibold text-gray-600 py-2"> Email <abbr title="required">*</abbr><span v-if="!alert.email && form.email"><svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span></label>
                                        <input v-model="form.email" @keyup="validarEmail" name="email" placeholder="Email " class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="email" >
                                         <p class="text-red-500 bold text-xs " v-if="alert.email" >{{ alert.email }}</p>   
                                    </div>
                                    <div class="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                        <div class="w-full flex flex-col mb-3">
                                            <label class="font-semibold text-gray-600 py-2">Telefono<abbr title="required">*</abbr><span v-if="!alert.telefono && form.telefono"><svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span></label>
                                            <input v-model="form.telefono"  @keyup="validarTelefono" name="telefono"  placeholder="Teléfono" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text">
                                            <p class="text-red-500 bold text-xs " v-if="alert.telefono">{{alert.telefono}}</p>  
                                         </div>
                                            <div class="w-full flex flex-col mb-3">
                                                <label class="font-semibold text-gray-600 py-2">Sexo</label>
                                                <select v-model="form.sexo" name="sexo" class="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required" >
                                                <option value="">Seleccione una opcion</option>
                                                <option value="Masculino">Masculino</option>
                                                <option value="Femenino">Femenino</option>
                                                <option value="No Definido">No Definido</option>
                                                </select>
                                            
                                            </div>
                                        </div>
                                               <div class="mb-3 space-y-2 w-full text-xs">
                                        <label class="font-semibold text-gray-600 py-2"> Intereses </label>
            

                                               <div class="flex flex-col">
                                                    <label class="inline-flex items-center mt-3">
                                                        <input v-model="form.intereses" value="Deportes" type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" ><span class="ml-2 text-gray-700">Deportes</span>
                                                    </label>

                                                    <label class="inline-flex items-center mt-3">
                                                        <input v-model="form.intereses" value="Informatica"  type="checkbox" class="form-checkbox h-5 w-5 text-red-600" ><span class="ml-2 text-gray-700">Informatica</span>
                                                    </label>
                                                </div>
                                         </div>
                                
                                        <p class="text-xs text-red-500 text-right my-3">Campos requeridos con asterisco <abbr title="Required field">*</abbr></p>
                                        <div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                                            <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" @click="resetForm()"> Cancelar </button>
                                            <button class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500" @click="emitirFormulario()" >Enviar</button>
                                        </div>
                                          </form>
                                    </div>
                                  
                                </div>
                                
                            </div>
                        </div>
			</div>
    
  
</template>

<script>
export default {
    name: 'formulario-v',
    data: () => ({
        form: {
            nombre_completo: '',
            telefono: '',
            email: '',
            intereses: [],
            sexo: ''
        },
        alert: {
            nombre_completo: '',
            email: '',
            telefono: '',
        },
        }),
        methods:{
             capitalize(value) {
                return value.replace(/\b\w/g, l => l.toUpperCase())
             },
            emitirFormulario() {
                        if (!this.alert.nombre_completo && this.form.nombre_completo && !this.alert.email && this.form.email && !this.alert.telefono && this.form.telefono) {                               
                                this.$emit('submit-formulario', {
                                    nombre_completo:  this.capitalize(this.form.nombre_completo),
                                    telefono: this.form.telefono,
                                    email: this.form.email.toLowerCase(),
                                    intereses: this.form.intereses,
                                    sexo: this.form.sexo
                                });

                                this.resetForm();

                                }else {
                                    console.log("ojoo")
                                    window.scroll(0,0)
                                }
                        },
                        resetForm(){
                                    Object.keys(this.form).forEach(key => this.form[key] = '');
                                    this.form.intereses = [];
                                },
                        validarEmail(){
                                const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                                this.alert.email = emailRegExp.test(this.form.email) ? '' : 'Formato de email inválido.';
           
                                },
                         validarNombreCompleto(){
                               const fullNameRegExp = /[a-zA-Z]{2,}\s+[a-zA-Z]{2,12}/g;
                                this.alert.nombre_completo = fullNameRegExp.test(this.form.nombre_completo) ? '' : 'Formato de nombre completo inválido.';
                               
                                },
                            validarTelefono(){
                               const fullNumberRegExp = /\d+/;
                                this.alert.telefono = fullNumberRegExp.test(this.form.telefono) ? '' : 'Formato de telefono inválido, solo números.';
                               
                                }                  
        }
          
                    
}
</script>

<style>

</style>