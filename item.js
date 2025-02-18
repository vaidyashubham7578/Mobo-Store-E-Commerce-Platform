//hemburger
const menubutton=document.querySelector('.menu-button');
const content=document.querySelector('.content');
menubutton.addEventListener("click",()=>{
    menubutton.classList.toggle("active");
    content.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
    menubutton.classList.remove("active");
    content.classList.remove("active");
}))


//product image
var mainimg= document.querySelectorAll('.big-img');
var smallimg=document.querySelectorAll('.small-img');

smallimg[0].onclick=function(){
    mainimg[0].src=smallimg[0].src;
}
smallimg[1].onclick=function(){
    mainimg[0].src=smallimg[1].src;
}
smallimg[2].onclick=function(){
    mainimg[0].src=smallimg[2].src;
}
smallimg[3].onclick=function(){
    mainimg[0].src=smallimg[3].src;
}