const colors= ["green","red","rgba(133,122,200","#f15025"];
const btn=document.getElementById('btn');
const color=document.querySelector(".color");

btn.addEventListener('click',function(){
    //get random number b/w 0-3 :index of array colors
    const rand=random();
    document.body.style.backgroundColor=colors[rand];
    color.textContent=colors[rand];  
});
function random(){return Math.floor(Math.random()*colors.length);}