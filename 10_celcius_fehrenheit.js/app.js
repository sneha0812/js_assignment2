function celciusFehrenheitConversion(number) {
    let celcius, fehrenheit;
    let value = prompt("enter 1 to convert celcius to fehrenheit and 2 for vice versa");
    if (value === 1) {
        fehrenheit = ((9 * ((9 * number) + 160)) / 45);
        console.log(fehrenheit);
    }
    if (value === 2) {
        celcius = ((5 * (f - 32)) / 9);
        console.log(celcius);
    }
}
celciusFehrenheitConversion(22);
