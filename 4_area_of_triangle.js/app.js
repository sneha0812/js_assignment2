function areaOfTriangle(number1, number2, number3) {
    let side1, side2, side3, s, area;
    side1 = number1;
    side2 = number2;
    side3 = number3;
    s = (side1 + side2 + side3) / 2;
    area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    console.log("area of triangle is" + ' ' + area);
}
areaOfTriangle(5, 6, 7);
