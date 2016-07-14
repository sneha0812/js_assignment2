function biggerElements(number) {
    let array = new Array();
    let numbers = prompt("enter the numbers to store in array");
    array = numbers;
    let num = prompt("enter any number from array"); {
        return function element(number) {
            return numbers > num;
        };
    }
    let result = array.filter(element);
    console.log(result);
}
biggerElements();
