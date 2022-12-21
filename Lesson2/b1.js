// Bai1
let str = "abcdef";
let arr = str.split('');
let text = "";
for (let i= arr.length-1; i>=0; i--){
    text += arr[i];
}
// alert(text);