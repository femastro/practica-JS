// variables
// 
let numero = 1;
let numeros = [1,2,3,4,5,6];
var texto = "Hola Mundo";
let countrys = ["Argentina", "Brasil", "Alemania", "Belgica"]
const users = [
    { name : "Juán", age: 20, country : "Argentina" }, 
    { name : "Pedro", age: 23, country : "España" }, 
    { name : "Nahuel", age: 18, country : "Alemania" }
]

console.log("USERS => ", users);

for (user of users){
    for ( country of countrys ){
        if ( user.country == country ){
            console.table(user);
        }
    }

}

