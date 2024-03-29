const app = new Vue ({
  el: '#app',
  data:{
    titulo: 'Hola Vue',
    // frutas:['Manzana', 'Pera', 'Platano']
    frutas:[
      {nombre:'Manzana', cantidad: 10},
      {nombre:'Pera', cantidad: 0},
      {nombre:'Platano',cantidad: 6}
    ],
    nuevaFruta:'',
    total: 0

  },
  methods:{
    agregarFruta (){
     this.frutas.push({
       nombre:this.nuevaFruta, 
       cantidad: 0

     });
     this.nuevaFruta = ''

    }
  },
  computed:{
    sumarFrutas(){
      this.total = 0;
      for(fruta of this.frutas){
        this.total = this.total + fruta.cantidad;
      }
      return this.total;

    }
  }

})