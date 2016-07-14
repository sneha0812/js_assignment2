function unique_char(string) {
    let str = string;
    let uniqele = "";
    for (let i = 0; i < str.length; i++) {
        if (uniqele.indexOf(str.charAt(i)) == -1) {
            uniqele += str[i];
        }
    }
    return uniqele;
}
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog")); 
