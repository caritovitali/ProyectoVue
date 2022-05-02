var app = new Vue({
    el: '#app',
    data: {
     valueContador:0,
    },
    methods: {
        sumar(){
            this.valueContador++
        },
        restar(){
            this.valueContador--
        }
    }
  })