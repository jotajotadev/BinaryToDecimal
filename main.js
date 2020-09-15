const base = 2;
let inputBinary = document.getElementById("inputBinary");
let finalResult = document.getElementById("finalResult");
let buttonConvert = document.getElementById("convert");

const convertDecimal = () => {


    let lengthBinary = (inputBinary.value.length) - 1; //retorna la cantidad de elementos -1
    let arrayBinary = inputBinary.value.split(""); //convierte a un array
    let valueBinary = inputBinary.value * 3; //retonara NaN is es valor no es un numero


    if (valueBinary){
        if(inputBinary.value.includes("2") || inputBinary.value.includes("3") || inputBinary.value.includes("4")
        || inputBinary.value.includes("5") || inputBinary.value.includes("6") || inputBinary.value.includes("7")
        || inputBinary.value.includes("8") || inputBinary.value.includes("9")){
            finalResult.style.color = "tomato";
            finalResult.textContent = "ingresa un valor válido"
        } else {

            let arrayPotencia = [] //array para guardar los exponentes
            for(let i=0; i<=lengthBinary; i++){
                arrayPotencia.push(Math.pow(base, i));
            }
            arrayPotencia.reverse(); //invertir el orde para igualar con arrayBinary

            console.log(arrayPotencia);

            let arraySumar = [];
            for (let i=0; i<=lengthBinary; i++){
                if(arrayPotencia[i] + parseInt(arrayBinary[i])  !== arrayPotencia[i]) {
                    arraySumar.push(arrayPotencia[i]);
                }

            } 
            let resultado = 0;
            arraySumar.forEach(element => {
                resultado += element;
            });  

            
            finalResult.style.color = "#4465B9";
            finalResult.textContent = "Decimal: " + resultado;
        }
    
    } else {
        finalResult.style.color = "tomato";
        finalResult.textContent = "ingresa un valor válido"
    }

}

buttonConvert.addEventListener("click", convertDecimal);