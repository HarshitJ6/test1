const buttons=document.querySelectorAll('.btn');
const op=document.querySelector('.screen');
const op2=document.querySelector('.ansbar');
const equals=document.querySelector('#eq');
const clear=document.querySelector('#clr');
const hist = document.querySelector('#ans');

let history="";

let hold=[op,op2];

for(let i=0; i<2;i++){
hold[i].addEventListener('click',function(){
    hold[i].setAttribute("placeholder"," ");
})
}

hist.addEventListener('click',function (){
   op.value+=history;
})

for (let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function (){
       let x=buttons[i].getAttribute("data-num");
      
        op.value += x;
    })
}

equals.addEventListener('click',function (){
    let random=eval(op.value);
    op.value=random;
    history=random;
})

clear.addEventListener('click',function (){
    op2.value="History:"+history;
    op.value='';
})