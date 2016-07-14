function rightRotation(string) {
    let i, j, len, swap;
    str = Array[20];
    for (i = 0; str[i].length !== '\0'; i++) {
        len++;
    }
    i = 0;
    j = len;
    for (i = 0; str[i].length !== '\0'; i++) {
        swap = str[i];
        str[i] = str[j];
        str[j] = swap;
        i++;
        j--;
        console.log(str[j]);
    }
}
rightRotation("wertyui");
