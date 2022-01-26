//Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado +" cm");

function perimetroCuadrado(lado){

    return lado * 4 ;
}
//const perimetroCuadrado = ladoCuadrado * 4 ;

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado +" cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El área del cuadro es: " + areaCuadrada + " cm^2");
console.groupEnd();

//Código del triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const AlturaTriangulo = 5.5;

// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriangulo1 
//     + " cm, " 
//     + ladoTriangulo2 
//     + " cm,"
//     + baseTriangulo 
//     + " cm"
//     );

// console.log("La altura del triángulo es de: " + AlturaTriangulo + " cm");    

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function perimetroTriangulo(lado1, lado2, base){
 return lado1 + lado2 + base;
}
// console.log(
//     "El perimetro del triángulo es de: " 
//     + perimetroTriangulo 
//     + " cm");

// const areaTriangulo = (baseTriangulo * AlturaTriangulo) / 2 ;
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// console.log("El área del triangulo es: " + areaTriangulo + " cm^2");
console.groupEnd();

//Código del circulo
console.group("Circulos");
 
//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm");

//Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + " cm");
function diametroCirculo(radio) {
    return radio * 2;
}


//PI
const PI = Math.PI;
// console.log("PI es: " + PI + " cm");

//Circunferencia
function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio);
    return diametro * PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");

//Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + " cm^2");

console.groupEnd();


//Aquí interactuamos con el HTML
function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}