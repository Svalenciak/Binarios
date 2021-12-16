function Convert() {
    //variables
    let restBin = []


    let numero = document.getElementById("number").value

    //Condiciones       
    if (numero !== "") {

        while (numero > 1) {
            restBin.push(numero % 2)
            numero = Math.floor(numero / 2)
        }
        restBin.push(numero)
        console.log(numero)
        document.getElementById("resultado").innerHTML = parseInt(restBin.reverse().join(''))
        document.getElementById("message").innerHTML = "";
    } else {
        document.getElementById("message").innerHTML = "ingrese un numero"
    }

    let cd = '';
    restBin.forEach(el => {
        cd += String(el);
    });

    let cantidadMax = obtenerCantidadMaximaCerosConsecutivos(cd)


    document.getElementById("maximo").innerHTML = 'Longitud de su espacio binario más largo es ' + cantidadMax;


}

function obtenerCantidadMaximaCerosConsecutivos(binario) {
    if (typeof binario != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let bits = binario.split('');

    if (!bits.every(e => e == '0' || e == '1')) {
        throw Error('La cadena sólo puede contener bits (0 ó 1).');
    }

    let resultado = binario.split('1').map(s => s.length);


    return Math.max(...resultado);
}