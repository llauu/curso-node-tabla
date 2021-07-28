const fs = require('fs');

const colors = require('colors');

const crearArchivo = async(base, listar, hasta) => {
	try {

		let salida = '';
		let consola = '';

		for (let i = 1; i <= hasta; i++) {
			let result = base * i;

			salida += `${base} x ${i} = ${result} \n`; 
			consola += colors.brightBlue(base) + ' x '.yellow + colors.brightBlue(i) + ' = '.yellow + colors.brightBlue(result) + '\n';

		}

		if (listar) {
			console.log('====================='.rainbow);
			console.log(`    Tabla del ${base}     `.red);
			console.log('====================='.rainbow);

			

			console.log(consola);	
		}

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

		return `tabla-${base}.txt`;
	} catch (err) {
		throw err;
	}
}


module.exports = {
	crearArchivo: crearArchivo
// 	generalmente se le coloca el mismo nombre
}