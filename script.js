const click= document.querySelector(".btn-primary");
const reset= document.querySelector(".btn-danger");
const result= document.getElementById("flex-box-result");
click.addEventListener("click",ageInDays);
function ageInDays(){
    var birthyear = prompt("What year were you born... oldie?");
    if(birthyear===null || birthyear==="")return;
    var days =(new Date().getFullYear() - birthyear) * 365;
    // console.log(days);
    result.textContent = "Days : "+ days +" Year : "+(days/365);
    result.style.fontWeight= 750;
}
reset.addEventListener("click",function(){
    result.textContent="";
});


