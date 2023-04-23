class password{
    constructor(pass){
        this.pass="";
    }
    getpass(pass_len){
        let char='abcdefghijklmnopqrstuvwxyz';
        let num='1234567890';
        let spl_char='!@#$%^&*)>';
        let i=0;
        if(pass_len<=3){
            console.log('Your password length should must be greather then 3');
        }else{
        while(i<pass_len){
            this.pass+=char[Math.floor(Math.random()*char.length)];
            this.pass+=num[Math.floor(Math.random()*num.length)];
            this.pass+=spl_char[Math.floor(Math.random()*spl_char.length)];
            i++;
        }
        return this.pass.substring(0,pass_len);
    }}
}
let p1=new password();
let fnl_pass=p1.getpass(Number.parseInt(pass_len=prompt('Enter your password length.')));
document.getElementById("strong_pass").value=fnl_pass;
console.log("Your strong password is :- "+fnl_pass);

function copiedtxt() {
    // Get the text field
    var copyText = document.getElementById("strong_pass");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 30); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied Password:- "+ copyText.value);
}