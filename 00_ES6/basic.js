// Ejemplo de código en ES6

let data = [{precio: 12}, {precio: 34}, {precio: 19}]; 

data.forEach( elem => {
if (true) {

	const iva = 1.16
	let precioFinal = elem.precio * iva
    
	console.log(`
	Oferta: 
	El precio final es ${precioFinal}`);
    } // Fin del if
 
    //console.log (iva)
    } // fin de lambda
); // Fin de la función foreach 
