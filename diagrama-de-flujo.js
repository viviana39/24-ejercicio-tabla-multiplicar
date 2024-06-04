function multiplica(tabla) {
    var numero = 0
    while(numero <=10) {
        var resultado = [tabla * numero]
        console.log(tabla + "x" + numero + "=" + resultado);
        numero ++
        
    }
    return resultado
}

var tabla = [5]
var result = multiplica(tabla)


console.log(result)