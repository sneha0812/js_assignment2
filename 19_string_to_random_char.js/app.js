function stringOfRandomChar(c){  
var text = "";  
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  
for(var i=0; i < c; i++ ) {    
text = text + char_list.charAt(Math.floor(Math.random() * char_list.length));  
}  
return text;  
}  
console.log(stringOfRandomChar(5));
