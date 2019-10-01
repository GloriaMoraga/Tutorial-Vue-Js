const app = new Vue ({
  el: '#app',
  data:{
    titulo: 'Hola Vue',
    // frutas:['Manzana', 'Pera', 'Platano']
    frutas:[
      {nombre:'Manzana', cantidad: 10},
      {nombre:'Pera', cantidad: 0},
      {nombre:'Platano',cantidad: 6}
    ]
  }
})