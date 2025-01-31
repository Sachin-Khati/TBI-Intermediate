
const color=document.querySelector("#color");
const image=document.querySelector("#image");
const desizn =document.querySelector("#desizn");
const btn=document.querySelector("#btn");
const sum=document.querySelector("#summary");
const cart=document.querySelector("#cart");
const main=document.querySelector("#main");
color.addEventListener("change",function(){
    const select = this.value;
    image.style.backgroundImage=`url('${select}.png')`;
});
desizn.addEventListener("change", function(){
    const select=this.value;
    image.style.backgroundImage=`url('${select}.png')`;
});
btn.addEventListener("click",function(){
    const scolor=color.value;
    cart.classList.remove("hidden");
    cart.classList.add("block");
    main.classList.remove("block");
    main.classList.add("hidden");
    const sdesizn=desizn.value;
    console.log("hello");
    sum.innerHTML=`you sucessfully cart the  ${scolor} color  and ${sdesizn} design`;
});
