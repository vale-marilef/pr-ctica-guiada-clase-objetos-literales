
// /**Objetos literales */
const empleado1={
  codigo:1,
  nombre:"Raúl",
  apellido:"Perez",
  /*Utilización de arreglos en objetos literales */
  descripcion: ["Amable",'Puntual'],
  edad:20,
  dirección:"Av san Juan 1234",
  sueldo:40000,
  
  /*implementación de métodos */
  imprimirInfo: function(){
    return console.log( `Nombre : ${this.nombre} Apellido: ${this.apellido} Edad: ${this.edad}`)
  },
  saludo(){
    return console.log(` Buenas tardes `)
  },
  edadEn20A(){
    return console.log(` Suma de edad: ${this.edad+20} `)
  },
  /*Utilizamos métodos con parámetros:  */
  actualizarSueldo:function(NuevoSueldo){
    this.sueldo=NuevoSueldo
  },
  actualizarEdad(nuevaEdad){
    return console.log(`${this.edad=this.edad+nuevaEdad}`)

  }
}
console.log(empleado1)
console.log(empleado1.codigo)
console.log(empleado1.nombre)
console.log(empleado1.apellido)
console.log(empleado1.descripcion.join(' '))
 console.log(empleado1.edad)
console.log(empleado1.imprimirInfo())
/**Imprimimos los valores del método:  */
empleado1.imprimirInfo()
empleado1.saludo()
empleado1.edadEn20A()
empleado1.NuevoSueldo(500000)
empleado1.actualizarEdad(10)



