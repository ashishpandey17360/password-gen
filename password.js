const btnEl=document.querySelector(".btn")
const inputEl= document.getElementById("input")
const copyEl=document.querySelector('.fa-solid')
const alertEl=document.querySelector(".alert-container")
const Cel=document.querySelector(".Cel")




 btnEl.addEventListener("click",()=>{
    createPassword()
 })

 copyEl.addEventListener("click", ()=>{
    copyPassword()

    if (inputEl.value) {
      alertEl.classList.remove("active");
      setTimeout(() => {
        alertEl.classList.add("active");
      }, 2000);
    }
 })

 function createPassword(){
    const chars="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordLength=14;

    let password = "";
    for (let index = 0; index < passwordLength; index++) {
       {
        const random= Math.floor(Math.random() * chars.length)
        password+= chars.substring(random,random + 1)
       
       }
       
    }
    inputEl.value = password;
    alertEl.innerText= password + " Coppied";
   }
    
   

 function copyPassword(){
    inputEl.select()
    inputEl.setSelectionRange(0,999)
    navigator.clipboard.writeText(inputEl.value)
    

 }


 Cel.addEventListener("click",()=>{

      

   string = ""
     document.querySelector("input").value = string;

 

});


