let insert_pass = prompt('Please, Enter your password.');
let spl_char = ["!", "@", "#", "$", "%", "^", "&", "*", ">"];

for (let i = 0; i < insert_pass.length; i++) {
  let random_position = Math.floor(Math.random() * spl_char.length);
  spl_char.splice(random_position, 0, insert_pass[i]);
}
let strng_pass = "";
let weak_pass = "";
for (let i = 0; i < 5; i++) {
  strng_pass += spl_char[Math.floor(Math.random() * spl_char.length)];
  weak_pass += insert_pass[Math.floor(Math.random() * insert_pass.length)];
}
if (
  insert_pass == "password" ||
  insert_pass == "12345" ||
  insert_pass == "123456789"||
  insert_pass=='12345678'||
  insert_pass=='correct'||
  insert_pass=='wrong'||
  insert_pass=='forgotten'
){
    console.log(`Your ${insert_pass} password is funny password. Please, Enter strong password.`);
}
  console.log(`We recomended your strong password is ${strng_pass}`);
console.log(`Your weak password is ${weak_pass}`);
