//matriz triangular inferior 
function sonTodosArreglos(matriz){
    matriz.forEach((fila) =>{
     if(!(fila instanceof Array)){
            return false;
        }

    }); 

    return true;
}

function esMatrizTriangularInnferior(matriz){
    if(matriz instanceof Array){
        if(sonTodosArreglos(matriz)){
            if(matriz.length === matriz[0].length){
                for(let i = 0; i < matriz.length; ++i){
                    for(let j = 0; j < matriz[i].length; ++j){
                        if (j > i && matriz[i][j] !==0){
                            return false;
                        }
                    }
                }

                return true;

            }else {
                throw TypeError("La matriz debe ser cuadrada ")
            }
        }else{
            throw TypeError("Todas las filas de la matriz deben ser arreglos")
        }
    }else {
        throw TypeError('El argumento debe ser un arreglo')
    }
}


try{
    console.log(esMatrizTriangularInnferior([[1,0,0],[2,1,0],[3,2,8]]));
} catch(error){
console.log(`Error: ${e.message}`);
}