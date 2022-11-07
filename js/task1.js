//Task 1
const text = document.getElementsByTagName('div');
const body = document.getElementsByTagName('body')[0];
body.insertBefore(text[2], text[0]);
body.insertBefore(text[4], text[1]);
body.insertBefore(text[3], text[2]);
body.insertBefore(text[5], text[3]);
body.insertBefore(text[5], text[4]);

console.log(document.getElementById('string-3').textContent);
console.log(document.getElementById('string-5').textContent);
console.log(document.getElementById('string-2').textContent);
console.log(document.getElementById('string-6').textContent);
console.log(document.getElementById('string-4').textContent);
console.log(document.getElementById('string-1').textContent);
