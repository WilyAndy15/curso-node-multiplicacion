const {crearArchivo} = require ('./helpers/multiplicar.js');
const argv = require('./config/yargs');


console.clear();

crearArchivo(argv.base,argv.listar).then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));























/*const [ , , arg3 = "base=5"] = process.argv;
const [ , base] = arg3.split('=')
console.log(base)*/



//const base = 7 ;
//crearArchivo(base).then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//.catch(err => console.log(err));