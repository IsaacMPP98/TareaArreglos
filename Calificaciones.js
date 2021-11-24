function Aprobados(matriz){
    let promedioGeneral = 0;
    let promedio = 0;
    let CantAprobados = 0;
    let CantReprodados = 0;
    let PorAprobado = 0;
    let PorReprobado = 0;
    let sumaP = 0;
    let promedioR = 0;
    let promedioA = 0;
        for(let i = 0; i < matriz.length; ++i){

            let suma = 0;
            for(let j = 0; j < matriz[i].length; ++j){

                suma += matriz[i][j];
            }
                 promedio = suma/matriz.length;
                 sumaP = promedio + sumaP;
                 promedioGeneral = sumaP / matriz.length;

             if (promedio >= 70){
                CantAprobados = CantAprobados + 1;
                promedioA = (promedio + promedioA)/CantAprobados;
            }
             else {
               
                CantReprodados = CantReprodados + 1;
                promedioR = (promedio + promedioR)/CantReprodados;
            }
            console.log('El alumno numero: '+ (i+1)+ ' Tiene de promedio: ' + promedio +'\n')
        }

        PorAprobado = (CantAprobados * 100)/matriz.length;
        PorReprobado = (CantReprodados * 100)/matriz.length;

        console.log('La cantidad de Aprobados son: ' + CantAprobados);
        console.log('El porcentaje de Aprobados es : ' + PorAprobado);
        console.log('La cantidad de Reprobados son: ' + CantReprodados);
        console.log('El porcentaje de Reprobados es : ' + PorReprobado);
        console.log('El Promedio General es : ' + promedioGeneral);
        console.log('El Promedio Aprobados es : ' + promedioA);
        console.log('El Promedio Reprobados es : ' + promedioR);
    }


Aprobados([[100,100,100],[50,50,50],[80,80,80]]);