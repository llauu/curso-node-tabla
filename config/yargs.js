const argv = require('yargs')
			.option('b', {
				alias: 'base',
				type: 'number',
				describe: 'Base a multiplicar',
				demandOption: true
			})
			.option('l', {
				alias: 'list',
				type: 'boolean',
				default: false,
				describe: 'Muestra la tabla en la consola',
				demandOption: false
			})
			.option('h', {
				alias: 'hasta',
				type: 'number',
				describe: 'Numero hasta donde quieras multiplicar',
				demandOption: true
			})
			.check((argv, options) => {
				if( isNaN(argv.b)) {
					throw 'La base tiene que ser un numero.'
				}
				return true;
			})
			.check((argv, options) => {
				if( isNaN(argv.h)) {
					throw 'El numero hasta el que quieres multiplicar debe ser un numero'
				}
				return true;
			})
			.argv;


module.exports = argv;