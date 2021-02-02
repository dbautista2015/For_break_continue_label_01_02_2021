// let lista_chicas =["Diana", "Andrea", "Mariana", "Laura"];
// let lista_chicos = ["Miguel", lista_chicas,"Diego", "Sergio"];

// // for (let i = 0; i < lista.length; i++){
// //     if(lista[i]=="Diego"){
// //         continue;
// //     }
// //     console.log(lista[i]);
// // }
// lista_chicos_ciclos:
// for (let chicos in lista_chicos){
//         if(typeof(lista_chicos[chicos])=="object"){
//             lista_chicas_ciclos:
//             for(let chicas of lista_chicos[chicos]){
//                 //break lista_chicas_ciclos;
//                 console.log(`Chicas en el diplomado ${chicas}`);
//             }
//             continue;
//         }else {
//             continue lista_chicos_ciclos;
//             console.log(lista_chicos[chicos]);
//         }
// }


let animeles_aerios = ["Aguila", "Paloma", "Loro", "Colibri"];
let animeles_terrestres = ["Perro", "Gato", "Vaca", "Raton"];
let animeles_acuticos = ["Pez", "Trucha", "Salmon", "Delfin"];


cliclo_aerios:
for(let aerios of animeles_aerios){
    cliclo_terrestres:
    for(let terrestres of animeles_terrestres){
            cliclo_acuaticos:
            for(let acuticos of animeles_acuticos){
                console.count();
                // break cliclo_acuaticos;
                console.log(`Animales Acuaticos: ${acuticos}`);
            }
        break cliclo_terrestres;
        console.log(`Animales Terrestres: ${terrestres}`);
    }
    break cliclo_aerios;
    console.log(`Animales Aereos: ${aerios}`);
}
    