const buttonsPlus=document.querySelectorAll('.plus');
const buttonsMinus=document.querySelectorAll('.minus');
const quantityOfItems=document.querySelectorAll('.quantity');
const totalSum=document.querySelector('#total-sum');
const priceOfItems=document.querySelectorAll('.price');
const reseat=document.querySelectorAll('.delete');
const bigdivcontent=document.querySelectorAll('.card');




for(let i=0;i<buttonsMinus.length;i++){
    buttonsMinus[i].addEventListener('click',function(){
        if(quantityOfItems[i].innerHTML>0){
            quantityOfItems[i].innerHTML--;
      totalSum.textContent=parseInt(totalSum.textContent)-parseInt(priceOfItems[i].textContent);
        }
    }
)};
for(let i=0;i<buttonsPlus.length;i++){
    buttonsPlus[i].addEventListener('click',function(){
        quantityOfItems[i].innerHTML++;
    totalSum.textContent=parseInt(totalSum.textContent)+parseInt(priceOfItems[i].textContent);
 }
)};

for(let i=0;i<reseat.length;i++){
    reseat[i].addEventListener('click',function(){
                 bigdivcontent[i].remove();
        totalSum.innerHTML=parseInt(totalSum.innerHTML)-parseInt(priceOfItems[i].innerHTML)*parseInt(quantityOfItems[i].innerHTML);
     });
    }
     for(let i=0;i<like.length;i++)
     {
        like[i].addEventListener('click',function(){
            like[i].style.filter='invert(80%)';
            like[i].style.filter='invert(61%) sepia(73%) saturate(7472%) hue-rotate(344deg) brightness(97%) contrast(90%)';
        })
     };