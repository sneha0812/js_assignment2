function factorsOfInteger(number) {
    let remainder = 0;
    let factors = [];
    for (let i = 0; i <= number; i++) {
        remainder = number % i;
        if (remainder === 0) {
            factors.push(i);
            break;
        }
        console.log(factors);
    }
}
factorsOfInteger(25);
