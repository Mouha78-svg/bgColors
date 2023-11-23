const value = document.querySelector('.value');
const btn = document.querySelector('#btn');
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click',function(){
    let colorHex = '#';
    for(let i = 0; i < 6;i++){
       colorHex += hex[getRandomNum()];
    }
    document.body.style.backgroundColor = colorHex;
    value.textContent = colorHex;
})
function getRandomNum (){
    return Math.floor(Math.random() * hex.length);
}