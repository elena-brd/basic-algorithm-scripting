function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

convertCtoF(30);
console.log(convertCtoF(-30));
console.log(convertCtoF(-10));