const text = document.querySelector('.txt');
const img = document.querySelector('.img');
const btn = document.querySelector('.btn');


console.log(text);
console.log(text);
console.log(img);
console.log(btn);



btn.addEventListener('click',()=>{
if (text.value.length > 0) {
    let txt = text.value
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${txt.value}`
}else{
    console.log('else chl gya');
}
})