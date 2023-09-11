let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let lowerCase=document.getElementById("lowerCase");
let upperCase=document.getElementById("upperCase");
let numeric=document.getElementById("numeric");
let symbol=document.getElementById("symbol");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");

inputSlider.addEventListener("input",()=>{
    sliderValue.textContent=inputSlider.value;
})

let lowercase="abcdefghijklmnopqrstuvwxyz";
let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numericAll="0123456789";
let symbolAll="~!@#$%^&*()";



genBtn.addEventListener("click",generatePassword);

function generatePassword(){
    let string="";
    let AllSelectedValue="";
    AllSelectedValue+=lowerCase.checked ? lowercase : "" ;
    AllSelectedValue+=upperCase.checked ? uppercase : "" ;
    AllSelectedValue+=numeric.checked ? numericAll : "" ;
    AllSelectedValue+=symbol.checked ? symbolAll : "" ;

    let i=1;
    while(i<=inputSlider.value){
      string +=AllSelectedValue.charAt(Math.floor(Math.random()*AllSelectedValue.length));
     
       i++;
    }
    passBox.value=string;
}

copyIcon.addEventListener("click",()=>{
    if(string.length>=1){
        navigator.clipboard.writeText(passBox.value);
    }
    
})