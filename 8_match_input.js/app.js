function matchInput(number) {
    let yourNumber = prompt("enter a number between 1-30");
    if (yourNumber >= 1 && yourNumber <= 10) {
        console.log("good work");
    }
    else {
        console.log("try again");
    }
}
matchInput();
