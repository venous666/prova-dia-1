// let salario = 3000
// let reajuste = 3000/100*12
// let indicereajustado = "12%"
// let novosalario = (salario + reajuste)

// console.log("novo salario:", novosalario)
// console.log("valor reajustado:", reajuste)
// console.log("indice reajustado:", indicereajustado )

let salario = 3000


if (salario > 3000) {
    let reajuste = salario/100*15
    let novosalario = (salario + reajuste)
    let indice = "15%"

    console.log("novo salario:", novosalario)
    console.log("valor reajustado",reajuste)
    console.log("indice reajustado:",indice)
    
}else if (salario => 2001 || salario >4000){
    let reajuste = salario/100*12
    let novosalario = (salario + reajuste)
    let indice = "12%"

    console.log("novo salario:", novosalario)
    console.log("valor reajustado",reajuste)
    console.log("indice reajustado:",indice)
    

}else{
    let reajuste = salario/100*10
    let novosalario = (salario + reajuste)
    let indice = "10%"

    console.log("novo salario:", novosalario)
    console.log("valor reajustado",reajuste)
    console.log("indice reajustado:",indice)
    
}

    

