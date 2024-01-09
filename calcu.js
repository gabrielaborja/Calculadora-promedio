
    let nombre= prompt("Inserte su nombre","");
    let asignatura= prompt("Inserte el nombre de la asignatura","");
    alert("Usted insertó su nombre y la asignatura")


let nota_1= parseFloat(prompt("Inserte la primera calificación", ""));
{
   
    if (nota_1>=0 && nota_1<=10){
        alert("La primera calificación está en el rango de 0 a 10")

    } else{
        alert("Ingrese un valor entre 0 y 10")
        nota_1= parseFloat(prompt("Inserte la primera calificación", ""));
        if (nota_1>=0 && nota_1<=10){
            alert("La  primera calificación está en el rango de 0 a 10")
    
        } else{ 
            alert("Ingrese otro valor nuevamente")
        }

    }
    
}

let nota_2= parseFloat(prompt("Inserte la segunda calificación", ""));

{
    
    if (nota_2>=0 && nota_2<=10){
        alert("La segunda calificación está en el rango de 0 a 10")

    } else{
        alert("Ingrese un valor entre 0 y 10")
        nota_2= parseFloat(prompt("Inserte la segunda calificación", ""));
        if (nota_2>=0 && nota_2<=10){
            alert("La segunda calificación está en el rango de 0 a 10")
    
        } else{ 
            alert("Ingrese otro valor nuevamente")
        }

    }
    
}

let nota_3= parseFloat(prompt("Inserte la tercera calificación", ""));
{

    if (nota_3>=0 && nota_3<=10){
        alert("La tercera calificación está en el rango de 0 a 10")

    } else{
        alert("Ingrese un valor entre 0 y 10")
        nota_3= parseFloat(prompt("Inserte la tercera calificación", ""));
        if (nota_3>=0 && nota_3<=10){
            alert("La tercera calificación está en el rango de 0 a 10")
    
        } else{ 
            alert("Ingrese otro valor nuevamente")
        }

    }
    
}

let promedio=(nota_1 + nota_2 + nota_3)/3;
{
if (promedio>=7){
    alert(`${nombre} ¡Felicidades! Has aprobado ${asignatura} con un promedio de ${promedio.toFixed(2)}`);

} else{
  alert(`${nombre}, gracias por tu esfuerzo. Nos vemos pronto en clase de ${asignatura}. El promedio obtenido es ${promedio.toFixed(2)}`);

}

}