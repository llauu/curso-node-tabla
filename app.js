const {crearArchivo} = require('./helpers/multiplicar.js');

const colors = require('colors');
const argv = require('./config/yargs.js');



console.clear();


crearArchivo(argv.base, argv.l, argv.h)
	.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.rainbow))
	.catch(err => console.log(err));