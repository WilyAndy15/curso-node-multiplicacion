// imprimir la tabla del 5
const fs = require('fs');


const crearArchivo = async (base,listar) => {
   
    try {
        let salida='';
        for (var i = 1; i <= {base}; i++){
            salida += `${base}x${i} = ${base*i} \n`;
        }
        (fs.writeFileSync(`tabla-${base}.txt`,salida))
        if(listar){
            console.log(salida);
        }
        return `Tabla del ${base}.txt`;
            
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo: crearArchivo 
}