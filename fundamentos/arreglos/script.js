//const arr = new Array(10);


//const arr = [];
//console.log(arr);

// let videojuegos = ['Mario 3' , 'Megaman' , 'Chrono Trigger'];
// console.log(videojuegos[0]);


// let arregloCosas = [
//     true,
//     123,
//     'Antonio',
//     5*3,
//     function(){},
//     () => {},
//     {a:3},
//     ['X' , 'Megaman' , 'Zero' , 'Dr. Light' , [
//         'Dr . Willy',
//         'Woodman'
//     ]]
// ];


// console.log(arregloCosas[2]);
// console.log(arregloCosas[7][4][1]);

/**
 * Arreglos dos 
 */


let juegos = [ 'Zelda' , 'Mario' , 'Metroid' , 'Chrono'];


// console.log(juegos.length);

// let primero = juegos[0];
// let ultimo = juegos[juegos.length - 1];

// console.log(primero);
// console.log(ultimo);


juegos.forEach(function(element , index , arr){
    console.log(element);
    console.log(index);
    console.log(arr)
});


let pos = 1;

let elementoEliminado = juegos.splice(pos , 3);

console.log(elementoEliminado);