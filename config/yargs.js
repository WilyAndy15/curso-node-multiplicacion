
const argv = require('yargs')
    .option('b',{
        alias: "base",
        type:"number",
        demandOption: true
    }).option('l',{
        alias:"listar",
        type:"boolean",
        default: false

    })
    .check((argv,options)=>{
        if(isNaN(argv.base)){
            throw "LA BASE DEBE SER UN NUMERO"
        }
        return true;
        

    })
    .argv;

    module.exports = argv;