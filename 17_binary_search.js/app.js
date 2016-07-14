function binarySearch() {
    let c, first, last, middle, len, search;
    let array = new Array();
    array = prompt("enter elements of array");
    for (c = 0; c <= array.length; c++) {
        len++;
    }
    search = prompt("enter the elements you want to search");
    first = 0;
    last = len;
    middle = (first + last) / 2;
    while (first <= last) {
        if (array[middle] < search) {
            first = middle + 1;
        }
        else if (array[middle] === search) {
            console.log(middle + 1);
            break;
        }
        else
            last = middle - 1;
           middle = (first + last) / 2;
    }
    if (first > last)
        console.log("Not found!");
}

binarySearch();
