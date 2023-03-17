const stdin = process.openStdin();
const year = new Date().getFullYear();
let birthyear, age, permitirIngreso = 0, controlIngreso;

const promesaIngreso = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (controlIngreso == 1) {
            resolve("Ingreso Permitido");
        } else {
            reject("Ingreso Denegado");
        }
    }, 5000);
});

function ingreso(age) {
    if (age >= 18 && age < 86) {
        permitirIngreso = 1;
    }
    return permitirIngreso;
}

console.log("Bienvenido a Nuestro Bar");
console.log("Escribe tu año de nacimiento:");

stdin.addListener("data", (data) => {
    birthyear = parseInt(data, 10);
    age = year - birthyear;
    controlIngreso = ingreso(age);
    //console.log("Edad: " + age + "Control " + controlIngreso);
   
    
    promesaIngreso.then((controlIngreso) => {
        console.log(controlIngreso);
        process.exit();
             
             
     
     }).catch(err => {
         console.error(err);
         process.exit();
     
     });

});
